import React from 'react';
import { pages } from '../router';
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <div id="contents">
            <h1>React Study App</h1>
            <ol>
                {pages.map((item, key) => (
                    <li key={item.path}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Main;