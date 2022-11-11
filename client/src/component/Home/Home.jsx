
<<<<<<< HEAD
=======
//component
import React from 'react'

>>>>>>> feaa2d0c7ea81367206fd9f83d9d73feb85f3c76
import{Box} from '@mui/material'
import NavBar from'./NavBar'
import Banner from'./Banner'
import{styled} from '@mui/material'
import Slide from './Slide'
import Header from '../header/Header'

const Container = styled(Box)`
padding:10px 10px;
background:#F2F2F2;
`
const Home = () => {
    return(
    <>
      <Header/>
        <NavBar/>
        <Container>
            <Banner/>
        </Container>
        <Slide/>
    </>
)

}

export default Home;