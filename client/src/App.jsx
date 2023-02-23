
import React from 'react'
// import Header from './component/header/Header'
import Home from './component/Home/Home'
import { Box } from '@mui/system'
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import MusicHome from './component/music app/MusicHome'
import DataProvider from './context/DataProvider'

const App = () => {
  return (
    <DataProvider>
      <Box style={{paddingTop:"54px" }}>

      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/music' element={<MusicHome/>}/>
        </Routes>
      </BrowserRouter>
      </Box>
   
    </DataProvider>
  )
}

export default App