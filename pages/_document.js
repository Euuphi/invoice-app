import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    static async getInitialProps(context) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = context.renderPage;

        try {
            context.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(context);

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta
                        name="description"
                        content="Web application for managing your invoices. Invoice App allows you to create, delete, edit, filter and view your invoices with a simple and easy to use UI."
                    />
                    <link rel="icon" href="/favicon-32x32.png" />
                    <meta property="og:title" content="Invoice App" />
                    <meta
                        property="og:description"
                        content="Application for managing your invoices"
                    />
                    <meta
                        property="og:url"
                        content="https://kaleidoscopic-piroshki-9af0f5.netlify.app/"
                    />
                    <meta
                        property="og:image"
                        content="https://i.ibb.co/1QGTbYg/Invoice-App.png"
                    />
                    <meta property="og:type" content="website" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
