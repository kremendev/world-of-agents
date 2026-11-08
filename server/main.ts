// `npm run hall`: builds the page, then serves it and the API on http://127.0.0.1:4319.
import { resolve } from 'node:path';
import { PORT } from './hall';
import { listPage } from './page';
import { serve } from './serve';

const dist = resolve(import.meta.dirname, '../dist');

try {
  const { address, tokenFile } = await serve({ dir: dist, files: new Map(Object.entries(listPage(dist))) });
  console.log(`Forge Hall: http://${address.address}:${address.port}\nHook token: ${tokenFile}`);
} catch (error) {
  const code = (error as NodeJS.ErrnoException).code;
  console.error(
    code === 'EADDRINUSE'
      ? `Port ${PORT} is already in use. Is the hall running in another terminal?`
      : `The hall could not start (${code ?? 'unknown error'}).`,
  );
  process.exit(1);
}
