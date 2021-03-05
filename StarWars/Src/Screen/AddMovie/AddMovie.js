import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView } from 'react-native';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Movie: {
        title: '',
        episode_id: '',
        opening_crawl: '',
        director: '',
        producer: '',
        release_date: ''
      }
    };
  }

  render() {
    const { Movie } = this.state;
    return (
      <SafeAreaView style={{ flex: 1, }}>
        <View>
          <Text> AddMovie </Text>
          <TextInput value={Movie.title} placeholder="Movie Title" />
          <TextInput value={Movie.episode_id} placeholder="Movie's episode id" />
          <TextInput value={Movie.opening_crawl} placeholder="Opening_crawl" />
          <TextInput value={Movie.director} placeholder="Movie's director" />
          <TextInput value={Movie.producer} placeholder="Movie's Producer" />
          <TextInput value={Movie.release_date} placeholder="Movie's release_date" />


        </View>
      </SafeAreaView>
    );
  }
}

export default AddMovie;
