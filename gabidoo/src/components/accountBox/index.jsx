import React, { useState } from "react";
import styled from "styled-components";
import "./accountIndex.css";
import { LoginForm } from "./loginForm";
import { SignupForm } from "./signupForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import logo from "../../assets/gabilogo.png";

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  background: rgb(254, 204, 44);

  @media only screen and (max-width: 480px) {
    width: 300px;
    height: 600px;
    top: -20%;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
  background: rgb(254, 204, 44);
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: white;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 25px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
  color: black;
`;

const SmallText = styled.h5`
  color: black;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
  @media only screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
  background: rgb(254, 204, 44);
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.5,
  stiffness: 30,
};

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandedAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandedAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 1000);
  };

  const switchToSignin = () => {
    playExpandedAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 1000);
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer className="boxcontainer">
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "signin" && (
            <HeaderContainer>
              <img
                style={{
                  zIndex: "10000",
                  width: "175px",
                  padding: "5px",
                }}
                src={logo}
                alt="logo"
              />
              <HeaderText> Dobrodosli </HeaderText>
              <SmallText> Molimo vas, prijavite se </SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <img
                style={{ zIndex: "10000", width: "175px", padding: "5px" }}
                src={logo}
                alt="logo"
              />
              <HeaderText> Dobrodosli </HeaderText>
              <SmallText> Molimo vas, registrujte se </SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
