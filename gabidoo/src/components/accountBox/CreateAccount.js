import React from "react";
import {
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
  MutedLink,
  BoldLink,
} from "./common";
import { Marginer } from "../marginer/index";

import { Link } from "react-router-dom";

function CreateAccount() {
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Repeat Password" />

        <Marginer direction="vertical" margin={10} />
      </FormContainer>
      <MutedLink href="#">Forgot your password</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">
        <Link style={{ textDecoration: "none", color: "white" }} to="/home">
          Signup
        </Link>
      </SubmitButton>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">
        Don't have an account? <BoldLink href="#">Signup</BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

export default CreateAccount;
