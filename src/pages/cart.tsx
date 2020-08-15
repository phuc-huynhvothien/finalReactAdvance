import React, { useContext } from 'react'
import MyContext from '../components/MyContext'
import Router from 'next/router'
import styled from 'styled-components'
import { SIGN_IN } from '../graphql/product/product.query'
import { useMutation } from '@apollo/react-hooks'
import withApollo from '../utils/withApollo'
import Layout from '../components/Layout/Layout'
import { Spinner, Form, Button, Table } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { FiTrash } from "react-icons/fi";
import { multiply,sumBy } from 'lodash';
const Cart = () => {

    const StyledErrorMess = styled.p`
        color : red;
    `;
    const StyledDiv = styled.div`
        margin: auto;
        width: 300px;
    `;
    const StyledSignInTitle = styled.h1`
        text-align: center;
        margin-bottom : 30px;
    `;
    const { itemsCart, removeItemCart,checkoutHandler } = useContext(MyContext)

    const handleCheckout = () => {
        const isConfirm = confirm('Thank you for your payment. Hope to see you next time 🥳')
        checkoutHandler()
        if (isConfirm) window.location.href = '/';
    }
    return (
        <Layout>
            <StyledDiv>
                <StyledSignInTitle>Cart List</StyledSignInTitle>
                <Table>
                    <thead>
                        <tr>
                            <th>PRODUCT</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>TOTAL</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            itemsCart && itemsCart.map((item, index) =>
                                <tr key={index}>
                                    <td>
                                        <img src={item.imgUrl} style={{ width: '100px' }} alt="" />{' '}

                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.itemInCart}</td>
                                    <td>{multiply(item.itemInCart, item.price) }</td>
                                    <td><Button onClick={() => removeItemCart(item.id)}><FiTrash /></Button></td>
                                </tr>
                            )
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan={4}>Total</th>

                        <th>{sumBy(itemsCart, x => multiply(x.price,x.itemInCart))}</th>
                        </tr>
                        <tr>
                            <th colSpan={4}></th>

                        <th colSpan={4}><Button variant="success" onClick={handleCheckout}>CHECK OUT HERE </Button></th>
                        </tr>
                    </tfoot>
                </Table>

            </StyledDiv>

        </Layout >

    )
}

export default withApollo({ ssr: true })(Cart)