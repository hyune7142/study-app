import React from 'react';
// import { createGlobalStyle } from 'styled-components'
import { Global, css } from '@emotion/react';
import RouteContainer from './router';
import ThemeContextAPI from './study/contextapi';
import store from './modules/store';
import { Provider } from 'react-redux';

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

const GlobalStyle = css`
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
      <Provider store={store}>
      {/* <GlobalStyled /> */}
        <Global styles={GlobalStyle} />
          <ThemeContextAPI>
            <RouteContainer />
          </ThemeContextAPI>
      {/* </Global> */}
      </Provider>
  );
};

export default App;