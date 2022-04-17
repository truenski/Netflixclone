import styled from 'styled-components'


export const MovieRowLeft = styled.div`
position: absolute;
width:40px;
height:225px;
background:rgba(0,0,0,0.6);
z-index: 99;
display:flex;
align-items:center;
justify-content:center;
overflow:hidden;
cursor:pointer;
opacity:0;
left:0;
`;

export const MovieRowRight = styled(MovieRowLeft)`
position: absolute;
width:40px;
height:225px;
background:rgba(0,0,0,0.6);
z-index: 99;
display:flex;
align-items:center;
justify-content:center;
overflow:hidden;
cursor:pointer;
opacity:0;
left:unset;
right:0;
`;


export const MovieRow = styled.div`
margin-bottom:30px;
h2{
    margin: 0px 0px 0px 30px;
};

&:hover ${MovieRowLeft}{
    opacity:1;
    transition: all ease-in 0.2s;
}
`;

export const MovieRowListArea = styled.div`
overflow-x:hidden;
`;

export const MovieRowList = styled.div`
transition:all ease 0.5s;`;

export const MovieRowItem = styled.div`
display:inline-block;
width:150px;
cursor:pointer;
img{
    width:100%;
    transform: scale(0.9);
    transition: all ease 0.3s;
};

img:hover{
    transform: scale(1);
}`;



