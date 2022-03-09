import Head from "next/head";
// Components
import Background from "components/layout/Background";
import Nav from "components/nav/Nav";
import Header from "components/Header";

export default function Home() {
    return (
        <>
            <Head>
                <title>Invoice App</title>
            </Head>
            <Nav />
            <Background>
                <Header />
            </Background>
        </>
    );
}
