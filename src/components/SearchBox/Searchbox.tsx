import React from 'react';
import { StyledSearchBox } from './SearchBox.styled'
import { FiSearch } from "react-icons/fi";
const SearchBox = (props) => {
    return <>
        <StyledSearchBox>
            <form>
                <input type="search" placeholder="Search products ..." />
                <button><FiSearch fontSize={20} /></button>
            </form>
        </StyledSearchBox>
    </>
}
export default SearchBox;