import { HeaderLogo, HeaderUser, Wrapper } from './styles';


type Props = { black: boolean}
 
export default ({black}: Props)=>{
    return(
        <Wrapper black={black}>
             
<HeaderLogo>
    <a href="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix"/>
    </a>
</HeaderLogo>
<HeaderUser>
    <a href="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User"/>
    </a>
</HeaderUser>
        </Wrapper>
    );
}