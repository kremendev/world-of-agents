import type { Logger } from 'vite';

/**
 * In Demo the page looks for a hall every 5 s, and with none running Vite's dev proxy prints each refused connection as
 * an error with a stack. No hall is normal, so that one is hidden. Everything else still prints, such as a hall dying
 * mid-stream (ECONNRESET). Vite adds its error handler after our `configure`, so the logger is the only place to do it.
 */
export function quietWhenNoHall(logger: Logger): Logger {
  const { error } = logger;
  logger.error = (message, options) => {
    const code = (options?.error as NodeJS.ErrnoException | null | undefined)?.code;
    if (message.includes('http proxy error') && code === 'ECONNREFUSED') return;
    error(message, options);
  };
  return logger;
}
