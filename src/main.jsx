import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const tree = <StrictMode><App /></StrictMode>
const el = document.getElementById('root')

/* The build prerenders real markup into #root, so hydrate over it rather than
   discarding and rebuilding. createRoot is the fallback for `vite dev`. */
if (el.hasChildNodes()) hydrateRoot(el, tree)
else createRoot(el).render(tree)
