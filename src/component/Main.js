import React from "react"
import styled from "styled-components"
import cake from "../images/cake.png"
import pizza from "../images/pizza.png"
import smoothie from "../images/smoothie.png"
import linha from "../images/linha.png"

const Container = styled.main`
    width:100%;
    background-color:#F2F4F1;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    div{
        width:90%;
    }
`

const Options = styled.section`    
    display: flex;    
    width: 90%;
    height: 90vh;
    margin-top: 10vh;
    @media only screen and (max-width: 628px) {
        flex-direction: column;
        height: 240vh;
        align-items:center;
      }  
    div{
        display: flex;
        align-items: center;    
        flex-direction: column;
    }
`

const Box1 = styled.div`
    img{
        width: 100%;
        height: 45vh;
    }   
`
const Box2 = styled.div`
    background-color:white;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 7px 6px #00000029;
    @media only screen and (max-width: 628px) {
        height: 35vh;
        margin-bottom: 5vh;
      }  
    img{
        width: 3.8vw;
        height: 0.4vh;
        margin-bottom: 20px;
        @media only screen and (max-width: 628px) {
            width: 5vw;
          }  
    }
    p{
        font-size: 2.3vw;
        color: #373737;
        &:hover {
            cursor: pointer;
        }
        @media only screen and (max-width: 628px) {
            font-size: 3.5vw;
          } 
    }
`

const SubTitle = styled.h2`
    margin-top: 15vh;
    font-size: 2.9vw;
    color: #373737;
    @media only screen and (max-width: 628px) {
        font-size: 4vw;
        margin-left: ;
      }  
`

const Line = styled.img`
     width: 7.3vw;
     height: 0.7vh;
     margin-top: 3vh;
`

const About = styled.section`
    display:flex;
    flex-direction:row;
    width:100%;
    padding-top:120px;
    img{
        width:50%;
        @media(max-width:1024px){
            width:100%;
        }
    }
    article{
        background-color:#FFFFFF;
        width:50%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-evenly ; 
        @media(max-width:1024px){
            width:100%;
           
        }
    }
    p{
        width:70%;
        color:#373737;
        align-self:center;
        text-align:start;
        font-size:32px;
        font-weight:300;
        @media(max-width:1024px){
            font-size:22px;
            width:100%;
        }
        @media(max-width:1748px){
            font-size:20px;
            
        }
        
    }
    @media(max-width:1024px){
        flex-direction:column;
    }
`

export default function Main() {

    return (
        <Container>
            <SubTitle>LATEST RECIPES</SubTitle>
            <Line src={linha} alt="line" />
            <Options>
              <div>
                <Box1><img src={cake} alt="cake" /></Box1>
                <Box2>
                  <img src={linha} alt="line" />  
                  <p>Red Velvet Cake</p>
                </Box2>  
              </div>
              <div>
                <Box1><img src={pizza} alt="pizza" /></Box1>
                <Box2>
                  <img src={linha} alt="line" /> 
                  <p>Margherita Pizza</p>
                </Box2>
              </div>                  
              <div>
                <Box1><img src={smoothie} alt="smoothie" /></Box1>
                <Box2>
                  <img src={linha} alt="line" /> 
                  <p>Peanut Smoothie</p>
                </Box2>
              </div>
            </Options>
            <About>
                <img src="https://media.graphassets.com/GUzCXIblTuTwGnKKtK7l" alt="Spoon" />
                <article>
                    <h2>
                        ABOUT
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</p>
                </article>

            </About>
        </Container>
    )
}
