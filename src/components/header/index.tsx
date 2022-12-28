import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router'
import { ThemeDispatchContext, ThemeContext, ThemeContextType } from '../../study/contextapi';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const themeContext = useContext(ThemeContext) as Pick<ThemeContextType, "theme">
    const themeDispatch = useContext(ThemeDispatchContext) as Pick<ThemeContextType, "onChange">
    const { theme } = themeContext;

    return (
        <header>
            <div id="headerContents">
                {location.pathname !== '/' && (
                    <button onClick={() => navigate('/')}>Main</button>
                    )}
                <span>{`현재테마 ${theme}`}</span> <br />
                <button onClick={() => themeDispatch.onChange?.(theme === 'dark' ? 'light' : 'dark')}>테마변경</button>
            </div>
        </header>
    );
};

export default Header;