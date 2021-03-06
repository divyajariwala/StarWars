import * as Movie from '../ActionType';

export const addmovie = (movie) => {
  return {
    type: Movie.ADD_MOVIE,
    payload: movie,
  };
};


