import React, { useEffect, useState } from 'react';
import Tmdb from "./Tmdb";
import MovieRow from './Components/MovieRow';
import FeaturedMovie from './Components/FeaturedMovie';
import Header from './Components/Header';
import { Lists, Loading, LoadingImg,GlobalStyle } from './styles';
import { FeaturedItem, Movie } from './types'
import { AxiosResponse } from 'axios';





export default function App() {

  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [featuredData, setFeaturedData] = useState<FeaturedItem>();
  const [blackHeader, setBlackHeader] = useState<boolean>(false);


  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);


      //pegando lista dos originais do netflix - 1:16:33
      let originals = list.filter(item => item.slug === "originals")
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  //Scroll listener para setar header
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else { setBlackHeader(false) }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])


  return (
    <>
<GlobalStyle/>
      <Header black={blackHeader} />
      {featuredData &&
        <FeaturedMovie item={featuredData} />}

      <Lists>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </Lists>

      <footer>
        Author: Kesney Mendes Viana <br />
        Direitos de imagem para Netflix <br />
        Dados pegos do site Themoviedb.org
      </footer>

      {movieList.length <= 0 && <Loading>
        <LoadingImg alt="carregando..." src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" />
      </Loading>}


    </>)
}



//passar api pra axios..