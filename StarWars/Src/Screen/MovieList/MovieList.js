import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Platform,
  UIManager,
  LayoutAnimation,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListView from '../../Components/ListView/ListView';
import EmptyList from '../../Components/EmptyList/EmptyList';
import axios from 'axios';
import {Actions} from 'react-native-router-flux';
import CommonStyle from '../../Constant/Commonstyle';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      spinner: false,
      expanded: false,
      isFetching: false,
      search: '',
      filterData: [],
    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    // this.getMovieList = this.getMovieList.bind(this);
  }
  async componentDidMount() {
    const value = await AsyncStorage.getItem('movies');
    if (value === null) {
      this.getMovieList();
    } else {
      const parseMovie = JSON.parse(value);
      this.setState({
        movieList: parseMovie,
        filterData: parseMovie,
      });
    }
  }
  getMovieList = () => {
    axios
      .get('https://swapi.dev/api/films/')
      .then(async (response) => {
        console.log(response);
        console.log(response.data.results);
        console.log(response.data.results[0].title);
        this.setState({
          movieList: response.data.results,
          filterData: response.data.results,
          isFetching: false,
        });
        console.log('List', this.state.movieList);
        await AsyncStorage.removeItem('movies');
        this.setDataInAsync(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  setDataInAsync = async (MovieList) => {
    console.log('MovieList', MovieList);
    try {
      const value = await AsyncStorage.getItem('movies');
      console.log('value', value);
      if (value !== null) {
        const parseMovie = JSON.parse(value);
        console.log(parseMovie);
        parseMovie.push(MovieList);
        const jsonMovie = JSON.stringify(parseMovie);
        await AsyncStorage.setItem('movies', jsonMovie);
        console.log('Inside if ');
      } else {
        const jsonMovie = JSON.stringify(MovieList);
        await AsyncStorage.setItem('movies', jsonMovie);
        console.log('Inside else ');
      }
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    // const array = [...this.state.movieList];
    // array.map((value, placeindex) =>
    //   placeindex === index
    //     ? (array[placeindex]['isExpanded'] =
    //       !array[placeindex]['isExpanded'])
    //     : (array[placeindex]['isExpanded'] = false),
    // );
    this.setState({expanded: !this.state.expanded});
  };
  onRefresh() {
    this.setState({isFetching: true});
    this.getMovieList();
  }
  searchFilterFunction = (text) => {
    if (text) {
      const newData = this.state.movieList.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      this.setState({
        filterData: newData,
        search: text,
      });
      console.log('Serach', newData);
    } else {
      this.setState({
        // filterData: this.state.movieList,
        search: text,
      });
    }
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={CommonStyle.container}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{justifyContent: 'flex-start'}}>
              <Text style={Style.Heading}> MovieList </Text>
            </View>
            <View style={{justifyContent: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => {
                  Actions.jump('AddMovie');
                }}>
                <Text style={Style.Heading}>Add </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TextInput
            style={Style.textInputStyle}
            onChangeText={(text) => this.searchFilterFunction(text)}
            value={this.state.search}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />
          <FlatList
            data={this.state.filterData}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isFetching}
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
              return <EmptyList />;
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const Style = StyleSheet.create({
  Heading: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});

export default MovieList;
