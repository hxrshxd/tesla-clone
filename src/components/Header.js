import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  function MouseEnter(event) {
    event.target.style.opacity = 0.5;
  }

  function MouseLeave(event) {
    event.target.style.opacity = 1;
  }

  return (
    <Container>
      <a href='#'>
        <img src='/images/logo.svg' />
      </a>
      <Menu>
        { cars && cars.map((car, index) => (
          <a 
            onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}
          key={index} href='#'>{ car }</a>
        )) }
      </Menu>
      <RightMenu>
        <a onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} href='#'>Shop</a>
        <a onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} href='#'>Account</a>
        <span 
          onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}
        onClick={() => setBurgerStatus(true)}>Menu</span>
        {/* <CustomMenu>Menu</CustomMenu> */}
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)}/>
        </CloseWrapper>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-In</a></li>
        <li><a href='#'>Test Drive</a></li>
        <li><a href='#'>Insurance</a></li>
        <li><a href='#'>CyberTruck</a></li>
        <li><a href='#'>Roadster</a></li>
        <li><a href='#'>Semi</a></li>
        <li><a href='#'>Cherging</a></li>
        <li><a href='#'>PowerWall</a></li>
        <li><a href='#'>Commercial Energy</a></li>
        <li><a href='#'>Utilities</a></li>
        <li><a href='#'>Find Us</a></li>
        <li><a href='#'>Support</a></li>
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
  font-size: 14px;
  font-weight: 700;
  padding: 0 10px;
  flex-wrap: nowrap;
  letter-spacing: 0.6px;
  }

  @media (max-width: 786px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a, span {
    font-size: 14px;
    font-weight: 600;
    margin-left: 28px;
    letter-spacing: 0.6px; 
  }

  span {
    cursor: pointer;
  }
`
 
const CustomMenu = styled.div`
  cursor: pointer
`
 
const BurgerNav = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  width: 270px;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 50px;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;
  overflor-y: scroll;
  li {
    padding: 15px 0;
    list-style-type: none;

    a {
      font-size: 14px;
      font-weight: 600;
    }
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`














