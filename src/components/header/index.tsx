import React from 'react';
import { useNavigate, useLocation } from 'react-router'

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <header>
            <div id="headerContents">
                {location.pathname !== '/' && (
                    <button onClick={() => navigate('/')}>Main</button>
                )}
            </div>
        </header>
    );
};

export default Header;