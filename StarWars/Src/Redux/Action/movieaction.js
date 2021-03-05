import * as movie from '../ActionType';

export const addmovie = (movie) => {
  return {
    type: movie.ADD_MOVIE,
    payload: movie,
  };
};
