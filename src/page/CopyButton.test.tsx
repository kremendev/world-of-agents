import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { COPY_SAID_MS, CopyButton } from './CopyButton';

/** jsdom has no clipboard: a test gives the page one, or none. */
function clipboard(writeText?: (text: string) => Promise<void>) {
  const spy = vi.fn(writeText ?? (async () => {}));
  Object.defineProperty(navigator, 'clipboard', { value: { writeText: spy }, configurable: true });
  return spy;
}

afterEach(() => {
  Reflect.deleteProperty(navigator, 'clipboard');
  vi.useRealTimers();
});

const press = async (name: RegExp | string) => {
  fireEvent.click(screen.getByRole('button', { name }));
  await act(async () => {});
};

describe('CopyButton', () => {
  it('says what it copies to screen readers, and has an empty status region ready', () => {
    render(<CopyButton text="Hi" what="the report" />);
    expect(screen.getByRole('button', { name: 'Copy the report' })).toHaveClass('link');
    expect(screen.getByRole('status')).toBeEmptyDOMElement();
  });

  it('copies the cleaned text and says "Copied", on the button and in the status region', async () => {
    const writeText = clipboard();
    render(<CopyButton text="All done. See [the fix](https://example.com)." what="the message" />);
    await press('Copy the message');
    expect(writeText).toHaveBeenCalledWith('All done. See the fix.');
    expect(screen.getByRole('button')).toHaveTextContent('Copied');
    expect(screen.getByRole('status')).toHaveTextContent('Copied');
  });

  it('says how many hidden characters it removed, every time', async () => {
    const writeText = clipboard();
    const hidden = String.fromCodePoint(0x202e) + String.fromCodePoint(0x200b);
    render(<CopyButton text={`a${hidden}b${String.fromCodePoint(0xfeff)}`} what="the message" />);
    await press('Copy the message');
    expect(writeText).toHaveBeenCalledWith('ab');
    expect(screen.getByRole('status')).toHaveTextContent('Copied, 3 hidden characters removed');
  });

  it('says "1 hidden character", not "characters"', async () => {
    clipboard();
    render(<CopyButton text={`a${String.fromCodePoint(0x200b)}`} what="the message" />);
    await press('Copy the message');
    expect(screen.getByRole('status')).toHaveTextContent('Copied, 1 hidden character removed');
  });

  it('says "Couldn\'t copy" when the browser refuses, and when there is no clipboard at all', async () => {
    clipboard(async () => {
      throw new Error('denied');
    });
    const { unmount } = render(<CopyButton text="Hi" what="the message" />);
    await press('Copy the message');
    expect(screen.getByRole('status')).toHaveTextContent("Couldn't copy");
    unmount();

    Reflect.deleteProperty(navigator, 'clipboard');
    render(<CopyButton text="Hi" what="the message" />);
    await press('Copy the message');
    expect(screen.getByRole('status')).toHaveTextContent("Couldn't copy");
  });

  it(`says "Copy" again after ${COPY_SAID_MS / 1000} s`, async () => {
    vi.useFakeTimers();
    clipboard();
    render(<CopyButton text="Hi" what="the message" />);
    await press('Copy the message');
    expect(screen.getByRole('button')).toHaveTextContent('Copied');
    act(() => vi.advanceTimersByTime(COPY_SAID_MS - 1));
    expect(screen.getByRole('button')).toHaveTextContent('Copied');
    act(() => vi.advanceTimersByTime(1));
    expect(screen.getByRole('button', { name: 'Copy the message' })).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeEmptyDOMElement();
  });
});
