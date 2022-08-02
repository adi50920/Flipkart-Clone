import {AppBar,Toolbar,Box,styled,Typography} from '@mui/material'
import { height } from '@mui/system'

//component

import Search from './Search'
import CustomButtons from './CustomButtons'

const StyleHeader = styled(AppBar)
`
    background: #2874f0;
    height: 55px;
    margin:0;
`
const Component = styled(Box)
`
margin-left: 20%;
line-height=0;
margin-right:0;


`
const SubHeading = styled(Typography)
`
font-size: 10px;
Font-style: Italic;

`

const PlusImage= styled('img')({
    width: 10,
    height: 10
});
const CustomButtonWrapper = styled(Box)`
margin: 0 0 0 3%;
`
const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


const Header= () => {
    return(
        <StyleHeader>
            <Toolbar style={{minHeight: 55}}>
                <Component>
                    <img src={logoURL} alt=""  style={{ width:75 }}/>
                    <Box style={{display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component='span' style={{ color: '#FFE500'}}>
                                Plus&nbsp;
                                </Box>
                                </SubHeading>
                                <PlusImage src={subURL} alt="" />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                <CustomButtons/>

                </CustomButtonWrapper>
            </Toolbar>
        </StyleHeader>
    )

}

export default Header;