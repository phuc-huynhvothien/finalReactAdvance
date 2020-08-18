import React from 'react';
import {
    StyledProductBox, StyledProductGridBadges,StyledSpanHot,StyledSpanOnSale,
    StyledProductGridIcons,StyledDiscountPrice,StyledSpanPrice,
    StyledProductGridIcon, StyledProductGridContent,
    StyledProductGridImageTag, StyledProductGridImageUpdated
} from './Product.styled'
import {TagA,ButtonDefault,H6,Div} from '../../common/StyleComponent'
import { FiHeart, FiSearch } from "react-icons/fi";
import { FaCartPlus} from "react-icons/fa";
import { BsFillReplyAllFill } from "react-icons/bs";
import { IProduct } from '../../models/IProduct'
const Product: React.FC<IProduct> = (props) => {
    return <>
        <StyledProductBox>
            
                <StyledProductGridImageUpdated>
                    <TagA>
                        <StyledProductGridImageTag src={props.imgUrl}></StyledProductGridImageTag>
                        {/* <StyledProductGridImageTag src={props.imgUrlMob}></StyledProductGridImageTag> */}
                    </TagA>
                    <StyledProductGridBadges>
                        {props.discountPercent != null ? <StyledSpanOnSale>{props.discountPercent}</StyledSpanOnSale> : ""}
                        {props.isNew ? <StyledSpanHot>New</StyledSpanHot> : ""}
                    </StyledProductGridBadges>
                </StyledProductGridImageUpdated>
                <StyledProductGridContent>
                    <Div>
                        <H6>
                            <TagA href="#">{props.name}</TagA>
                        </H6>
                        <TagA href="#">Select Option</TagA>
                    </Div>
                    <Div>
                        <StyledSpanPrice>{props.price ? "$" + props.price : ""}</StyledSpanPrice>
                    </Div>
                </StyledProductGridContent>

        </StyledProductBox>

    </>
}
export default Product;