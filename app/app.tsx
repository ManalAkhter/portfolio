import React from 'react';
import Layout from './components/layout';
import { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;