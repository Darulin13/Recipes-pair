import React from "react";
import styled from "styled-components";



const Form = styled.form`
    background-color:#DFE4DE;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    width:100%;
    padding-top:50px;
    padding-bottom:50px;
`
const Title = styled.h1`
    padding-top:10px;
    padding-bottom:10px;
    font-size:35px;
    font-weight:500;
`
const P = styled.p`
    padding-top:10px;
    padding-bottom:20px;
    font-size:25px;
    font-weight:300;
`
const Input = styled.input`
    width:35%;
    padding-top:20px;
    padding-bottom:20px;
    margin-bottom:20px;
    @media(max-width:628px){
        width:55%;
    }
    
`
const Button = styled.button`
    width:10%;
    padding-top:10px;
    padding-bottom:10px;
    margin-bottom:20px;
    font-size:15px;
    font-weight:500;
    @media(max-width:628px){
        width:45%;
    }
    `
export default function Submit () {
   
        return (
   
            <Form>
                <Title>SUBSCRIBE</Title>
                <P>Sign up for newsletter</P>
                <Input />
                <Button>SUBMIT</Button>
            </Form>
          
        )

    }
