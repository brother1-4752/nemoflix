import { createGlobalStyle } from "styled-components";
import NetflixFont from "../fonts/NetflixFont.ttf";

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: "NetflixFont";
        src: local('NetflixFont'), local('NetflixFont');
        font-style: normal;
        src: url(${NetflixFont}) format('truetype');
    }

    body {
        font-family: NetflixFont, sans-serif, Arial;
        position: relative;

        a{
            text-decoration: none;
            color: inherit;
        }
    }
    
    @keyframes initialSlideIn {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

    @keyframes loadMainPoster {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes scaleUpCardItem {
      0% {
        transform: translateY(0) scale(1);   
      }
      100% {
        transform: translateY(-5px) scale(1.05);
      }
    }
`;

export default GlobalStyle;
