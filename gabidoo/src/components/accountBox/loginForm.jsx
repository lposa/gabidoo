import React, { useContext } from "react";
import {
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
  MutedLink,
  BoldLink,
} from "./common";
import { Marginer } from "../marginer/index";
import { AccountContext } from "./accountContext";
import { Link } from "react-router-dom";

export function LoginForm() {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Marginer direction="vertical" margin={10} />
      </FormContainer>
      <MutedLink href="#"> Zaboravili ste sifru? </MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          Prijava
        </Link>
      </SubmitButton>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">
        Nemate nalog?
        <BoldLink href="#" onClick={switchToSignup}>
          Registracija
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
