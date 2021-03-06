import React from 'react';
import { IFilterBar } from '../../models/IFilterBar'
import { BsFilter, BsFillGrid3X3GapFill, BsListUl } from 'react-icons/bs'
import { FcGrid } from 'react-icons/fc'
import {
    StyledFilterBarLayout,
    StyledFilterBarRow,
    StyledFilterBarControl,
    StyledFilterBarDropdown,
    StyledFilterBarHeader,
    StyledFilterBarPageResult,
    StyledFilterBarAdvanceFilter,
    StyledFilterBarIcons
} from '../FilterBar/FilterBar.styled';
import { Container, Row } from '../../common/StyleComponent'
import { StyledButtonTransparent } from '../../components/ui-kits/ButtonTransparent/ButtonTransparent.styled'
const FilterBar: React.FC<IFilterBar> = (props) => {
    return <>
        <StyledFilterBarLayout>
            <Container>
                <Row className="align-items-center">
                    <StyledFilterBarPageResult>
                        Showing {props.perPageItem} of {props.totalItem} result
                </StyledFilterBarPageResult>
                    <StyledFilterBarControl>
                        <StyledFilterBarHeader>
                            <StyledFilterBarDropdown>
                                <select onChange={props.setValue}>
                                    <option value="1">Price - High to Low</option>
                                    <option value="2">Price - Low to High</option>
                                </select>
                            </StyledFilterBarDropdown>
                            <StyledFilterBarIcons>
                                <StyledButtonTransparent>
                                    <BsFillGrid3X3GapFill fontSize={20} />
                                </StyledButtonTransparent>
                                <StyledButtonTransparent className="active">
                                    <FcGrid fontSize={20} />
                                </StyledButtonTransparent>
                                <StyledButtonTransparent>
                                    <BsListUl fontSize={20} />
                                </StyledButtonTransparent>
                            </StyledFilterBarIcons>

                            {/* Advance */}
                            <StyledFilterBarAdvanceFilter>
                                <button className="">
                                    <BsFilter fontSize={20} /> Filter
                            </button>
                            </StyledFilterBarAdvanceFilter>
                        </StyledFilterBarHeader>
                    </StyledFilterBarControl>
                </Row>
            </Container>
        </StyledFilterBarLayout>
    </>
}
export default FilterBar
