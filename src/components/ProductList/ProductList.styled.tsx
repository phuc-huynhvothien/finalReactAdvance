import styled from 'styled-components';
import { Button } from 'react-bootstrap'
export const ProductListDiv = styled.div`
  display: grid;
  grid-template-columns:auto auto auto auto;
  box-sizing: border-box;
  grid-gap: 25px;
`
export const ButtonCustom = styled(Button)`
  margin: 0 auto;
  display: flex;
`