import {Theme, ThemeContext, ThemeContextProps} from "./ThemeContext";
import React, {useMemo, useState} from "react";

const ThemeProvider: React.FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
    const defaultProps = useMemo<ThemeContextProps>(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
