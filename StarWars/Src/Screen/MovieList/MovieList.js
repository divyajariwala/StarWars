import React, { Component } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import ListView from '../../Components/ListView/ListView';
import EmptyList from '../../Components/EmptyList/EmptyList';
import * as  List from '../../Service/Movies';
import axios from 'axios';

const data = [{
  sender: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ', reply: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
}, {
  sender: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ', reply: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
}, {
  sender: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ', reply: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
}, {
  sender: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ', reply: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
}, {
  sender: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ', reply: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
}]

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      spinner: false
    };
  }
  componentDidMount() {

    axios.get('https://swapi.dev/api/films/')
      .then(response => {
        console.log(response);
        console.log(response.data.results);
        this.state({
          movieList: response.data.results
        })
        console.log("List", this.state.movieList);
      })
      .catch(function (error) {
        console.log(error);
      })


  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text> MovieList </Text>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}

            renderItem={(data, item) => {
              return (
                <ListView
                  data={data}



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
