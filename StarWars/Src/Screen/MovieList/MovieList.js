import React, { Component } from 'react';
import { View, Text, SafeAreaView, FlatList, Platform, UIManager, LayoutAnimation, TouchableOpacity } from 'react-native';
import ListView from '../../Components/ListView/ListView';
import EmptyList from '../../Components/EmptyList/EmptyList';
import * as  List from '../../Service/Movies';
import axios from 'axios';
import { Actions } from 'react-native-router-flux'

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      spinner: false,
      expanded: false
    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.getMovieList = this.getMovieList.bind(this);

  }
  componentDidMount() {
    this.getMovieList()
  }
  getMovieList = () => {
    axios.get('https://swapi.dev/api/films/')
      .then(response => {
        console.log(response);
        console.log(response.data.results);
        console.log(response.data.results[0].title);
        this.setState({
          movieList: response.data.results
        })
        console.log("List", this.state.movieList);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    // const array = [...this.state.movieList];
    // array.map((value, placeindex) =>
    //   placeindex === index
    //     ? (array[placeindex]['isExpanded'] =
    //       !array[placeindex]['isExpanded'])
    //     : (array[placeindex]['isExpanded'] = false),
    // );
    this.setState({ expanded: !this.state.expanded });

  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'flex-start' }}>
              <Text> MovieList </Text>
            </View>
            <View style={{ justifyContent: 'flex-end' }}>
              <TouchableOpacity onPress={() => { Actions.jump('AddMovie') }}>
                <Text>Add Moview Details </Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={this.state.movieList}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(data, item) => {
              return (
                <ListView
                  data={data}
                  expanded={this.state.expanded}
                  changeLayout={() => this.changeLayout(data.item.episode_id)}
                />
              );
            }}
            ListEmptyComponent={() => {
              return (
                <EmptyList />
              )
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default MovieList;
