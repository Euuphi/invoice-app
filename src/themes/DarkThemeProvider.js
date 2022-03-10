import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
// Themes
import { lightTheme } from "themes/lightTheme";
import { darkTheme } from "themes/darkTheme";

const DarkThemeProvider = ({ children }) => {
    const darkThemeEnabled = useSelector(
        (state) => state.preferences.darkThemeEnabled
    );
    return (
        <ThemeProvider theme={darkThemeEnabled ? darkTheme : lightTheme}>
            {children}
        </ThemeProvider>
    );
};

export default DarkThemeProvider;
