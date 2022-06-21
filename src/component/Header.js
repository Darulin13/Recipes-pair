import React from "react"
import styled from "styled-components"
import fundo11 from "../images/fundo11.png"

const Container = styled.div`
    width: 96.4%;
    height: 148.4vh;
    background-image: url(${fundo11}) ;   
    background-size: 100% 100%;
    margin-top: 5.7vh;
    margin-left: 1.8%;    
    margin-bottom: 5.7vh;
    display: flex;    
    @media only screen and (max-width: 628px) {
        height: 90vh;
        margin-top: 3vh;
        margin-bottom: 2vh;
      }  
    p{
        font-size: 3.5vw;
        margin-left: 5%;
        margin-top: 10.5vh;   
        color: #373737;     
        @media only screen and (max-width: 628px) {        
            margin-top: 7vh;        
          }
    }
    h1{
        font-size: 100px;
        letter-spacing: 1.1vw;
        margin-top: 73.8vh;
        margin-left: 31.5%;
        position: absolute;
        color: #373737;   
        @media only screen and (max-width: 628px) {
            margin-top: 46.8vh;
            font-size: 8vw;
          }  
    }
`

const Sec = styled.section`
width: 36.2%;
height: 10vh;
margin-left: 50.7%;
margin-top: 11vh;
@media only screen and (max-width: 628px) {
       width: 45%; 
       margin-left: 38.7%;
       margin-top: 7.5vh;
  }  
`

const List = styled.ul`
    display: flex;
    justify-content: space-between;       
    li{
        font-size: 1.75vw;
        list-style: none;
        color: #373737;
        padding: 1.4vw;
        &:hover {
            cursor: pointer;
        }
        @media only screen and (max-width: 628px) {
            font-size: 3vw;
       } 
    }
`

const But = styled.button`
    border: 5px solid #373737; 
    font-size: 1.75vw;
    color: #373737;
    background-color: none;
    padding: 1.4vw 1vw;
    background-color: transparent;
    &:hover {
        cursor: pointer;
    }
    @media only screen and (max-width: 628px) {
        font-size: 3vw;
        border: 2px solid #373737;
      }  
`

export default function Header(){  

    return (
        <Container>            
          <p>RC</p>            
          <Sec>
            <nav>
              <List>
                <li>ABOUT</li>
                <li>RECIPES</li>
                <But>SUBSCRIBE</But>
              </List>
            </nav>
          </Sec>
            <h1>RECIPES</h1>
        </Container>
    )
}

