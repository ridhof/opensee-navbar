import Head from 'next/head';
import Nav from '../components/nav';

export default function Home() {
    return (
        <>
            <Head>
                <title>Opensee</title>
            </Head>
            <main>
                <Nav />
            </main>
        </>
    );
}