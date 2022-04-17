import { FeaturedItem, MovieItems } from "./types";
import axios, {AxiosResponse } from 'axios';
const API_KEY = "fae866a6bf4fd4c90cf1c1653d4207ed";
const API_BASE = "https://api.themoviedb.org/3";


const basicFetch = async (endpoint) => {
    const data = await axios.get(`${API_BASE}${endpoint}`) 
    .then(res=>res.data)
    return data
}

export default {
    getHomeList: async () => {
        return [
            {
                slug:'originals',
                title:"Originais do Netflix",
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'trending',
                title:"Recomendados para você",
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
                
            },
            {
                slug:'toprated',
                title:"Em alta",
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug:'action',
                title:"Ação",
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug:'comedy',
                title:"Comédia",
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug:'horror',
                title:"Terror",
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug:'romance',
                title:"Romance",
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug:'documentary',
                title:"Documentários",
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)

            },
            
        ];
    },
    getMovieInfo: async (movieId,type):Promise<FeaturedItem>=>{

if(!movieId|| !type){
throw new Error(`deu erro`)
//return ja possui await

}
return basicFetch(`/${type}/${movieId}?language=pt-BR&api_key=${API_KEY}`)

}}