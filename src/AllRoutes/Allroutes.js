import React from 'react'
import { Route, Routes } from 'react-router-dom'
import IncomeTax from '../Pages/IncomeTax'
import HRA from '../Pages/HRA'

function Allroutes() {
  return (
    <Routes>
        <Route path='/' element={<IncomeTax />}/>
        <Route path='/hra' element={<HRA />}/>
    </Routes>
  )
}

export default Allroutes