import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './page/Home.jsx'
import React from 'react'


function App() {
  const shanto = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>}/>
      </Route>
    )
  )



  return (

    <>

    <RouterProvider router={shanto}/>
      
    </> )}

export default App ;