import styled from 'styled-components';
import {H6, TagA, Div, ButtonDefault } from '../../common/StyleComponent'
import {
    Container,
} from 'reactstrap';
export const ContainerCustom = styled(Container)`
border: 1px solid lightgray;
margin: 15px 0px;
border-radius : 10px;
padding : 10px;
`
export const StyledProductGridImageTag = styled.img`
    width: 100% !important;
    :nth-child(2){
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        visibility: hidden;
        opacity: 0;
    }
    :nth-child(1){
        z-index: 2;
        visibility: visible;
        opacity: 1;
    }
`
export const StyledProductGridIcons = styled.div`
    position: absolute;
    z-index: 9;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
`
export const StyledProductBox = styled.div`
    :hover ${StyledProductGridImageTag}:nth-child(2){
        visibility: visible;
        opacity: 1;
    }
    :hover ${StyledProductGridIcons} ${ButtonDefault}{
        visibility: visible;
        opacity: 1;
    }
    :hover ${Div} ${H6} ${TagA}{
        visibility: hidden;
        transform: translateY(-60%);
        opacity: 0;
    }
    :hover ${Div}>${TagA}{
        visibility: visible;
        transform: translateY(0);
        opacity: 1;
    }
    
`
export const StyledProductGridImageUpdated = styled.div`
    width : 100%;
    position: relative;
    ${TagA}.${StyledProductGridImageTag}
`
export const StyledSpanOnSale = styled.span`
font-size: 14px;
font-weight: 500;
line-height: 48px;
z-index: 3;
display: inline-block;
width: 48px;
height: 48px;
margin-bottom: 10px;
text-align: center;
text-transform: lowercase;
color: ${props => props.theme.colors.white};
border-radius: 100%;
background-color: ${props => props.theme.colors.blue8};
`
export const StyledSpanHot = styled(StyledSpanOnSale)`
    background-color: #c61932;
`
export const StyledDiscountPrice = styled.span`StyledDiscountPrice
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    text-decoration: line-through;
    color: #aaa;
    padding-right:5px;
`
export const StyledSpanPrice = styled.span`
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    color: blue

`
export const StyledProductGridBadges = styled.div`
    position: absolute;
    z-index: 9;
    top: 20px;
    left: 20px;
    display: flex;
    flex-direction: column;
`
export const StyledProductGridIcon = styled.div`
    display: inline;
    ${ButtonDefault}{
        line-height: 40px;
        display: inline-block;
        visibility: hidden;
        width: 40px;
        height: 40px;
        margin-bottom: 5px;
        padding: 0;
        text-align: center;
        opacity: 0;
        color: #7e7e7e;
        border: none;
        background: none;
        background-color: #fff;
        margin-top : 1em;
    }
`
export const StyledProductGridContent = styled.div`
    position: relative;
    border : none !important;
    >${Div}{
        position:relative;
        ${H6} ${TagA}{
            font-size: 17px;
            font-weight: 400;
            line-height: 1.6;
            display: block;
            visibility: visible;
            margin-bottom: 10px;
            transition-duration: .6s;
            transform: translateY(0);
            opacity: 1;
            color:gray;
            text-decoration: none;
        }
        >${TagA}{
            font-size: 13px;
            font-weight: 500;
            line-height: 1.3;
            position: absolute;
            top: 0;
            left: 0;
            display: inline-block;
            visibility: hidden;
            transition-duration: .6s;
            transform: translateY(60%);
            opacity: 0;
            color: #d3122a;
            border: none;
            background: none;
            text-decoration: none; 
        }
    }
`

