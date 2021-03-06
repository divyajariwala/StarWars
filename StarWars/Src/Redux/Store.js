import { createStore, combineReducers } from 'redux';
import moviereducer from './Reducer/moviereducer';

const rootReducer = combineReducers({ movie: moviereducer });

// const configureStore = () => {
//   return createStore(rootReducer);
// };
const store = createStore(rootReducer)
export default store;