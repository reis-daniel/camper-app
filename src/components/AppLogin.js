import React from "react";
import { ReactComponent as LoginImg } from "../assets/img/HumanCampingScreen.svg";
// Styled Components
import styled from "styled-components";
// React Router
import { useNavigate } from "react-router-dom";

export default function AppLogin() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <StyledLoginScreen>
      <LoginImg />
      <StyledTextContainer>
        <h1>Login</h1>
        <p>
          Lege ein Konto an um die App voll nutzen zu können. Oder nüchtern.
          Einfach auf Einloggen klicken. Ist ganz einfach.
        </p>
      </StyledTextContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInputContainer>
          <StyledInput
            type="text"
            name="username"
            placeholder="Dein Benutzername"
          />
          <StyledInput
            type="password"
            name="password"
            id="password"
            placeholder="Dein Passwort"
          />
          <StyledForgotPw
            type="button"
            value="Passwort vergessen?"
            name="forgotpassword"
            onClick={(e) => {
              navigate("/resetpassword");
            }}
          />
        </StyledInputContainer>
        <StyledBtnContainer>
          <LoginButton type="submit" value="Jetzt anmelden" name="login" />
          <RegisterButton
            type="button"
            value="Kein Konto? Jetzt registrieren!"
            name="register"
            onClick={(e) => {
              navigate("/register");
            }}
          />
        </StyledBtnContainer>
      </StyledForm>
    </StyledLoginScreen>
  );
}

const StyledLoginScreen = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0 4rem;
  svg {
    margin-top: 2rem;
  }
`;
const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 3.25rem;
  border: 1px solid #e9e9e9;
  border-radius: 10rem;
  padding: 0.75rem 1rem;
  :focus {
    outline: 1px solid #ff7144;
  }
  ::placeholder {
    color: #dadada;
  }
`;

const StyledForgotPw = styled.input`
  color: #dadada;
  font-size: 0.75rem;
  text-align: right;
  background: none;
  border: none;
  :focus {
    color: #c5c5c5;
    font-weight: 500;
  }
`;

const StyledBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  margin-top: 3rem;
`;

const LoginButton = styled.input`
  background: #ff7144;
  width: 100%;
  height: 3.25rem;
  color: #dadada;
  border: 1px solid #e9e9e9;
  border-radius: 10rem;
  padding: 0.75rem 1rem;
  text-align: center;
  font-size: 1.25rem;
  color: white;
  font-weight: 500;
  :focus {
    background-color: #ff9635;
  }
`;

const RegisterButton = styled.input`
  color: #ff7144;
  background: none;
  border: none;
  font-size: 0.75rem;
  font-weight: 700;
  :focus {
    color: #ff9635;
  }
`;
