import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FlowCanvas from './Flowcanvas'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <FlowCanvas/>
  </StrictMode>,
)
