import { InputBase,Box,styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import React from 'react'




const SearchContainer = styled(Box)`
Background: #fff;
width:30%;
border-radius:2px;
margin-left:10px;
display:flex;
`;
 const InputSearchBase = styled(InputBase)`
 padding-left:20px;
width:100%;
font-size:unset;
 `;

 const StyleSearchIcon = styled(Box)`
 color:blue;
 margin:5px;
 display:flex;

 `



const Search =()=>{
  return(<SearchContainer>

    <InputSearchBase
    placeholder="Search for products, brands and more"
    />
    <StyleSearchIcon>
      <SearchIcon/>
    </StyleSearchIcon>
  </SearchContainer>
  )
}

export default Search;