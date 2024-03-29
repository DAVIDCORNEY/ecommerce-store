import React from "react";

import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/SignUp/SignUp.component";

import { SignInSignUpContainer } from "./SignInSignUpPage.styles.jsx";

const SignInSignUpPage = () => (
  <SignInSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInSignUpContainer>
);

export default SignInSignUpPage;
