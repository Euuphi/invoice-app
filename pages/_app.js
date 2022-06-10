import "./global.css";
// Redux
import { Provider as ReduxProvider } from "react-redux";
import store from "stores/store";
// Themes
import DarkThemeProvider from "themes/providers/DarkThemeProvider";
// Components
import Nav from "components/nav/Nav";

function MyApp({ Component, pageProps }) {
    return (
        <ReduxProvider store={store}>
            <DarkThemeProvider>
                <Nav />
                <Component {...pageProps} />
            </DarkThemeProvider>
        </ReduxProvider>
    );
}

export default MyApp;
