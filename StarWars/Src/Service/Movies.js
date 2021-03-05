import * as Url from '../Config/BaseURL';
import axios from 'axios';

// -----!MovieList!-----
export const movielist = payload => {
    return axios(Url.baseUrl + '/films/', {
        method: 'GET',
    }).then(response => response.data)
        .catch(e => e.response)
}