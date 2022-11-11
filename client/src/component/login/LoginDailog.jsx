import { useState } from "react";

import {
  Box,
  Dialog,
  TextField,
  Button,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
  display: flex;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    no-repeat center 85%;
  height: 80%;
  width: 28%;
  padding: 40px 35px;
`;
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  felx: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;
const SigninWrapper =styled(Box)`
display: flex;
flex-direction: column;
padding: 5px 35px;
felx: 1;
& > div,
& > button,
& > p {
  margin-top: 20px;
}`

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 40px;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px; I
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const RegisterTextField = styled(TextField)`
  width: 340px;
  height:28px;
  margin:8px
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  font-weight: 600;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you are new here",
  },
};
const LoginDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { maxWidth: "unset" } }}
      >
        <Component>
          <Image>
            <Typography style={{ fontWeight: 600 }} variant="h5">
              {account.heading}
            </Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField variant="standard" label="Enter E-mail/Mobile No." />
              <TextField variant="standard" label="Enter Password" />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount
                onClick={() => {
                  toggleSignup();
                }}
              >
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <SigninWrapper>
              <RegisterTextField variant="standard" label="Enter First Name" />
              <RegisterTextField variant="standard" label="Enter Last Name" />
              <RegisterTextField variant="standard" label="Enter Username" />
              <RegisterTextField variant="standard" label="Enter E-mail" />
              <RegisterTextField variant="standard" label="Enter Password" />
              <RegisterTextField variant="standard" label="Enter Phone" />

              <LoginButton>Continue</LoginButton>
            </SigninWrapper>
          )}
        </Component>
      </Dialog>
    </div>
  );
};

export default LoginDialog;