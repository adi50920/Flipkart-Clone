
//component
import React from 'react'

import{Box} from '@mui/material'
import NavBar from'./NavBar'
import Banner from'./Banner'
import{styled} from '@mui/material'

const Container = styled(Box)`
padding:10px 10px;
background:#F2F2F2;
`
const Home = () => {
    return(<>

    <NavBar/>
    <Container>
    <Banner/>

    </Container>
    </>
)

}

export default Home;