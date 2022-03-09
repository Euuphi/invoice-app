// Styled Component
import { createGlobalStyle } from "styled-components";
// Redux
import { Provider as ReduxProvider } from "react-redux";
import store from "stores/store";
// Themes
import DarkThemeProvider from "themes/DarkThemeProvider";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Spartan", sans-serif;
    }

`;

function MyApp({ Component, pageProps }) {
    return (
        <ReduxProvider store={store}>
            <DarkThemeProvider>
                <GlobalStyle />
                <Component {...pageProps} />
            </DarkThemeProvider>
        </ReduxProvider>
    );
}

export default MyApp;
