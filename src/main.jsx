import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Packages from './components/packages/packages'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/packages",
    element: <Packages />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
