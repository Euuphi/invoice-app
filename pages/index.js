import Head from "next/head";
import favicon from "public/favicon-32x32.png";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Invoice App</title>
                <link rel="icon" href={favicon} />
            </Head>
            <h1>Invoice App</h1>
        </div>
    );
}
