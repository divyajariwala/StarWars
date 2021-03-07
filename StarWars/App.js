import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Router from './Src/Navigation/Routes';
import {Provider} from 'react-redux';
import store from './Src/Redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar />
      <Router />
    </Provider>
  );
};

export default App;
