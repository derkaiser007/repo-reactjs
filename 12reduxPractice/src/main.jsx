import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
