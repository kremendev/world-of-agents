import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/pixelify-sans/wght.css';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root');
if (!root) throw new Error('index.html is missing <div id="root">');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
