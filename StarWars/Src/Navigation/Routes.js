import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'
import MovieList from '../Screen/MovieList/MovieList'
import AddMovie from '../Screen/AddMovie/AddMovie';

const App = () => (

    <Router>
        <Scene key="root">
            <Scene key="MovieList" component={MovieList} title="Home" initial hideNavBar={true} />
            <Scene key="AddMovie" component={AddMovie} title="About" hideNavBar={true} />
        </Scene>
    </Router>
)

export default App;