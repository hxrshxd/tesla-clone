import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <Container>
      <a href='#'>
        <img src='/images/logo.svg' />
      </a>
      <Menu>
        <a href='#'>Model S</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>
        <a href='#'>Model 3</a>
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu />
      </RightMenu>
      <BurgerNav>
        <li><a>Existing Inventory</a></li>
        <li><a>Existing Inventory</a></li>
        <li><a>Existing Inventory</a></li>
        <li><a>Existing Inventory</a></li>
        <li><a>Existing Inventory</a></li>
        <li><a>Existing Inventory</a></li>
        <li><a>Existing Inventory</a></li>
        <li><a>Existing Inventory</a></li>
        <li><a>Existing Inventory</a></li>
      </BurgerNav>
    </Container>
    
  )
}

export default Header

const Container = styled.div`
  height: 60px;
  position: fixed;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
 a {
  font-weight: 600;
  padding: 0 10px;
  text-transform: uppercase; 
  flex-wrap: nowrap;
  }

  @media (max-width: 786px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    margin-right: 10px;
    text-transform: uppercase; 
  }
`
 
const CustomMenu = styled(MenuIcon)`
  cursor: pointer
`
 
 const BurgerNav = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  width: 300px;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 20px;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    list-style-type: none;

    a {
      font-weight: 600;
    }
  }
 `
 














