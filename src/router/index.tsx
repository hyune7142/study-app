import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Study Sample Pages
import Header from '../components/header';
import Main from '../study/Main';
import Counter from '../study/counter';
import ConditionalRender from '../study/conditionalRender';
import LifeCycle from '../study/lifeCycle';
import JsxReturn from '../study/jsxArray';
import UseRef from '../study/useRef';
import StateProps from '../study/stateProps';
import ControlUncontrol from '../study/controlUncontrol';
import AxiosComp from '../study/axios';
import StyledComp from '../study/styledComponent';
import UseMemoCallback from '../study/useMemo';
import ReduxCnt1 from '../study/reduxCounter1';
import ReduxCnt2 from '../study/reduxCounter2';
import styled, { css } from 'styled-components';
import { ThemeContextType, ThemeContext } from '../study/contextapi';

// 192.168.0.131:8080

export const pages = [
    {
        title: '카운터',
        path: '/couter',
        element: <Counter />
    },
    {
        title: '조건부렌더링',
        path: '/conditional',
        element: <ConditionalRender />
    },
    {
        title: '라이프사이클',
        path: '/lifecycle',
        element: <LifeCycle />
    },
    {
        title: 'JSX Return 방법',
        path: '/jsxreturn',
        element: <JsxReturn />
    },
    {
        title: 'UseRef',
        path: '/useref',
        element: <UseRef />
    },
    {
        title: 'State & Props',
        path: '/stateprops',
        element: <StateProps />
    },
    {
        title: 'Control & Uncontrol',
        path: '/controlUncontrol',
        element: <ControlUncontrol />
    },
    {
        title: 'Axios Test',
        path: '/axios',
        element: <AxiosComp />
    },
    {
        title: 'Styled-Components',
        path: '/styled',
        element: <StyledComp />
    },
    {
        title: 'useMemo & useCallback',
        path: '/useMemoCallback',
        element: <UseMemoCallback/>
    },
    {
        title: 'Redux Counter 1',
        path: '/reduxCnt1',
        element: <ReduxCnt1/>
    },
    {
        title: 'Redux Counter 2',
        path: '/reduxCnt2',
        element: <ReduxCnt2/>
    },
]


const ThemeWrap = styled.div<{ theme: string }>`
    ${({theme}) => {
        if(theme === 'dark') {
            return css`
                background-color: black;
                color: #ffffff;
                a {
                    color: #ffffff;
                }
            `
        } else {
            return css`
                a {
                    color: black;
                }
            `
        }
    }}
`


const RouteContainer = () => {
    const themeContext = useContext(ThemeContext) as Pick<ThemeContextType, "theme">
    const { theme } = themeContext;
    return (
        <BrowserRouter>
            <Header />
            <ThemeWrap id='study-wrap' theme={theme}>
                <Routes>
                    <Route path="*" element={<Main />} />
                    {pages.map(item => (
                        <Route key={item.title} path={item.path} element={item.element} />
                    ))}
                </Routes>
            </ThemeWrap>
        </BrowserRouter>
    );
};

export default RouteContainer;