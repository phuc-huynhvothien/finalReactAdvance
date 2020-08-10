import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import withApollo from '../utils/withApollo'
import { useQuery } from '@apollo/react-hooks'
import { GET_PRODUCTS } from '../graphql/product/product.query'
import { tagFull,tag,fakeProduct} from '../common/fakeProduct'


import { Banner } from '../components/Banner'
import { FilterBar } from '../components/FilterBar'
import { SearchBox } from '../components/SearchBox'
import { ProductTrend } from '../components/Product'
import { BodyContent, Row, Container, RightSide, LeftSide,Div,H3,ButtonDefault,TagA,H1,H2 } from '../common/StyleComponent'
import { ButtonTransparent } from '../components/ui-kits/ButtonTransparent'
import { Product } from '../components/Product'
import { ColorBox } from '../components/ui-kits/ColorBox' 
export const HomeContainer = styled.div``

export const StyledHomeBody = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  grid-template-columns: repeat(auto-fill, 220px);
  grid-gap: 10px;
`

function Home() {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      input: {
        page: 1,
        keyword: 'Samsung',
      },
    },
  })
  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading...</h1>

  const products = data?.getAllProduct?.data
  if (!products || !products.length) {
    return <p>Not found</p>
  }

  return (
    <>
    <Layout>
      <Banner imageUrl="/product/banner.png" currentUrl="Home / Shop Left Bar" title="Shop Welcome  ^__^" />
      <FilterBar orderAces={true} perPageItem="20" totalItem="60" />
      <BodyContent>
        <Container>
          <Row>
            <LeftSide>
              <Div >
                <SearchBox></SearchBox>
                <H2 style={{ paddingBottom: "20px" }}>Categories</H2>
                <ul>
                  {tagFull.map((item, index) =>
                    (
                      <li style={{ paddingBottom: "20px", listStyleType: "none" }} key={index}>
                        <ButtonTransparent active="" children={item.toString()} size="15" line="1.5" color="#7e7e7e" key={index} capitalize={true} ></ButtonTransparent>
                      </li>
                    ))}
                </ul>

                <H2 style={{ paddingBottom: "20px" }}>Color</H2>
                <Button >success</Button>{' '}
                <ul style={{ listStyleType: "none", display: "inline-flex" }}>
                  <li >
                    <ColorBox colorText="red" isCircle={true} ></ColorBox>
                  </li>
                  <li>
                    <ColorBox colorText="yellow" isCircle={true} size="30" ></ColorBox>
                  </li>
                  <li>
                    <ColorBox colorText="gray" isCircle={false} size="35" ></ColorBox>
                  </li>
                  <li>
                    <ColorBox colorText="gray" isCircle={true} reset={true} ></ColorBox>
                  </li>
                </ul>
                <ProductTrend></ProductTrend>
                <Div>
                  {tag.map((item, index) =>
                    (
                      <ButtonTransparent active="" children={item.toString() + " /"} size="15" line="1.5" color="#7e7e7e" key={index} ></ButtonTransparent>
                    ))}
                </Div>
              </Div>
            </LeftSide>
            <RightSide>
              {fakeProduct.map((item, index) => (
                <Product key={index} id={item.id} adminId={item.adminId}
                  price={item.price} priceDiscount={item.priceDiscount}
                  productId={item.productId} name={item.name}
                  discountPercent={item.discountPercent}
                  uid={item.uid} urlImage={item.urlImage}
                  isNew={item.isNew}
                  urlImageHover={item.urlImageHover}></Product>
              ))}
            </RightSide>
          </Row>
        </Container>
      </BodyContent>
      </Layout>
    </>
  )
}

export default withApollo({ ssr: true })(Home)
