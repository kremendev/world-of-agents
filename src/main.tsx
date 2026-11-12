import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/pixelify-sans/wght.css';
import App from './App.tsx';
import { liveEnabled } from './live/hall';
import { startTeamSession, takeKey } from './team/key';
import './index.css';

// The team editor's one-time key (v3.4c): out of the address bar before anything renders, and handed to the hall once.
// The hosted demo has no hall: there it is only removed.
const teamSession = liveEnabled() ? startTeamSession() : (takeKey(window.location, window.history), null);

const root = document.getElementById('root');
if (!root) throw new Error('index.html is missing <div id="root">');

createRoot(root).render(
  <StrictMode>
    <App teamSession={teamSession} />
  </StrictMode>,
);
