import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import withApollo from '../utils/withApollo'
import { useQuery } from '@apollo/react-hooks'
import { GET_PRODUCTS } from '../graphql/product/product.query'
import { tagFull, tag, fakeProduct } from '../common/fakeProduct'


import { Banner } from '../components/Banner'
import { FilterBar } from '../components/FilterBar'
import { SearchBox } from '../components/SearchBox'
import { ProductTrend } from '../components/Product'
import { BodyContent, Row, Container, RightSide, LeftSide, Div, H3, ButtonDefault, TagA, H1, H2, ProductList } from '../common/StyleComponent'
import { ButtonTransparent } from '../components/ui-kits/ButtonTransparent'
import { Product } from '../components/Product'
import { ColorBox } from '../components/ui-kits/ColorBox'
import { StyledSearchBox } from '../components/SearchBox/SearchBox.styled'
import { FiSearch } from "react-icons/fi";
import { Spinner, Form, Button } from 'react-bootstrap'
import { onError } from 'apollo-link-error';
export const HomeContainer = styled.div``

export const StyledHomeBody = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  grid-template-columns: repeat(auto-fill, 220px);
  grid-gap: 10px;
`

function Home() {
  const { data,loading, error,  fetchMore } = useQuery(GET_PRODUCTS, {
    variables: {
      input: {
        keyword: 'Samsung',
        page: 1,
      },
    },
  })
  if (error) return <h1>Error</h1>
  if (loading || !data) return <h1>Loading...</h1>

  const products = data?.getAllProduct?.data
  if (!products || !products.length) {
    return <p>Not found</p>
  }
  // const errorLink = onError(({ networkError, graphQLErrors }) => {
  //   if (graphQLErrors) {
  //     graphQLErrors.map(({ message, locations, path }) =>
  //       console.log(
  //         `[ThienPhuc final React Advantace error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
  //       ),
  //     );
  //   }
  //   if (networkError) console.log(`[Network error]: ${networkError}`);
  // });
  const errrorLink = onError(({ response, operation }) => {
    if (operation.operationName === "IgnoreErrorsQuery") {
      response.errors = null;
    }
  })
  const searchProductHandle = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target);
    const email = formData.get('searchItem')
    fetchMore({
      variables: {
        input: {
          keyword: email,
          page: 1,
        },
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        
        console.log(fetchMoreResult);
        return fetchMoreResult;
      }
    });
  }
  return (
    <>
      <Layout>
        <Banner imageUrl="/product/banner.png" currentUrl="Home / Shop Left Bar" title="Shop Welcome  ^__^" />
        <FilterBar orderAces={true} perPageItem="30" totalItem="60" />
        <BodyContent>
          <Container>
            <Row>
              <LeftSide>
                <Div >
                  <StyledSearchBox>
                  <Form onSubmit={searchProductHandle}>
                      {error && <p>{error.graphQLErrors[0].message}</p>}
                      <input type="search" name="searchItem" placeholder="Search products ..." />
                      <button type="submit"><FiSearch fontSize={20} /></button>
                    </Form>
                  </StyledSearchBox>
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
                <ProductList>
                  {products!= null  && products.map((item, index) => (
                    <Product key={index} id={item.id} adminId={item.adminId}
                      price={item.price}

                      productId={item.productId} name={item.name}
                      discountPercent={item.discountPercent}
                      uid={item.uid} imgUrl={item.imgUrl}
                      isNew={item.isNew}
                      imgUrlMob={item.imgUrlMob}></Product>
                  ))}
                </ProductList>
              </RightSide>
            </Row>
          </Container>
        </BodyContent>
      </Layout>
    </>
  )
}

export default withApollo({ ssr: true })(Home)
