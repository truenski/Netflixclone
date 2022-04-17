import styled from 'styled-components'

export const Description = styled.div`
    margin-top:15px;
    font-size:20px;
    color:#999;
    max-width: 40%;
    
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    
@media (max-width:760px){
        font-size:14px;
        max-width:100%;
        margin-right:30px;
    }
    `;

    export const Featured = styled.section`
    height:100vh;

    @media (max-width:760px){

            height:95vh;}
    `;


export const FeaturedInfo = styled.div`
font-size:18px;
font-weight:bold;
margin-top:15px;

@media (max-width:760px){

    font-size:16px;
}
`;


export const FeaturedButtons = styled.div`
margin-top:15px;
`;

export const MyListButton = styled.a`
display:inline-block;
font: size 20px;
font-weight:bold;
padding:12px 25px;
border-radius: 5px;
text-decoration: none;
margin-right:10px;
opacity:1;
transition:all ease 0.2s;
background:#333;
color:#FFF;
&:hover {
    opacity:0.7;
  };
  
  @media (max-width:760px){
    font-size:16px;
}`;

export const WatchButton = styled(MyListButton)`
background:#FFF;
color:#333;

@media (max-width:760px){
    font-size:16px;
}
`
    
export const FeaturedGenres = styled.div`
margin-top:15px;
font-size:18px;
color:#999;

@media (max-width:760px){
    font-size:14px;
}
`
    


    export const Year = styled.div`
    display:inline-block;
    margin-right:15px;
    `;

    export const Points = styled.div`
    display:inline-block;
    margin-right:15px;

    color: #46d369;
    `;

    export const Seasons = styled.div`
    display:inline-block;
    margin-right:15px;

    `;

    export const FeaturedName = styled.div`
    font-size:60px;
    font-weight:bold;

    
    @media (max-width:760px){
        font-size:40px;
    }
`

export const FeaturedX = styled.div`
width:inherit;
height:inherit;
background: linear-gradient(to right, #111 30%, transparent 70%);
display:flex;
flex-direction:column;
justify-content: center;
padding-left: 30px;
padding-bottom:100px;
padding-top:70px;
`

export const FeaturedY = styled.div`
    width:inherit;
    height:inherit;
    background: linear-gradient(to top, #111 8%, transparent 92%);
`
