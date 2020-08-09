import styled from 'styled-components';
export const StyledFilterBarLayout = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #d8d8d8;
`
export const StyledFilterBarRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    align-items: center!important;
`
export const StyledFilterBarPageResult = styled.div`
    text-align:left!important;
    width : 30%;
`
export const StyledFilterBarControl = styled.div`
    width : 70%;
    text-align: right;    
`
export const StyledFilterBarHeader = styled.div`
    display:  inline-flex;
    align-items: center;
`
export const StyledFilterBarDropdown = styled.div`
    margin-right: 30px ;
    select {
        padding-bottom: 5px;
        padding-left: 0;
        cursor: pointer;
        color: #7e7e7e;
        border: none;
        border-bottom: 2px solid #ccc;
        border-radius: 0;
        background-color: #fff;
    }
`
export const StyledFilterBarIcons = styled.div`
    margin-right: 30px;
    button{
        font-size: 25px;
        margin-right: 10px;
        padding: 0;
        color: #ccc;
        border: none;
        background: none;
    }
    button.active{
        color: #333;
    }
`
export const StyledFilterBarAdvanceFilter = styled.div`
    position: relative;
    button{
        border: none;
        background: none;
    }
`