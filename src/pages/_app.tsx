import React, { useState } from 'react'
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
import { ICart } from '../models/ICart'
Sentry.init({ dsn: "https://376afd81280f43cca4ae181b0958e3fa@o431570.ingest.sentry.io/5383603" });
function MyApp({ Component, pageProps }: AppProps) {
    const apolloClient = new ApolloClient({
        uri: 'https://min-shop.herokuapp.com/graphql',
        cache: new InMemoryCache(),
    })
    const [shoppingCart, setShoppingCart] = useState([])

    const updateShoppingCart = ({ id, quantity }) => {
        const index = shoppingCart.findIndex((item) => item.id === id)
        if (index === -1) {
            const updatedShoppingCart = [...shoppingCart, { id, quantity }]
            setShoppingCart(updatedShoppingCart)
        }
        return { id, quantity }
    }
    const setCartFromStorage = (cartFromSession) => {
        setShoppingCart(cartFromSession)
      }
    
    const CounterContext = React.createContext(
        {
            shoppingCart: [],
            updateShoppingCart: (shoppingCartData: ICart) => shoppingCartData,
            setCartFromStorage: (data) => data,
        }
    );
    return (<>
        <CounterContext.Provider
            value={{
                shoppingCart,
                updateShoppingCart,
                setCartFromStorage
            }}
        >
            <ThemeProvider theme={theme}>
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
        </CounterContext.Provider>
    </>)
}


export default MyApp