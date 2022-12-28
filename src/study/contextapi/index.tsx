import React, { useState, createContext, PropsWithChildren, useCallback } from 'react';

export interface ThemeContextType {
    theme: string
    onChange?: (val: string) => void
}

export const ThemeContext = createContext<Pick<ThemeContextType, 'theme'> | null>(null);
export const ThemeDispatchContext = createContext<Pick<ThemeContextType, 'onChange'> | null>(null);


const ThemeContextAPI = (props: PropsWithChildren) => {
    const { children } = props;
    const [theme, setTheme] = useState('light');

    const onChange = useCallback((value: string) => {
        setTheme(value);
    }, [])

    return (
        <ThemeContext.Provider value={{theme: theme}}>
            <ThemeDispatchContext.Provider value={{onChange: onChange}}>
                {children}
            </ThemeDispatchContext.Provider>
        </ThemeContext.Provider>
    );
};

export default ThemeContextAPI;