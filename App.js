import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AlbumHeader } from './src/common';
import SignUpLogin from './src/components/SignUpLogin';

export default class App extends Component {
  render() {
    return (
      <View style={{flex : 1}}>
      <AlbumHeader headerText="We are here to help you..." />
    <SignUpLogin></SignUpLogin>
    </View>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
