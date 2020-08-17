import styled from 'styled-components'
// export const StyledHeader = styled.div`
//   align-items: center;
//   justify-content: space-between!important;
//   background: #fff;
//   color: #202124;
//   contain: layout;
//   display: flex;
//   font-size: 14px;
//   padding: 0 24px;
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 200;
//   height: 70px;
// `

export const StyledHeaderLogo = styled.a``
export const StyledHeaderLogoImage = styled.img`
  max-width: 180px;
`
export const StyledHeaderMenu = styled.ul`
  align-content: space-around;
  list-style: none;
  margin-bottom: 0rem;
`
export const StyledHeaderMenuItem = styled.li`
  width : 140px;
  display: inline-block;
`
export const StyledHeaderButtons = styled.div`
  display: inline-flex;
  // align-content: space-around;
  list-style: none;
  text-align: center;
`

export const StyledHeaderIcons = styled.button`
  position: relative;
  width : auto; 
  padding: 0;
  border: none;
  background: none;
`
export const StyledHeaderCartItem = styled.span`
  color: white;
  position: absolute;
  top: -9px;
  background: red;
  width: 20px;
  border-radius: 25px;
}
`
export const StyledHeader = styled.nav`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
`