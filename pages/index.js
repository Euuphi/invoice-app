import Head from "next/head";
import favicon from "public/favicon-32x32.png";
// Components
import H1 from "components/headings/H1";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Invoice App</title>
                <link rel="icon" href={favicon} />
            </Head>
            <H1>Invoice App</H1>
        </div>
    );
}
