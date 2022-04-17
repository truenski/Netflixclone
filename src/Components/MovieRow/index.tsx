import {useState} from 'react'
import { NavigateBefore, NavigateNext } from '@material-ui/icons'
import { MovieRow, MovieRowItem, MovieRowLeft, MovieRowList, MovieRowListArea, MovieRowRight } from './styles';
import { MovieItems } from '../../types';

type Props={
    title: string;
    items: MovieItems;
}

export default ({title,items}:Props)=>{

    const [scrollX,setScrollX] = useState(0);
    
    const handleLeftArrow = ()=>{
let x = scrollX + Math.round(window.innerWidth/2);
if(x>0){
    x=0;
}
setScrollX(x);
    }

    const handleRightArrow = ()=>{
        let x = scrollX - Math.round(window.innerWidth/2);
        let listW = items.results.length * 150;

if((window.innerWidth - listW) > x){
    x = window.innerWidth - listW - 60;
}

        setScrollX(x);
            }
    
return(
    <MovieRow >
<h2>{title}</h2>
<MovieRowLeft  onClick={handleLeftArrow}><NavigateBefore style={{fontSize:50}}/></MovieRowLeft>
<MovieRowRight  onClick={handleRightArrow}><NavigateNext style={{fontSize:50}}/></MovieRowRight>

<MovieRowListArea>

    <MovieRowList style={{
        marginLeft:scrollX,
        width: items.results.length * 150
    }}>
{items.results.length > 0 && items.results.map((item,key)=>(
<MovieRowItem key={key}>
<img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
</MovieRowItem>
))}
</MovieRowList>


</MovieRowListArea>
</MovieRow>
)}