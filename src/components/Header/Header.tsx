import React, { useContext } from 'react'
import MyContext from '../../components/MyContext'
import { Text } from '../ui-kits/Text'
import Router from 'next/router'
import { TagA } from '../../common/StyleComponent'
import {
  StyledHeader,
  StyledHeaderMenu,
  StyledHeaderLogo,
  StyledHeaderButtons,
  StyledHeaderMenuItem,
  StyledHeaderIcons,
  StyledHeaderLogoImage,
  StyledHeaderCartItem
} from './Header.styled'
import { FiLogIn, FiShoppingCart } from 'react-icons/fi';
import { RiRegisteredLine } from 'react-icons/ri';

const Header: React.FC = () => {

  const { itemsCart } = useContext(MyContext)
  return (
    <StyledHeader>
      {/* <StyledHeaderLogo href="/"><StyledHeaderLogoImage src="/logoPT.png"></StyledHeaderLogoImage></StyledHeaderLogo> */}
      <StyledHeaderMenu>
        <StyledHeaderMenuItem>
          <TagA href="/">Home</TagA>
        </StyledHeaderMenuItem>
        <StyledHeaderMenuItem>
          <TagA href="/">Products</TagA>
        </StyledHeaderMenuItem>
        <StyledHeaderMenuItem>
          <TagA href="/sentryTest">Sentry Test Error</TagA>
        </StyledHeaderMenuItem>
      </StyledHeaderMenu>
      <StyledHeaderButtons>
        <StyledHeaderIcons onClick={() => Router.push('/cart')}><FiShoppingCart /> {itemsCart && itemsCart.length> 0  ?
        <StyledHeaderCartItem>{ itemsCart.length}</StyledHeaderCartItem>
        : ""}</StyledHeaderIcons>
        <StyledHeaderIcons onClick={() => Router.push('/signin')}> <FiLogIn /> SignIn</StyledHeaderIcons>
        <StyledHeaderIcons onClick={() => Router.push('/signup')}><RiRegisteredLine /> SignUp </StyledHeaderIcons>
      </StyledHeaderButtons>
    </StyledHeader>
  )
}

export default Header
