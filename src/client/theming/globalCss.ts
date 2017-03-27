import { injectGlobal } from 'styled-components';

// tslint:disable
injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    overflow: scroll;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    line-height: 1.5;
    color: #0a0a0a;
    background: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    line-height: inherit;
    cursor: pointer;
  }

  .headline {
    font-family: 'Megrim', cursive;
  }

  .fade {
    animation: fadeInUp 2.8s;
  }

  .down-arrow {
    animation: bounce 4s 2s infinite;
    cursor: pointer !important;
  }

  .down-arrow:focus {
    outline: thin dotted white;
    padding: 4px;
  }

  @keyframes bounce {
    0%,20%,50%,80%,100% {
      transform: translateY(0);
    }

    40% {
      transform: translateY(-10px);
    }

    60% {
      transform: translateY(-5px);
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0.0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1.0;
      transform: translateY(0px);
    }
  }
`;
