/*
 * Build-time server entry.
 *
 * The baseline shipped <body><div id="root"></div></body> — nothing painted
 * and nothing was readable until the JS bundle ran. For a shop whose
 * customers are mostly on phones in the mountains, and whose traffic comes
 * from local search, that is the wrong default. This renders the real page
 * into the HTML at build time; main.jsx hydrates over it.
 */
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export function render() {
  return renderToString(<StrictMode><App /></StrictMode>);
}
