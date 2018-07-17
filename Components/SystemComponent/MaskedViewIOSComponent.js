import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  MaskedViewIOS
} from 'react-native';

export default class TestComponent extends Component{
  render(){
    return  <MaskedViewIOS
      style={{ flex: 1, flexDirection: 'row', height: '100%' }}
      maskElement={
        <View style={{
          // Transparent background because mask is based off alpha channel.
          backgroundColor: 'transparent',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{
            fontSize: 60,
            color: 'black',
            fontWeight: 'bold',
          }}>
            Basic Mask Hello World
          </Text>
        </View>
      }
    >
      { /* Shows behind the mask, you can put anything here, such as an image */ }
      <View style={{ flex: 1, height: '100%', backgroundColor: 'red' }} />
      <View style={{ flex: 1, height: '100%', backgroundColor: 'green' }} />
      <View style={{ flex: 1, height: '100%', backgroundColor: 'blue' }} />
    </MaskedViewIOS>
  }
}