
import { Button, Typography ,styled ,Box} from "@mui/material";
import {ShoppingCart} from '@mui/icons-material';


const Wrapper = styled(Box)`
display:flex;
margin: 0 3% 0 auto;
&> Button , &> p , > div{
    margin-right: 40px;
font-size:16px
align-items:center;}
`
const WrapButton = styled(Button)`
Background-color: white;
border-radius:0;
color: #2874f0;
padding: 5px 40px;
text-transform :none;
box-shadow:none;
font-weight:600;
height: 32px;
`

const WrapCart = styled(Box)`
display:flex;
`


const CustomButtons =()=>{
    return(
         <Wrapper >
<WrapButton variant="contained">
    Login
    </WrapButton>
    <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
    <Typography style={{marginTop:3}}>More</Typography>
    <WrapCart>
        <ShoppingCart/>
        <Typography>Cart</Typography>
    </WrapCart>
         </Wrapper>
    )
}

export default CustomButtons;
