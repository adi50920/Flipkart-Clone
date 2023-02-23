
import{Box} from '@mui/material'
import NavBar from'./NavBar'
import Banner from'./Banner'
import{styled} from '@mui/material'
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
    </>
)

}

export default Home;