import {ADD_MOVIE} from '../Action/movieaction';
const initialState = {
  movie: [],
};

function locationReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movie: action.paylod,
      };

    default:
      return state;
  }
}

export default locationReducer;
