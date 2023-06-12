import { createGlobalStyle } from "styled-components";
import NetflixFont from "../fonts/netflixFont.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "NetflixFont";
        src: local('NetflixFont'), local('NetflixFont');
        font-style: normal;
        src: url(${NetflixFont}) format('truetype');
    }

    body {
        font-family: NetflixFont, sans-serif, Arial;
    }
`;

export default GlobalStyle;
