import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }

    body {
        @import url('https://fonts.googleapis.com/earlyaccess/notosanskr.css');
        font-family: "Noto Sans KR", sans-serif !important;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    div {
        display: block;
    }

    ul, li {
        list-style: none;
    }
    
    button {
        apperance: auto;
        text-rendering: auto;
        color: rgb(162, 162, 162);
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline block;
        text-align: center;
        align-items: flex start;
        cursor: default;
        background-color: rgb(254, 254, 254);
        box-sizing: border-box;
        margin: 0em;
        padding: 1px 6px;
        border-width: 2px;
        border-style: outset;
        border-color: rgb(220, 220, 223);
        border-image: initial;
    }
`;
export default GlobalStyle;