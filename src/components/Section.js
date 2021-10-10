import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';



function Section({title,description,leftbtnText,rightbtnText,
    backgroundimage}) {
    return (
        <Wrap bgImage={
            backgroundimage}>
              <Fade bottom>
          
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
        </Fade>
        
           <Button>


             <Fade bottom>
            <ButtonGroup>

                <LeftButton>
                 {leftbtnText}
                </LeftButton>
                { rightbtnText &&  <RightButton>
                  {rightbtnText}
                </RightButton>}

           


            </ButtonGroup>
            </Fade>
            <DownArrow src="/images/down-arrow.svg"></DownArrow>
            </Button>
        </Wrap>
    )
}

export default Section

const Wrap=styled.div `

  height:100vh;
  width:vw;
  background:orange;
  
  background-size: cover;
    background-position: center center;
    
  background-repeat:no-repeat;
  background-image:url('/images/model-s.jpg');
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  background-image:${props=> `url("/images/${props.bgImage}")` }
  


`

  const ItemText=styled.div `
  
   padding-top:15vh;
   text-align:center;
  
  
  `

  const ButtonGroup=styled.div `
      display:flex;
    
      margin-bottom:30px;

      @media (max-width:768px){
        flex-direction:column;
    }
      

  
  `
  const LeftButton=styled.div `
    background-color:rgba(23,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;
  
  `


  const RightButton=styled(LeftButton)`

     background:white;
     color:black;
     opacity:0.66;
  `


  const DownArrow=styled.img `
  
      margin-top:20px;
      height:40px;
      cursor:pointer;
      animation:animateDown infinite 1.5s;

  
  `

  const Button=styled.div `
  
     

  
  `
  