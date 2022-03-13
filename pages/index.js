import Head from "next/head";
// Components
import Background from "components/layout/Background";
import MainContainer from "components/layout/MainContainer";
import MainHeading from "components/sections/MainHeading";
import Invoices from "components/sections/Invoices";

export default function Home() {
    return (
        <>
            <Head>
                <title>Invoice App</title>
            </Head>
            <Background as="main">
                <MainContainer>
                    <MainHeading />
                    <Invoices />
                </MainContainer>
            </Background>
        </>
    );
}
