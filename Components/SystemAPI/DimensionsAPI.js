import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';

const {height,width} = Dimensions.get('window');

export default class TestComponent extends Component{
  render(){
    return <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>
        屏幕宽度:{width}
      </Text>
      <Text style={styles.textStyle}>
        屏幕高度:{height}
      </Text>
    </View>
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{
    fontSize:18,
    color:'blue'
  }
})