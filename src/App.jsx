import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Authentication from './routes/authentication/Authentication'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>,
    errorElement: <div>404</div>,
  },
  {
    path: '/authentication',
    element: <Authentication />,
  },
  {
    path: '/about',
    element: <div>About</div>,
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
