import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Packages from './components/packages/packages'
import Wedding_photos from './components/photos-gallery/wedding_photos.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/packages",
    element: <Packages />
  },
  {
    path: "/wedding-photos",
    element: <Wedding_photos />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
