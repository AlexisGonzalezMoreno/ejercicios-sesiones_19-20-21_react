import axios from 'axios';

export const getJokes =  () => {
    return axios.get('https://api.chucknorris.io/jokes/random');
}