import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ApolloProvider } from '@apollo/client';
import styled, { ThemeProvider } from 'styled-components'
import { withApollo } from 'next-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import * as Sentry from '@sentry/react';
import "bootstrap/dist/css/bootstrap.min.css"
import theme from '../components/Theme'
Sentry.init({dsn: "https://376afd81280f43cca4ae181b0958e3fa@o431570.ingest.sentry.io/5383603"});
function MyApp({ Component, pageProps }: AppProps) {
 

    const apolloClient = new ApolloClient({
    uri: 'https://min-shop.herokuapp.com/graphql',
    cache: new InMemoryCache(),
    })
    return (<><ThemeProvider theme={theme}>
        {/* <ApolloProvider client={apolloClient}> */}
            <Head>
                <title>STRANGS Template</title>
                <link rel="icon" href="/favicon.ico" />
                <title>Home</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
        {/* </ApolloProvider> */}
        </ThemeProvider>
    </>)
}


export default MyApp