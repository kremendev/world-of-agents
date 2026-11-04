import { describe, expect, it, vi } from 'vitest';
import type { Logger } from 'vite';
import { quietWhenNoHall } from './quiet-logger';

const proxyError = (code: string) => ({
  error: Object.assign(new Error(`connect ${code} 127.0.0.1:4319`), { code }),
});

describe('quietWhenNoHall', () => {
  const setup = () => {
    const error = vi.fn();
    return { error, logger: quietWhenNoHall({ error } as unknown as Logger) };
  };

  it('hides a refused connection through the proxy: no hall is running', () => {
    const { error, logger } = setup();
    logger.error('http proxy error: /api/health', proxyError('ECONNREFUSED'));
    logger.error('http proxy error: /api/events', proxyError('ECONNREFUSED'));
    expect(error).not.toHaveBeenCalled();
  });

  it('still prints a hall dying mid-stream, and any other proxy error', () => {
    const { error, logger } = setup();
    logger.error('http proxy error: /api/events', proxyError('ECONNRESET'));
    logger.error('http proxy error: /api/health', proxyError('ETIMEDOUT'));
    expect(error).toHaveBeenCalledTimes(2);
  });

  it('still prints errors that have nothing to do with the proxy, with what they came with', () => {
    const { error, logger } = setup();
    const options = proxyError('ECONNREFUSED');
    logger.error('Failed to load a config file', options);
    logger.error('Build failed');
    expect(error).toHaveBeenNthCalledWith(1, 'Failed to load a config file', options);
    expect(error).toHaveBeenNthCalledWith(2, 'Build failed', undefined);
  });
});
