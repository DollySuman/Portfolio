import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import { Navigate } from 'react-router-dom'

const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>
    },
    {
      path: '/home',
      element: <Home/>
    },

    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/git',
      element: <Navigate to ='https://github.com/DollySuman' replace/>
    }
  ])
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
