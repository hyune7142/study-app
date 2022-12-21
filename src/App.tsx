import React from 'react';
// import { createGlobalStyle } from 'styled-components'
import { Global, css } from '@emotion/react';
import RouteContainer from './router';

// const GlobalStyled = createGlobalStyle`
//   * {box-sizing: border-box;}

//   html, body, #root {
//     width: 100%;
//     height: 100%;
//     margin: 0;
//     padding: 0;
//     overflow: hidden;
//   }

//   a {
//     text-decoration: none;
//     color: black
//   }

//   a:hover {
//     color: blue;
//     font-weight: 600;
//   }

//   #headerContents {
//     padding-top: 10px;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     align-items: center;
//   }

//   #contents {
//     padding: 20px;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     align-items: center;
//   }
// `

const lobalStyle = css`
  * {box-sizing: border-box;}

  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: black
  }

  a:hover {
    color: blue;
    font-weight: 600;
  }

  #headerContents {
    padding-top: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  #contents {
    padding: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`

const App = () => {
  return (
    <React.Fragment>
      {/* <GlobalStyled /> */}
      {/* <Global css={GlobalStyle}> */}
        <RouteContainer />
      {/* </Global> */}
    </React.Fragment>
  );
};

export default App;