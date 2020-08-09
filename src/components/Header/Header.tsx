import React from 'react'
import { Text } from '../ui-kits/Text'
import { Button } from 'react-bootstrap';
import {
  StyledHeader,
  StyledHeaderMenu,
  StyledHeaderLogo,
  StyledHeaderButton,
  StyledHeaderMenuItem,
} from './Header.styled'
import { FaBeer } from 'react-icons/fa';
const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledHeaderLogo>LOGO</StyledHeaderLogo>
      <StyledHeaderMenu>
        <StyledHeaderMenuItem>
          <Text>Home</Text>
        </StyledHeaderMenuItem>
        <StyledHeaderMenuItem>
          <Text>Products</Text>
        </StyledHeaderMenuItem>
      </StyledHeaderMenu>
      <Button variant="success"><FaBeer /> Login</Button>
      {/* <StyledHeaderButton>Login</StyledHeaderButton> */}
    </StyledHeader>
  )
}

export default Header
