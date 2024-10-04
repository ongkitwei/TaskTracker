import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// https://dribbble.com/shots/22543471-Todo-List
//https://dribbble.com/shots/20082500-Add-experience-modal-Untitled-UI