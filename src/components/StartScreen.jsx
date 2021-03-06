import React from "react";
import { useNavigate } from "react-router-dom";
// Images & Styling
import { ReactComponent as SplashScreenImage } from "../assets/img/SplashScreen.svg";
import styled from "styled-components";

export default function StartScreen() {
  const navigation = useNavigate();
  const handleShowLogin = () => {
    navigation("/applogin");
  };

  return (
    <StyledSplashScreen
      onClick={handleShowLogin}
      onTouchStart={handleShowLogin}
    >
      <StyledContainer>
        <SplashScreenImage />
        <div>
          <h1>Camper App</h1>
          <p>Hotel war gestern.</p>
        </div>
      </StyledContainer>
    </StyledSplashScreen>
  );
}

const StyledSplashScreen = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  h1,
    p {
        text-align: center;
    }
    h1 {
        font-size: 2.75rem;
        font-weight: 900;
        line-height: 3rem;
        letter-spacing: 0.5rem;
        color: black;
    }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;
