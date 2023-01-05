import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        font-size: 62.5%;

        /* Colors */
        --white: #ffffff;
        --black: #000000;
        --light-grey: #CBCBCB;
        --grey: #808080;
        --dark-grey: #676767;
        --light-salmon: #F9F2EC;
        --salmon: #DBA39A;
        --dark-salmon: #AF827B;
        --light-yellow: #FEFCF3;
        --yellow: #FFD369;
        --midnight: #121721;
        --very-dark-blue: #12202D;
        --baby-blue: #A3D8FB;
        --light-purple: #FFB2FF;
        --purple: #EA80FC;
        --dark-purple: #B64FC8;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        /* border: 1px solid red; */
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-size: 1.6rem;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        font-family: 'DM Sans', sans-serif;
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text.default};
        scroll-behavior:smooth;
    }

    h1, h2, h3, h4, p {
        margin: 0;
    }

    h1 {
        color: ${({ theme }) => theme.h1};
        font-size: 4.2rem;
        font-weight: 800;
    }

    h2 {
        font-size: 4.2rem;
    }

    /** Since I will only have one kind of button I don't see the need in creating a custom component
        but will rather create the styles globally on the HTML tag
     */
    button {
        padding: 1rem 1.6rem;
        border-radius: 2.5rem;
        border: 0.1rem solid ${({ theme }) => theme.btn};
        background-color: transparent;
        font-family: inherit;
        font-weight: 800;
        color: ${({ theme }) => theme.text.btn};;
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.35s;

        &:hover {
            background-color: ${({ theme }) => theme.btn};;
            color: var(--white);
        }
    }

    a {
    color: inherit;
    text-decoration: none;
  }

`;

export default GlobalStyles;
