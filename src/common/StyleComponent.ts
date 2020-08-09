import styled from 'styled-components';
export const Container = styled.div`
  padding-left : 15px;
  padding-right: 15px;
  width : 100%;
  margin : 0 auto;
  max-width : 1200px;
`
export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    &.align-items-center{
        align-items: center!important;
        margin : 0 auto;
    }
`
export const H3 = styled.h3`
`
export const H2 = styled.h2`
`
export const H1 = styled.h1`
`
export const TagA = styled.a`
display:block;
`
export const ButtonDefault = styled.button`
`
export const Div = styled.div`
`
export const BodyContent = styled.div`
margin-bottom: 130px;
margin-top: 130px;
`
export const LeftSide = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  padding-right : 30px;
`

export const RightSide = styled.div`
  flex: 0 0 75%;
  max-width: 75%;
  display:inline-flex;
`