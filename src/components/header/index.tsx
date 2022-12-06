import React from 'react';
import { useNavigate } from 'react-router'

const Header = () => {
    const navigate = useNavigate();
    return (
        <header>
            <div id="headerContents">
                <button onClick={() => navigate('/')}>Main</button>
            </div>
        </header>
    );
};

export default Header;