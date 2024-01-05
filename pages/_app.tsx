import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    // crossOrigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300;400;500;700&family=Noto+Sans:wght@300;400;500;700&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
