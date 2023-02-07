import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import router from './route/route'
import { RouterProvider } from 'react-router-dom';

function App() {


  return (
    <RouterProvider router={router}/>
  )
}

export default App
