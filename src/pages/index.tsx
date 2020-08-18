import React, { useState, useContext } from 'react'
import Head from 'next/head'
import MyContext from '../components/MyContext'
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
import { BodyContent, RightSide, LeftSide, Div, UL, LI, P, ButtonDefault, TagA, H1, Input, H2, SPAN } from '../common/StyleComponent'
import { ButtonTransparent } from '../components/ui-kits/ButtonTransparent'
import { ProductList } from '../components/ProductList'
import { PaginationToolbar } from '../components/PaginationToolbar'
import { ColorBox } from '../components/ui-kits/ColorBox'
import { StyledSearchBox } from '../components/SearchBox/SearchBox.styled'
import { FiSearch } from "react-icons/fi";
import { Spinner, Form, Button, Pagination } from 'react-bootstrap'
import { IProduct } from '../models/IProduct'
export const HomeContainer = styled.div``


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
} from 'reactstrap';

export const StyledHomeBody = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  grid-template-columns: repeat(auto-fill, 220px);
  grid-gap: 10px;
`

function Home() {
  const { itemsCart, addItemCart } = useContext(MyContext)

  const [sortOrder, setSortOrder] = useState(1);
  const [myloading, setMyloading] = useState(false);
  const [myError, setMyError] = useState(false);
  const [pageActive, setPageActive] = useState(1);
  const [keywork, setKeywork] = useState('Samsung');


  let searchLoadding = false;


  const { data, loading, error, fetchMore } = useQuery(GET_PRODUCTS, {
    variables: {
      input: {
        keyword: "Samsung",
        page: 1,
      },
    },
  })
  let totalCount = data?.getAllProduct.metaData.totalCount.toString()
  let responseData = data?.getAllProduct?.data

  if (loading) return null;
  if (error) return `Error! ${error}`;

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

  const fecthMoreHandle = (keyword: String, page = 1) => {
    setMyloading(true)
    setMyError(false)
    fetchMore({
      variables: {
        input: {
          keyword: keyword,
          page: page,
        },
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        fetchMoreResult ? fetchMoreResult : []
        setMyloading(false)
        setMyError(false);
        searchLoadding = false;
        return (
          fetchMoreResult
        );
      }
    })
      .catch(err => {
        setMyloading(false)
        setMyError(true);
        console.log("error !!!!")
        return console.log("error !!!!")
        // DEV KHÔNG Xử Lí Đc !!!!
        // SERVER sẽ hết 
      })
      ;
  }

  const addToCartHandle = (item: IProduct) => {
    addItemCart(item);
    console.log(itemsCart)
    confirm(' 🥳 ' + item.name + '. is add to your cart 🥳')
  }

  const sortHandle = (e) => {
    setSortOrder(parseInt(e.target.value));
  }

  const searchProductHandle = (event) => {
    try {
      event.preventDefault()
      const formData = new FormData(event.target)
      const searchItem = formData.get('searchItem')
      setKeywork(searchItem.toString())
      fecthMoreHandle(searchItem.toString());
      setPageActive(1)
    }
    catch (e) {
      console.log("error !!!!")
    }
  }
  const paginationHandle = (pageActive) => {
    setPageActive(pageActive);
    fecthMoreHandle(keywork, pageActive);
  }

  // const categoryHandle = (keyword,e) => {
  //   fecthMoreHandle(keyword);
  // }
  return (
    <>
      <Layout>
        <div>

        </div>
        <Banner imageUrl="/product/banner.png" currentUrl="React Advance | NORDIC CODER" title="Welcome Thien Phuc's Presentation ^__^" />
        <FilterBar orderAces={true} perPageItem={products?.length} totalItem={totalCount} setValue={sortHandle} />
        <BodyContent>
          <Container>
            <Row>
              <Col sm="4">
                <Div >
                  <StyledSearchBox>
                    <Form onSubmit={searchProductHandle}>
                      {error && <P>{error.graphQLErrors[0].message}</P>}
                      <Input type="search" name="searchItem" placeholder="Search products ..." />
                      <ButtonDefault type="submit"><FiSearch /></ButtonDefault>
                    </Form>
                  </StyledSearchBox>
                  <H2 style={{ paddingBottom: "20px" }}>Categories</H2>
                  {/* <UL>
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
                  </UL> */}
                  <ProductTrend></ProductTrend>
                  <Div>
                    {tag.map((item, index) =>
                      (
                        <ButtonTransparent active="" children={item.toString() + " /"} size="15" line="1.5" color="#7e7e7e" key={index} ></ButtonTransparent>
                      ))}
                  </Div>
                </Div>
              </Col>
              <Col sm="8">

                {myError && <p>We don't have item as your research</p>}
                <PaginationToolbar pageActive={pageActive} paginationHandler={paginationHandle} />
                {myloading ? <Spinner animation="border" role="status" variant="success">
                  <span className="sr-only">Loading...</span>
                </Spinner> :
                  <Container><Row>
                    <ProductList items={products} addToCart={addToCartHandle} />
                  </Row></Container>
                }

              </Col>
            </Row>
          </Container>
        </BodyContent>
      </Layout>
    </>
  )
}

export default withApollo({ ssr: true })(Home)
