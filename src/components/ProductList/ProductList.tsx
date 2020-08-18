import React from 'react';
import { IProduct } from '../../models/IProduct'
import { Product } from '../Product'
import { ProductListDiv } from './ProductList.styled'
import { Button } from 'react-bootstrap'
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
                <Col sm="4">
                    <Product key={index} id={item.id} adminId={item.adminId}
                        price={item.price}
                        productId={item.productId} name={item.name}
                        discountPercent={item.discountPercent}
                        uid={item.uid} imgUrl={item.imgUrl}
                        isNew={item.isNew}
                        imgUrlMob={item.imgUrlMob}>
                    </Product>
                    <Button onClick={() => addToCart(item)}>CART <FaCartPlus fontSize={20} /></Button>
                </Col>
            ))}
        </>
    )
}

export default ProductList
