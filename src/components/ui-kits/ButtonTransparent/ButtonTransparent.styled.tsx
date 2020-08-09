import styled from 'styled-components';
export const StyledButtonTransparent = styled.button`
  font-size: ${props =>props.size? props.size+"px" : "25px"};
  margin-right: 10px;
  padding: 0;
  color: ${props =>props.color? props.color : "#ccc"};
  border: none;
  background: none;
  ${props =>props.line? "line-height:"+props.line+";" : ""}
  ${props =>props.capitalize? "text-transform:capitalize;" : ""}
`