import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
  return (
    <Container>
      <Section 
        title= 'Model 3'
        description = 'Ordre online touchless delivery'
        leftBtn = 'Custom Order'
        rightBtn = 'Existing Inventory'
        backgroundImage = 'model-3.jpg'
      />
      <Section 
        title= 'Model Y'
        description = 'Ordre online touchless delivery'
        leftBtn = 'Custom Order'
        rightBtn = 'Existing Inventory'
        backgroundImage = 'model-y.jpg'
      />
      <Section 
        title= 'Model S'
        description = 'Ordre online touchless delivery'
        leftBtn = 'Custom Order'
        rightBtn = 'Existing Inventory'
        backgroundImage = 'model-s.jpg'
      />
      <Section 
        title= 'Model X'
        description = 'Ordre online touchless delivery'
        leftBtn = 'Custom Order'
        rightBtn = 'Existing Inventory'
        backgroundImage = 'model-x.jpg'
      />
      <Section 
        title= 'Solar Panels'
        description = 'Lowest Cost Solar Panels in America'
        leftBtn = 'Order now'
        rightBtn = 'Know more'
        backgroundImage = 'solar-panel.jpg'
      />
      <Section 
        title= 'Solar Roofs'
        description = 'Produce Clean Energy From Your Roof'
        leftBtn = 'Order now'
        rightBtn = 'Know more'
        backgroundImage = 'solar-roof.jpg'
      />
      <Section 
        title= 'Accessories'
        description = ''
        leftBtn = 'Order now'
        backgroundImage = 'accessories.jpg'
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`