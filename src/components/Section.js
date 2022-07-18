import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section({ title, description, leftBtn, rightBtn, backgroundImage }) {
  return (
    <Wrap bgImage= { backgroundImage }>
      <Fade bottom>
        <ItemText>
          <h1>{ title }</h1>
          <p>{ description }</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{ leftBtn }</LeftButton>
            { rightBtn && 
              <RightButton>{ rightBtn }</RightButton>
            }
          </ButtonGroup>
        </Fade>
        <ArrowDown src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${ props => `url(/images/${props.bgImage})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;

  h1 {
    font-size: 40px;
    margin-bottom: 14px;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 786px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(26, 36, 23, 0.8);
  color: white;
  width: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  height: 40px;
  border-radius: 100px;
  text-transform: uppercase;
  opacity: 0.85;
  margin: 8px;
`

const RightButton = styled(LeftButton)`
  color: black;
  background: white;
  opacity: 0.65
`

const ArrowDown = styled.img`
  overflow-x: hiddern;
  height: 30px;
  animation: animateDown infinite 1.5s
`

const Buttons = styled.div``










