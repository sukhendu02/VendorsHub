import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'
import { LoaderProvider } from './Context/LoaderContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <LoaderProvider>
    <App />
    </LoaderProvider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
