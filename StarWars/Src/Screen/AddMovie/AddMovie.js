import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import { addmovie } from '../../Redux/Action/movieaction';
import CommonStyle from '../../Constant/Commonstyle';
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
  storeMovie = () => {
    this.props.addPickupLocationActions({})
  }
  render() {
    const { Movie } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={CommonStyle.container}>
          <Text style={{
            fontSize: 22,
            fontWeight: 'bold'
          }}> AddMovie </Text>
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
            style={style.textinputstyle}
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
            style={style.textinputstyle}
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
            style={style.textinputstyle}
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
            style={style.textinputstyle}
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
            style={style.textinputstyle}
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
            style={style.textinputstyle}
          />

          <TouchableOpacity onPress={() => this.storeMovie()} style={style.buttonStyle}>
            <Text>Add Movie</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const style = StyleSheet.create({
  textinputstyle: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: Platform.OS = "ios" ? 20 : null
  },
  buttonStyle: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS = "ios" ? 20 : 20,
    width: '50%'
  }
})


function mapDispatchToProps(dispatch) {
  return {
    addPickupLocationActions: (movie) => dispatch(addmovie(movie)),

  };
}

export default connect(null, mapDispatchToProps)(AddMovie);
