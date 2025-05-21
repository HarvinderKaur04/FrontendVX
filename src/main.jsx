
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './landing_page/home/HomePage'
import { StrictMode } from 'react'


createRoot(document.getElementById('root')).render(
  <StrictMode>
 
    <HomePage/>
    </StrictMode>

  
)
