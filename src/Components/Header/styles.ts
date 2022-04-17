import styled from 'styled-components'

export const Wrapper = styled.header<{black:boolean}>`
    position:fixed;
    z-index:999;
    top:0;
    left:0;
    right:0;
    height:70px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0px 30px;
    background:transparent;
    transition:all ease 0.4s;


${({black})=> !!black && `background:#141414;` }
    
`;



export const HeaderLogo = styled.div`
height:25px;

img{
    height:100%;
}`;

export const HeaderUser = styled.div`
height:35px;

img{
height:100%;
border-radius:2px;
}
`;



