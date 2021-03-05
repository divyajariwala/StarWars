import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';

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
        release_date: '',
      },
    };
  }

  render() {
    const {Movie} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <View>
          <Text> AddMovie </Text>
          <TextInput
            value={Movie.title}
            placeholder="Movie Title"
            onChangeText={(text) =>
              this.setState((prevState) => ({
                Movie: {
                  ...prevState.Movie,
                  title: text,
                },
              }))
            }
          />
          <TextInput
            value={Movie.episode_id}
            placeholder="Movie's episode id"
            onChangeText={(text) =>
              this.setState((prevState) => ({
                Movie: {
                  ...prevState.Movie,
                  episode_id: text,
                },
              }))
            }
          />
          <TextInput
            value={Movie.opening_crawl}
            placeholder="Opening_crawl"
            onChangeText={(text) =>
              this.setState((prevState) => ({
                Movie: {
                  ...prevState.Movie,
                  opening_crawl: text,
                },
              }))
            }
          />
          <TextInput
            value={Movie.director}
            placeholder="Movie's director"
            onChangeText={(text) =>
              this.setState((prevState) => ({
                Movie: {
                  ...prevState.Movie,
                  director: text,
                },
              }))
            }
          />
          <TextInput
            value={Movie.producer}
            placeholder="Movie's Producer"
            onChangeText={(text) =>
              this.setState((prevState) => ({
                Movie: {
                  ...prevState.Movie,
                  producer: text,
                },
              }))
            }
          />
          <TextInput
            value={Movie.release_date}
            placeholder="Movie's release_date"
            onChangeText={(text) =>
              this.setState((prevState) => ({
                Movie: {
                  ...prevState.Movie,
                  release_date: text,
                },
              }))
            }
          />

          <TouchableOpacity>
            <Text>Add Array</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  const {subjects} = state;
  return {subjects};
};

export default connect(mapStateToProps)(AddMovie);
