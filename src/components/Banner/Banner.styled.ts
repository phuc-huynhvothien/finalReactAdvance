import styled from 'styled-components'
export const StyleBannerLayout = styled.div`
padding-bottom: 70px;
padding-top: 70px;
background-image: url(${props =>props.url ? props.url : ""});
`

export const StyleBannerTitle = styled.h1`
font-size: 30px;
line-height: 1.3;
margin-bottom: 20px;
color: #333;
`
export const StyleBannerUrl = styled.p`
margin-right: 30px;
font-size: 16px;
color: #777;
`