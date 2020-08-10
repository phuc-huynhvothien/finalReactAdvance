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
import { FiLogIn, FiShoppingCart } from 'react-icons/fi';
import { RiRegisteredLine } from 'react-icons/ri';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledHeaderLogo href="/"><StyledHeaderLogoImage src="/logoPT.png"></StyledHeaderLogoImage></StyledHeaderLogo>
      <StyledHeaderMenu>
        <StyledHeaderMenuItem>
          Home
        </StyledHeaderMenuItem>
        <StyledHeaderMenuItem>
          Products
        </StyledHeaderMenuItem>
      </StyledHeaderMenu>
      <StyledHeaderButtons>
        <StyledHeaderIcons onClick={() =>  Router.push('/cart')}><FiShoppingCart /> </StyledHeaderIcons>
        <StyledHeaderIcons onClick={() =>  Router.push('/signin')}> <FiLogIn /> SignIn</StyledHeaderIcons>
        <StyledHeaderIcons onClick={() =>  Router.push('/signup')}><RiRegisteredLine /> SignUp </StyledHeaderIcons>
      </StyledHeaderButtons>
    </StyledHeader>
  )
}

export default Header
