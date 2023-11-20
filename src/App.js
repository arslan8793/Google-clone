
import Home from './Components/Home'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Searchpage from './Components/Searchpage'
import Images from './Components/Images'
import Videos from './Components/Videos'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={ <Home/>} path="/"/>

        <Route element={<Searchpage/>}  path="/searchpage"/>
         
        <Route element={<Images/>}  path="/images"/>

        <Route element={<Videos/>} path="/videos"/>
      </Routes>
     
      </BrowserRouter>
      
    </div>
  )
}

export default App
