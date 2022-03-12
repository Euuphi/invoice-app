import Head from "next/head";
// Components
import Background from "components/layout/Background";
import MainHeading from "components/MainHeading";

export default function Home() {
    return (
        <>
            <Head>
                <title>Invoice App</title>
            </Head>
            <Background>
                <MainHeading />
            </Background>
        </>
    );
}
