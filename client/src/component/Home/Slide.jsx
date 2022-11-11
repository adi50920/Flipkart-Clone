import React from 'react'
import { products } from '../../constants/data';
import {Box, styled, Typography} from'@mui/material'
import { Link } from 'react-router-dom';

const SlideFlex = styled(Box)`
display:flex;
justify-content:space-evenly;
overflow:hidden;
margin:40px 0px;
`
const Image=styled('img')({
    width:'100%',
    height:150,
    })

const Title = styled(Typography)`
        text-align:center;
        padding-top:10px
    `

function Slide() {
  return (
    <>        
    <SlideFlex>
    {
        products.map(data => (
            <Box>
               {/* <Link to={}> */}
                <Image src={data.url} alt="img"/>
                <Title>{data.title.shortTitle}</Title>
               {/* </Link> */}
            </Box>
        ))
    }
    </SlideFlex>
</>
  )
}

export default Slide