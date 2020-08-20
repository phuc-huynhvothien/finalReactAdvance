import React from 'react';
import {
    ContainerCustom,   StyledSpanPrice,
      StyledProductGridContent,
    StyledProductGridImageTag, 
} from './Product.styled'
import { TagA,   H6, Div } from '../../common/StyleComponent'
import { IProduct } from '../../models/IProduct'
import {
    Row,
    Col,
} from 'reactstrap';
import formatter from '../../utils/currency';
const Product: React.FC<IProduct> = (props) => {
    return <>
        <ContainerCustom>
            <Row>
                <Col>
                        {/* <TagA> */}
                        <StyledProductGridImageTag src={props.imgUrl}></StyledProductGridImageTag>
                        {/* <StyledProductGridImageTag src={props.imgUrlMob}></StyledProductGridImageTag> */}
                        {/* </TagA> */}
                        {/* <StyledProductGridBadges>
                            {props.discountPercent != null ? <StyledSpanOnSale>{props.discountPercent}</StyledSpanOnSale> : ""}
                            {props.isNew ? <StyledSpanHot>New</StyledSpanHot> : ""}
                        </StyledProductGridBadges> */}
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
                            <StyledSpanPrice>{props.price ?  formatter.format(parseInt(props.price)) : ""}</StyledSpanPrice>
                        </Div>
                    </StyledProductGridContent>
                </Col>

            </Row>
        </ContainerCustom>

    </>
}
export default Product;