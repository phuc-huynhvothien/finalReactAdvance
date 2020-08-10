import styled from 'styled-components'
export const StyledHeader = styled.div`
  align-items: center;
  background: #fff;
  color: #202124;
  contain: layout;
  display: flex;
  font-size: 14px;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 200;
  height: 120px;
`

export const StyledHeaderLogo = styled.a``
export const StyledHeaderLogoImage = styled.img`
  max-width: 180px;
`
export const StyledHeaderMenu = styled.ul`
  display: inline-flex;
  align-content: space-around;
  grid-template-columns: inherit;
  list-style: none;
  margin-bottom: 0rem;
`
export const StyledHeaderMenuItem = styled.li`
  width : 100px;
`
export const StyledHeaderButtons = styled.div`
  display: grid;
  align-content: space-around;
  grid-template-columns: 30px 80px 80px;
  list-style: none;
  grid-gap: 10px;
`

export const StyledHeaderIcons = styled.button`
  position: relative;
  width : auto; 
  padding: 0;
  border: none;
  background: none;
`
