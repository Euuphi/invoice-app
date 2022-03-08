import Head from "next/head";
// Components
import Main from "components/layout/Main";
import Nav from "components/nav/Nav";
import Header from "components/Header";

export default function Home() {
    return (
        <>
            <Head>
                <title>Invoice App</title>
            </Head>
            <Nav />
            <Main>
                <Header />
            </Main>
        </>
    );
}
