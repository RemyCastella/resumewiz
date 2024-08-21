import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './assets/fonts/OpenSansRegular.ttf';
import './assets/fonts/OpenSansItalic.ttf';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
