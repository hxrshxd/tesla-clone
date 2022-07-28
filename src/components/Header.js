import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  const [login, setLogin] = useState(false);
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
        <span  onClick={() => setLogin(true)}>Account</span>
        {/* login component */}
        <LoginComponent show={login}>
            <LoginForm>
              <LoginInput type='text' placeholder='Username'/>
              <LoginInput type='password' placeholder='Password'/>
              <LoginBtn onClick={() => setLogin(false)}>Login</LoginBtn>
            </LoginForm>
        </LoginComponent>
        <span 
          onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}
        onClick={() => setBurgerStatus(true)}>Menu</span>
        {/* <CustomMenu>Menu</CustomMenu> */}
      </RightMenu>

      {/* sidebar menu that is hidden and will show when click menu */}
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)}/>
        </CloseWrapper>
        <BurgerNavScroll>
        <li><a onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} href='#'>Existing Inventory</a></li>
        <li><a onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} href='#'>Used Inventory</a></li>
        <li><a onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} href='#'>Trade-In</a></li>
        <li><a onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} href='#'>Test Drive</a></li>
        <li><a onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} href='#'>Insurance</a></li>
        <li><a onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} href='#'>CyberTruck</a></li>
        <li><a onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} href='#'>Roadster</a></li>
        <li><a onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} href='#'>Semi</a></li>
        <li><a onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} href='#'>Powerwall</a></li>
        <li><a onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} href='#'>Commercial Energy</a></li>
        <li><a onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} href='#'>Utilities</a></li>
        <li><a onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} href='#'>Find Us</a></li>
        <li><a onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} href='#'>Support</a></li>
        <li><a onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} href='#'>Investor Realtions</a></li>
        </BurgerNavScroll>
      </BurgerNav>
    </Container>
    
  )
}

export default Header

const LoginComponent = styled.div`
  width: 350px;
  height: 200px;
  position: absolute;
  top: 400%;
  left: 40%;
  display: ${props => props.show ? 'flex' : 'none'};
  /* display: block; */
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;

  
  
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LoginInput = styled.input `
  margin-bottom: 20px;
  width: 100%;
  height: 40px;
  border: 1px solid lightblue;
  border-radius: 4px;
`;

const LoginBtn = styled.button`
  width: 80px;
  padding: 10px 20px;
  background-color: lightblue;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
`;

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
  padding: 20px 20px 20px 50px;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    list-style-type: none;
    
    a {
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.4px; 
    }
  }
  `
  
  const BurgerNavScroll = styled.div`
  margin-top: 20px;
  overflow-y: auto;
  &::-webkit-scrollbar {
      width: 0.1px;
  }  
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`














