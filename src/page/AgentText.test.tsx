import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AgentText } from './AgentText';

const shown = (text: string) => render(<AgentText text={text} />).container;

describe('AgentText', () => {
  it('leaves plain text alone', () => {
    const box = shown('Routes are up, 2 * 3 = 6.');
    expect(box.innerHTML).toBe('Routes are up, 2 * 3 = 6.');
  });

  it('shows `code` and **bold** as real elements, in place', () => {
    const box = shown('Run `npm test` then **ship it** today');
    expect(box.querySelector('code')).toHaveTextContent('npm test');
    expect(box.querySelector('strong')).toHaveTextContent('ship it');
    expect(box.textContent).toBe('Run npm test then ship it today');
  });

  it('handles several spans, at both ends of the text', () => {
    const box = shown('`a` and `b` and **c**');
    expect([...box.querySelectorAll('code')].map((el) => el.textContent)).toEqual(['a', 'b']);
    expect(box.querySelector('strong')).toHaveTextContent('c');
    expect(box.textContent).toBe('a and b and c');
  });

  it.each([
    ['in plain text', '<img src=x onerror=alert(1)>', '<img src=x onerror=alert(1)>'],
    ['in a code span', '`<img src=x onerror=alert(1)>`', '<img src=x onerror=alert(1)>'],
    ['in bold', '**<img src=x onerror=alert(1)>**', '<img src=x onerror=alert(1)>'],
    ['split around a span', '<img src=x `onerror`=alert(1)>', '<img src=x onerror=alert(1)>'],
  ])('never turns markup into an element: <img onerror> %s', (_where, input, text) => {
    const box = shown(input);
    expect(box.querySelector('img')).toBeNull();
    expect(box.querySelector('[onerror]')).toBeNull();
    expect(box.textContent).toBe(text);
  });

  it.each([
    ['a lone backtick', 'a ` b'],
    ['empty backticks', 'a `` b'],
    ['unclosed bold', 'a **b'],
    ['a code span over two lines', 'a `b\nc` d'],
    ['bold over two lines', 'a **b\nc** d'],
    ['a link with no target', '[site]'],
    ['an unclosed link', '[site](https://example.com'],
    ['a space before the target', '[site] (https://example.com)'],
    ['link text over two lines', '[si\nte](https://example.com)'],
    ['a heading', '# Done'],
    ['single stars', '*not bold*'],
  ])('keeps %s as plain text', (_what, input) => {
    const box = shown(input);
    expect(box.children).toHaveLength(0);
    expect(box.textContent).toBe(input);
  });

  it('shows a code span inside bold, as a real run 3 message has it', () => {
    const box = shown('**Built-in `http` only, no dependencies:** done');
    expect(box.querySelector('strong code')).toHaveTextContent('http');
    expect(box.querySelector('strong')).toHaveTextContent('Built-in http only, no dependencies:');
    expect(box.textContent).toBe('Built-in http only, no dependencies: done');
  });

  it('never turns markup into an element inside code inside bold', () => {
    const box = shown('**a `<img src=x onerror=alert(1)>` b**');
    expect(box.querySelector('img')).toBeNull();
    expect(box.querySelector('strong code')).toHaveTextContent('<img src=x onerror=alert(1)>');
  });

  it('keeps stars inside a code span as they are', () => {
    const box = shown('`a **b** c`');
    expect(box.querySelector('strong')).toBeNull();
    expect(box.querySelector('code')).toHaveTextContent('a **b** c');
  });

  describe('links: only the text, never a link', () => {
    it.each([
      ['a link', 'see [the docs](https://evil.example/a.html) now', 'see the docs now'],
      ['a javascript: target', 'press [click me](javascript:alert(1)) here', 'press click me here'],
      ['an image', '![the chart](https://evil.example/c.png)', 'the chart'],
      ['an empty text', 'a [](https://evil.example) b', 'a  b'],
      ['two links', '[one](https://a.example) and [two](https://b.example)', 'one and two'],
    ])('%s shows as its text alone', (_what, input, text) => {
      const box = shown(input);
      expect(box.querySelector('a, img')).toBeNull();
      expect(box.textContent).toBe(text);
      expect(box.innerHTML).not.toMatch(/https?:|javascript:|evil/);
    });

    it('keeps code inside a link, and a link inside bold', () => {
      const box = shown('[`npm test`](https://evil.example) then **see [docs](https://evil.example)**');
      expect(box.querySelector('a')).toBeNull();
      expect(box.querySelector('code')).toHaveTextContent('npm test');
      expect(box.querySelector('strong')).toHaveTextContent('see docs');
      expect(box.textContent).toBe('npm test then see docs');
    });

    it('leaves a link inside a code span as it is: code is shown as written', () => {
      const box = shown('`[x](https://example.com)`');
      expect(box.querySelector('code')).toHaveTextContent('[x](https://example.com)');
    });
  });
});
