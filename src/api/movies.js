import axios from 'axios';
import {  setGenres, setMovies } from '../slice/movieslice';


const BaseURL =  'https://www.freetestapi.com/api/v1/movies';

export const getMovies = async dispatch => {
    
    try {
        const {data} = await axios.get(BaseURL);
        dispatch(setMovies(data))
        return data

    }catch(err){
        return err
    }
}

export const getMoviesBySearch = () => async dispatch => {
   const url =BaseURL + '/search';
   try {
    const {data} = await axios.get(url,{
        params:{
            search : 'value'
        }
    } )
    dispatch(setMovies(data))
   }
   catch(err){
    return err
   }
}

export const getAllGenres = () => async dispatch => {
    const url = BaseURL + '/genres';
    try {
        const {data} = await axios.get(url);
        dispatch(setGenres(data))
    }catch(err){
        return err
    }
}