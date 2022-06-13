import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;;
    }
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
    p {
        color: #4f4f4f;
        margin-top: 1rem;
        font-size: 1rem;
        line-height: 1.3rem;
        font-weight: 400;
        letter-spacing: 2px;
    }
    .tester{
        position: relative;
    }

`;

export default GlobalStyle;
