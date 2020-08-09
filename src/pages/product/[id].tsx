import React, { useState, useEffect } from 'react'
import StyledProduct from './Product.styled'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import Layout from '../../components/Layout/Layout'
import Router, { useRouter } from 'next/router'
export interface IProductDetail {
    name: string
    description: string
}
export interface IPropductDetailProps {
  id: string
  images: string[]
  name: string
  description: string
  price: number
  shortDescription: string
}

import withApollo from '../../utils/withApollo'
import { useQuery } from '@apollo/react-hooks'
import { GET_PRODUCT } from '../../graphql/product/product.query'
import { log } from 'console'



const ProductDetail: React.FC<IPropductDetailProps> = (props) => {
    const router = useRouter()
    const createMarkup = (htmlString) => ({ __html: htmlString })

    const { loading, error, data } = useQuery(GET_PRODUCT, {
      variables: {
        input: {
          id: router.query.id,
        },
      },
    })
    const detailProduct : IPropductDetailProps = data?.getProductDetail;
    return (
        <>
            <Header />
            <Layout>
            <h1>{detailProduct? detailProduct.name: "NULL :) "}</h1>
            <div dangerouslySetInnerHTML={createMarkup(detailProduct?.description)} />
            </Layout>
            <Footer />
        </>
    )
}
export default withApollo({ ssr: true })(ProductDetail)


