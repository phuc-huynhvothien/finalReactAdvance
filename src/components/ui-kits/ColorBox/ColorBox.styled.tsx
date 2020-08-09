import styled from 'styled-components';
export const StyledColorBoxDefault = styled.button`
    ${props => `width: ${props.size}px;height: ${props.size}px; `}
    margin-bottom: 15px;
    cursor: pointer;
    border-radius: 50%;
    border: 1px gray solid;
    color:gray;
    margin : 5px 10px;
    background-color: white;
`
export const StyledColorBox = styled(StyledColorBoxDefault)`
    ${props => props.color ? `background-color: ${props.color};` : ""}
    ${props => props.isCircle ? "" : "border-radius:unset;"}
    border:none;
`