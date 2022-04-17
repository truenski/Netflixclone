import {Description,Seasons,Year,Points,FeaturedName,FeaturedX,FeaturedY,Featured,FeaturedButtons,FeaturedGenres,FeaturedInfo,WatchButton,MyListButton} from './styles'
import {FeaturedItem} from '../../types'
import { useState,useEffect } from 'react';


type Props = { item:FeaturedItem }
export default ({item}:Props)=>{


let firstDate = item.first_air_date;
// new Date
const [genres,setGenres] = useState<string[]|undefined>([])

//1- pega o nome dentro de CADA ELEMENTO(i), dentro do array genres, dentro de item.
//2- Coloca dentro de um array genres

useEffect(()=>{
    setGenres(item?.genres?.map(genre=>genre.name))
} ,[])



let description = item.overview;

    return(
        <Featured style={{
    backgroundSize:'cover',
    backgroundPosition:'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
<FeaturedY className="featured--vertical">
<FeaturedX className="featured--horizontal">

<FeaturedName>{item.original_name}</FeaturedName>
<FeaturedInfo>
    
    <Points>{item.vote_average} pontos</Points>
    <Year>{firstDate?.getFullYear}</Year>
    <Seasons>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 && 's'}</Seasons>
    <Description title={description}>{description}</Description>
    <FeaturedButtons>
<WatchButton  href={`/watch/${item.id}`} >⏵ Assistir</WatchButton>
<MyListButton  href={`/list/add/${item.id}`}>+ Minha lista</MyListButton>
    </FeaturedButtons>
    <FeaturedGenres> <strong>Gêneros:</strong> {genres?.join(', ')}</FeaturedGenres>
</FeaturedInfo>

</FeaturedX>
</FeaturedY>
            
        </Featured>
    );
}