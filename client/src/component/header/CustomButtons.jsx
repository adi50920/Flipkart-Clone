import { Button, Typography, styled, Box } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import LoginDialog from "../login/LoginDailog";

const Wrapper = styled(Box)`
display:flex;
margin: 0 3% 0 auto;
&> Button , &> p , > div{
    margin-right: 40px;
font-size:16px
align-items:center;}
`;
const WrapButton = styled(Button)`
  background-color: white;
  border-radius: 0;
  color: #2874f0;
  padding: 5px 40px;
  text-transform: none;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;

const WrapCart = styled(Box)`
  display: flex;
`;

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const hOpen = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      <WrapButton variant="contained" onClick={() => hOpen()}>
        Login
      </WrapButton>
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <WrapCart>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </WrapCart>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;