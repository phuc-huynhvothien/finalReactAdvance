import React from 'react'
import { Text } from '../ui-kits/Text'
import Router from 'next/router'
import {
  StyledHeader,
  StyledHeaderMenu,
  StyledHeaderLogo,
  StyledHeaderButtons,
  StyledHeaderMenuItem,
  StyledHeaderIcons,
  StyledHeaderLogoImage
} from './Header.styled'
import { FiLogIn, FiLogOut, FiShoppingCart } from 'react-icons/fi';
const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledHeaderLogo href="/"><StyledHeaderLogoImage src="/logoPT.png"></StyledHeaderLogoImage></StyledHeaderLogo>
      <StyledHeaderMenu>
        <StyledHeaderMenuItem>
          <Text>Products</Text>
        </StyledHeaderMenuItem>
        <StyledHeaderMenuItem>
          <Text>Products</Text>
        </StyledHeaderMenuItem>
      </StyledHeaderMenu>
      <StyledHeaderButtons>
        <StyledHeaderIcons onClick={() =>  Router.push('/cart')}><FiShoppingCart /> </StyledHeaderIcons>
        <StyledHeaderIcons onClick={() =>  Router.push('/signIn')}> <FiLogIn /></StyledHeaderIcons>
        <StyledHeaderIcons onClick={() =>  Router.push('/signOut')}><FiLogOut /> </StyledHeaderIcons>
      </StyledHeaderButtons>
    </StyledHeader>
  )
}

export default Header
