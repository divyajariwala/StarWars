import { ADD_MOVIE } from '../Action/movieaction';
const initialState = {
  Movie: {
    title: '',
    episode_id: '',
    opening_crawl: '',
    director: '',
    producer: '',
    release_date: '',
  },
};

function locationReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        Movie: action.paylod.Movie,
      };


    default:
      return state;
  }
}

export default locationReducer;
