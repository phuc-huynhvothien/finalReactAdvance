import React from 'react';
import {
    StyledProductBox, StyledProductGridBadges, StyledSpanHot, StyledSpanOnSale,
    StyledProductGridIcons, StyledDiscountPrice, StyledSpanPrice,
    StyledProductGridIcon, StyledProductGridContent,
    StyledProductGridImageTag, StyledProductGridImageUpdated
} from './Product.styled'
import { TagA, ButtonDefault, H6, Div } from '../../common/StyleComponent'
import { FiHeart, FiSearch } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";
import { BsFillReplyAllFill } from "react-icons/bs";
import { IProduct } from '../../models/IProduct'
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
const Product: React.FC<IProduct> = (props) => {
    return <>
        <Container>
            <Row>
                <Col>
                    <StyledProductGridImageUpdated>
                        {/* <TagA> */}
                        <StyledProductGridImageTag src={props.imgUrl}></StyledProductGridImageTag>
                        {/* <StyledProductGridImageTag src={props.imgUrlMob}></StyledProductGridImageTag> */}
                        {/* </TagA> */}
                        <StyledProductGridBadges>
                            {props.discountPercent != null ? <StyledSpanOnSale>{props.discountPercent}</StyledSpanOnSale> : ""}
                            {props.isNew ? <StyledSpanHot>New</StyledSpanHot> : ""}
                        </StyledProductGridBadges>
                    </StyledProductGridImageUpdated>
                </Col>
            </Row>
            <Row>
                <Col>
                    <StyledProductGridContent>
                        <Div>
                            <H6>
                                <TagA href="#">{props.name}</TagA>
                            </H6>
                        </Div>
                        <Div>
                            <StyledSpanPrice>{props.price ? "$" + props.price : ""}</StyledSpanPrice>
                        </Div>
                    </StyledProductGridContent>
                </Col>

            </Row>
        </Container>

    </>
}
export default Product;