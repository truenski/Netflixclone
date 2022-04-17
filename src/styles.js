import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  body {
    background-color: #111;
    color: white;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  
  footer {
    margin: 50px 0;
    text-align: center;
  }
`

export const Lists = styled.section`
margin-top:-100px;
`;

export const Loading = styled.div `
position:fixed;
left:0;
top:0;
right:0;
bottom:0;
z-index:99;
background:#000;
display:flex;
justify-content: center;
align-items: center;
`;
export const LoadingImg = styled.img`
width:36%;
height:40%;`;
