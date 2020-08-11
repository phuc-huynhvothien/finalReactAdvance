import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import withApollo from '../utils/withApollo'
import { useQuery } from '@apollo/react-hooks'
import { GET_PRODUCTS } from '../graphql/product/product.query'
import { tagFull, tag, fakeProduct } from '../common/fakeProduct'
import _ from 'lodash'
import { Banner } from '../components/Banner'
import { FilterBar } from '../components/FilterBar'
import { SearchBox } from '../components/SearchBox'
import { ProductTrend } from '../components/Product'
import { BodyContent, Row, Container, RightSide, LeftSide, Div, UL, LI, P, ButtonDefault, TagA, H1, Input, H2, ProductList } from '../common/StyleComponent'
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
  const [sortOrder, setSortOrder] = useState(1);
  const [myloading, setMyloading] = useState(false);


  const { data, loading, error, fetchMore } = useQuery(GET_PRODUCTS, {
    variables: {
      input: {
        keyword: 'Samsung',
        page: 1,
      },
    },
  })
  let responseData = data?.getAllProduct?.data
  let totalCount = data?.getAllProduct.metaData.totalCount.toString()
  let searchLoadding = false;
  if (error || !data) return <h1>Error</h1>
  if (loading) return (
    console.log("LOading")
  )
  if (sortOrder == 1) {
    responseData = _
      .chain(responseData)
      .sortBy('price')
      .reverse()
      .value();
  } else {
    responseData = _
      .chain(responseData)
      .sortBy('price')
      .value();
  }

  const products = responseData

  const fecthMoreHandle = (keyword, page = 1) => {
    fetchMore({
      variables: {
        input: {
          keyword: keyword,
          page: page,
        },
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        fetchMoreResult ? fetchMoreResult : []
        setMyloading(false)
        return (
          fetchMoreResult
        );
      }
    });
  }
  const sortHandle = (e) => {
    setSortOrder(parseInt(e.target.value));
  }
  // const categoryHandle = (keyword,e) => {
  //   console.log("DDDDDD");
  //   fecthMoreHandle(keyword);
  // }
  const searchProductHandle = (event) => {
    try {
      event.preventDefault()
      setMyloading(true)
      const formData = new FormData(event.target);
      const email = formData.get('searchItem')
      fecthMoreHandle(email);
    }
    catch (e) {
      //  HOC handle error message
    }
  }

  return (
    <>
      <Layout>
        <Banner imageUrl="/product/banner.png" currentUrl="Home / Shop Left Bar" title="Shop Welcome  ^__^" />
        <FilterBar orderAces={true} perPageItem={products?.length} totalItem={totalCount} setValue={sortHandle} />
        <BodyContent>
          <Container>
            <Row>
              <LeftSide>
                <Div >
                  <StyledSearchBox>
                    <Form onSubmit={searchProductHandle}>
                      {error && <P>{error.graphQLErrors[0].message}</P>}
                      <Input type="search" name="searchItem" placeholder="Search products ..." />
                      <ButtonDefault type="submit"><FiSearch fontSize={20} /></ButtonDefault>
                    </Form>
                  </StyledSearchBox>
                  <H2 style={{ paddingBottom: "20px" }}>Categories</H2>
                  <UL>
                    {tagFull.map((item, index) =>
                      (
                        <LI style={{ paddingBottom: "20px", listStyleType: "none" }} key={index}>
                          <ButtonTransparent active="" children={item.toString()} size="15" line="1.5" color="#7e7e7e" key={index} capitalize={true} ></ButtonTransparent>
                        </LI>
                      ))}
                  </UL>
                  <H2 style={{ paddingBottom: "20px" }}>Color</H2>
                  <UL style={{ listStyleType: "none", display: "inline-flex" }}>
                    <LI >
                      <ColorBox colorText="red" isCircle={true} ></ColorBox>
                    </LI>
                    <LI>
                      <ColorBox colorText="lime" isCircle={true}  ></ColorBox>
                    </LI>
                    <LI>
                      <ColorBox colorText="orange" isCircle={true} ></ColorBox>
                    </LI>
                    <LI>
                      <ColorBox colorText="gray" isCircle={true} reset={true} ></ColorBox>
                    </LI>
                  </UL>
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
                {myloading ? <Spinner animation="border" role="status" variant="success">
                  <span className="sr-only">Loading...</span>
                </Spinner> :
                  <ProductList>
                    {products && products.map((item, index) => (
                      <Product key={index} id={item.id} adminId={item.adminId}
                        price={item.price}
                        productId={item.productId} name={item.name}
                        discountPercent={item.discountPercent}
                        uid={item.uid} imgUrl={item.imgUrl}
                        isNew={item.isNew}
                        imgUrlMob={item.imgUrlMob}></Product>
                    ))}
                  </ProductList>
                }

              </RightSide>
            </Row>
          </Container>
        </BodyContent>
      </Layout>
    </>
  )
}

export default withApollo({ ssr: true })(Home)
