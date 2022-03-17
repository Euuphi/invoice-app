// Styled Component
import { createGlobalStyle } from "styled-components";
// Redux
import { Provider as ReduxProvider } from "react-redux";
import store from "stores/store";
// Themes
import DarkThemeProvider from "themes/providers/DarkThemeProvider";
// Components
import Nav from "components/nav/Nav";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
        overflow-y: scroll;
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
                <Nav />
                <Component {...pageProps} />
            </DarkThemeProvider>
        </ReduxProvider>
    );
}

export default MyApp;
