
import constant, { navData } from '../../constants/data'
import {Box, styled, Typography} from'@mui/material'


const NavBarFlex = styled(Box)`
display:flex;
margin:55px 320px 0 320px;
justify-content:space-between;
text-align:center;
`
const Container = styled(Box)`
padding:12px 8px;
`

const Text=styled(Typography)
`
text-align:center;
font-size:14px;
font-weight:550;
font-family:inherit;
`

const NavBar =() =>{
    return(
<NavBarFlex>
    { navData.map(Data=>(
<Container>
<img src={Data.url} alt="" style={{width:64}}/>
<Text>
    {Data.text}
    </Text>
</Container>

    ))


    }
     
</NavBarFlex>

    )
}

export default NavBar;