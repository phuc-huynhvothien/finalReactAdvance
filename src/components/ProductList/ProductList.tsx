import React from 'react';
import { IProduct } from '../../models/IProduct'
import { Product } from '../Product'
import { ProductListDiv ,ButtonCustom } from './ProductList.styled'

import { Div } from '../../common/StyleComponent'
import { FaCartPlus } from "react-icons/fa";

import {
    Col,
  } from 'reactstrap';
interface IProps { items: IProduct[], addToCart?: (x: IProduct) => void }

const ProductList: React.FC<IProps> = ({ items = [], addToCart }) => {
    return (
        <>
            {items && items.map((item, index) => (
                <Col key={index} sm="4" xs="1">
                    <Product key={index} id={item.id} adminId={item.adminId}
                        price={item.price}
                        productId={item.productId} name={item.name}
                        discountPercent={item.discountPercent}
                        uid={item.uid} imgUrl={item.imgUrl}
                        isNew={item.isNew}
                        imgUrlMob={item.imgUrlMob}>
                    </Product>
                    <ButtonCustom onClick={() => addToCart(item)}> <FaCartPlus fontSize={20} />&nbsp;&nbsp;CART</ButtonCustom>
                </Col>
            ))}
        </>
    )
}

export default ProductList
