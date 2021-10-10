import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
             title= "Model S"
             description= "Order Online for Touchless Delivery"
             backgroundimage= "model-s.jpg"
             leftbtnText="Custom Order"
             rightbtnText="Existing Inventory"/>
            <Section
             title= "Model Y"
             description= "Order Online for Touchless Delivery"
             backgroundimage= "model-y.jpg"
             leftbtnText="Custom Order"
             rightbtnText="Existing Inventory"/>
            <Section  title= "Model 3"
             description= "Order Online for Touchless Delivery"
             backgroundimage= "model-3.jpg"
             leftbtnText="Custom Order"
             rightbtnText="Existing Inventory"/>
            <Section
             title= "Model X"
             description= "Order Online for Touchless Delivery"
             backgroundimage= "model-x.jpg"
             leftbtnText="Custom Order"
             rightbtnText="Existing Inventory"/>
             <Section
             title= "Lowest Cost Solar Panel "
             description= "Money-back Gurantee"
             backgroundimage= "solar-panel.jpg"
             leftbtnText="Custom Order"
             rightbtnText="Learn More"/>


             <Section title= "Solar for New Roof "
             description= "New Solar Roof Cost less then for New Solar Panel "
             backgroundimage= "solar-roof.jpg"
             leftbtnText="Custom Order"
             rightbtnText="Learn More"/>
             <Section
             title= "Accessries "
             description= ""
             backgroundimage= "accessories.jpg"
             leftbtnText="Shop Now"
             
             />
            
        </Container>
    )
}

export default Home


const Container=styled.div `
  height:100vh

`


    