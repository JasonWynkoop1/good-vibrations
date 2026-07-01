import { StrictMode } from 'react'
import { ViteReactSSG } from 'vite-react-ssg/single-page'
import './index.css'
import App from './components/App.tsx'

// Single-page static-site generation: renders the app to static HTML at build
// time (Node SSR, no browser) and hydrates on the client. Improves crawl/index
// speed and gives non-JS crawlers real content.
export const createRoot = ViteReactSSG(
  <StrictMode>
    <App />
  </StrictMode>,
)
