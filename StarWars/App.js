// import React from 'react'
// import { Router, Scene } from 'react-native-router-flux'
// import MovieList from './Src/Screen/MovieList/MovieList';
// import AddMovie from './Src/Screen/AddMovie/AddMovie';


// const App = () => (
//   <Router>
//     <Scene key="root">
//       <Scene key="MovieList" component={MovieList} title="Home" initial={true} />
//       <Scene key="AddMovie" component={AddMovie} title="About" />
//     </Scene>
//   </Router>
// )
// export default App;
import React from 'react'
import { View, Text } from 'react-native'
import Router from './Src/Navigation/Routes';

const App = () => {
  return (
    <Router />
  )
}

export default App

