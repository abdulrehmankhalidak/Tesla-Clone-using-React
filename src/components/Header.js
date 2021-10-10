import React,{useState} from 'react';
import styled from "styled-components";
import {FcMenu} from 'react-icons/fc';
import { AiOutlineClose } from "react-icons/ai";

function Header() {

    const [burgerStatus,setBurgerStatus]=useState(false)
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt=""/>
            </a>

            <Menu>
        
          <a href="/">Model S</a>
          <a href="/">Model 3</a>   
          <a href="/">Model X</a>   
          <a href="/">Model Y</a>   

         <RightMenu>
             <a href="/">Shop</a>
             <a href="/">Tesla Account</a>
         </RightMenu>
<FcMenu size="30px" onClick={()=>setBurgerStatus(true)} style={{color:"red",cursor:"pointer"}}/>


         {/* <CustomMenu/> */}

            </Menu>


            <BurgerNav  show={burgerStatus}>
                <Close onClick={()=>setBurgerStatus(false)}>
                <AiOutlineClose  size="20px" style={{color:"black",cursor:"pointer"}}/></Close>
                <li><a href="/">Model S</a></li>
                <li><a href="/">Model 3</a></li>
                <li><a href="/">Model X</a></li>
                <li><a href="/">Model Y</a></li>
                <li><a href="/">Shop</a></li>
                <li><a href="/">Tesla Account</a></li>
                <li><a href="/">Used Inventory</a></li>
                <li><a href="/">CyberTruck</a></li>
                <li><a href="/">Roadstar</a></li>
                <li><a href="/">Trade-in</a></li>
                <li><a href="/">Solar Panel</a></li>
                <li><a href="/">Solar Roof</a></li>
                <li><a href="/">Accessories</a></li>
               
            </BurgerNav>
        </Container>
    )
}

export default Header


const Container=styled.div `

min-height:60px;
position:fixed;
display:flex;
align-items:center;
padding:0px 20px;
top:0;
left:0;
right:0;
z-index:1;

`

const Menu=styled.div `
      
     display:flex;
     align-items:center;
     flex:1;
     justify-content:center;

     a{
         font-weight:600;
         text-transform:uppercase;
         padding:0px 10px;
         flex-wrap:nowrap;
         @media (max-width:900px){
            display:none;
        }
     }
      
     



`

const RightMenu=styled.div `
    
a{
    font-weight:600;
    text-transform:uppercase;
    margin-right: 10px;
    
}

`

const BurgerNav=styled.div `

position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex:
flex-direction:column;
text-align:start;
transform: ${props=> props.show ? 'translateX(0)':'translateX(100%)'};
transition:transform 0.2s ease-in;
 li{
     padding:15px 0px;
    border-bottom:1px solid ;
 }
 a{
     font-weight:600;
 }



`

const Close=styled.div `

display:flex;
justify-content:flex-end;

`





