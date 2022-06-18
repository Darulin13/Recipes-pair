import React from "react"
import styled from "styled-components"

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
