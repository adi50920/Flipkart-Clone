
import constant, { navData } from '../../constants/data'
import {Box, styled, Typography} from'@mui/material'


const NavBarFlex = styled(Box)`
display:flex;
margin:55px 320px 0 320px;
justify-content:space-between;
text-align:center;
padding:12px 8px;
margin:0px;
display:flex;
flex-direction:comun;
justify-content:space-between;
`
const Container = styled(Box)`
`

const Text=styled(Typography)
`
text-align:center;

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