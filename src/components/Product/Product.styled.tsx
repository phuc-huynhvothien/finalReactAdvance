import styled from 'styled-components';
import { H3, TagA, Div, ButtonDefault } from '../../common/StyleComponent'

export const StyledProductGridImageTag = styled.img`
    width: 100%;
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
    margin-bottom: 50px;
    width : 195px;
    margin: 0 15px;
    :hover ${StyledProductGridImageTag}:nth-child(2){
        visibility: visible;
        opacity: 1;
    }
    :hover ${StyledProductGridIcons} ${ButtonDefault}{
        visibility: visible;
        opacity: 1;
    }
    :hover ${Div} ${H3} ${TagA}{
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
export const StyledSpanPrice = styled.span`
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    text-decoration: line-through;
    color: #aaa;
    padding-right:5px;
`
export const StyledDiscountPrice = styled.span`
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    color: ${props => props.theme.colors.blue8};
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
    }
`
export const StyledProductGridContent = styled.div`
    position: relative;
    padding-top: 25px;
    >${Div}{
        position:relative;
        ${H3} ${TagA}{
            font-size: 17px;
            font-weight: 400;
            line-height: 1.6;
            display: block;
            visibility: visible;
            margin-bottom: 10px;
            transition-duration: .6s;
            transform: translateY(0);
            opacity: 1;
            color: ${props => props.theme.colors.gray};
            text-decoration: none;
        }
        >${TagA}{
            font-size: 18px;
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

