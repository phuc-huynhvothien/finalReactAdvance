import styled from 'styled-components';

export const StyledSearchBox = styled.div`
position: relative;
margin-bottom:40px;
    input {
        font-size: 14px;
        line-height: 19px;
        width: 100%;
        height: 40px;
        margin: 0;
        padding-right: 20px;
        padding-left: 0;
        border: none;
        border-bottom: 2px solid #ccc;
        background: transparent;
        background-clip: padding-box;
    }
    button {
        position: absolute;
        top: 50%;
        right: 0;
        padding: 0;
        transform: translateY(-50%);
        border: none;
        background-color: transparent!important;
    }
    
`

 