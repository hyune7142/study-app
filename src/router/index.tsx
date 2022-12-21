import React from 'react';
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
    }
]


const RouteContainer = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="*" element={<Main />} />
                {pages.map(item => (
                    <Route key={item.title} path={item.path} element={item.element} />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default RouteContainer;