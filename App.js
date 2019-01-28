import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RouterComponent from './src/router';
import reducers from './src/reducers';

export default class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const firebase = require('firebase');
    var config = {
      apiKey: "AIzaSyDprW7wQYPkwJ94TcVlnltWCoau2ce2z9g",
      authDomain: "yf-project-7791c.firebaseapp.com",
      databaseURL: "https://yf-project-7791c.firebaseio.com",
      projectId: "yf-project-7791c",
      storageBucket: "yf-project-7791c.appspot.com",
      messagingSenderId: "950142044630"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    )
  }
}
