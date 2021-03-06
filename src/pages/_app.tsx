import React, { useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import styled, { ThemeProvider } from 'styled-components'
import { withApollo } from 'next-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import * as Sentry from '@sentry/react';
import "bootstrap/dist/css/bootstrap.min.css"
import theme from '../components/Theme'
import { ICart } from '../models/ICart'
import MyContext from '../components/MyContext'
import { IProduct } from '../models/IProduct'
import { cloneDeep } from 'lodash';
import 'bootstrap/dist/css/bootstrap.css';
Sentry.init({ dsn: "https://376afd81280f43cca4ae181b0958e3fa@o431570.ingest.sentry.io/5383603" });
function MyApp({ Component, pageProps }: AppProps) {
  const [itemsCart, setItemsCart] = useState<IProduct[]>([]);
  const addItemCart = (newItem: IProduct) => {
    const index = itemsCart.findIndex(i => i.id === newItem.id)
    if (index !== -1) {
      itemsCart[index].itemInCart += newItem.itemInCart;
      setItemsCart([...itemsCart])
    } else {
      newItem.itemInCart = 1;
      setItemsCart([...itemsCart, { ...newItem }])
    }
  }
  React.useEffect(() => {
    if (itemsCart) {
      window.localStorage.setItem('cart', JSON.stringify(itemsCart));
    }
  }, [itemsCart])
  React.useEffect(() => {
    if (process.browser) {
      const temp = window.localStorage.getItem('cart');
      setItemsCart(JSON.parse(temp))
    }
  }, [])
  const removeItemCart = (itemId: string) => {
    const index = itemsCart.findIndex(i => i.id === itemId)
    if (index !== -1) {
      const newItems = cloneDeep(itemsCart);
      newItems.splice(index, 1)
      setItemsCart([...newItems])
    }
  }
  const updateItemCart = (itemId: string) => {
    const index = itemsCart.findIndex(i => i.id === itemId)
    if (index !== -1) {
      const newItems = cloneDeep(itemsCart);
      const newItem = cloneDeep(newItems[index]);
      newItems.splice(index, 1)
      newItem.itemInCart = 1;
      setItemsCart([...newItems, { ...newItem }])
    }
  }
  const checkoutHandler = () => {
    setItemsCart([]);
    window.localStorage.removeItem('cart');
  }
  return (<>
    <MyContext.Provider
      value={{
        itemsCart,
        addItemCart,
        removeItemCart,
        updateItemCart,
        checkoutHandler
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
    </MyContext.Provider>
  </>)
}


export default MyApp