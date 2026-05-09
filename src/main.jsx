import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import { Toaster } from 'react-hot-toast'
import SplashCursor from './components/SplashCursor'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SplashCursor/>
    <RouterProvider router={router} />
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        duration: 4000,
        style: {
          background: "#0f172a",
          color: "#fff",
        },
      }}
    />
  </StrictMode>,
)
