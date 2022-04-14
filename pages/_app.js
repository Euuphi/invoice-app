import "./global.css";
// Redux
import { Provider as ReduxProvider } from "react-redux";
import store from "stores/store";
// Themes
import DarkThemeProvider from "themes/providers/DarkThemeProvider";
// Components
import Background from "components/layout/Background";
import Nav from "components/nav/Nav";

function MyApp({ Component, pageProps }) {
    return (
        <ReduxProvider store={store}>
            <DarkThemeProvider>
                <Nav />
                <Background>
                    <Component {...pageProps} />
                </Background>
            </DarkThemeProvider>
        </ReduxProvider>
    );
}

export default MyApp;
