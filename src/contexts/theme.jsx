import { createContext, useState } from "react";
import { darkTheme, lightTheme } from "../styles/colors";
/**
 * This context is used to handle the theme (Light or Dark) throughout the application
 * 
 * @returns {Boolean} isDark: If the current theme is dark or not
 * @returns {JSON} theme: The current theme array
 * @returns {Function} toggleTheme: Function to toggle between themes 
 */
const themes = {
    dark : darkTheme,
    light: lightTheme
}

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);
const theme = isDark ? themes.dark : themes.light
const toggleTheme = () => { 
    setIsDark(!isDark)
}
    return (
        <ThemeContext.Provider value={[{theme, isDark}, toggleTheme]}>{children}</ThemeContext.Provider>
    )
}