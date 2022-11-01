//components
import React from 'react'
import Header from './component/header/Header'
import Home from './component/Home/Home'
import { Box } from '@mui/system'

const App = () => {
  return (
    <div>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>{' '}
    </div>
  )
}

export default App