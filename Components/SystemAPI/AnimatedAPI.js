import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  Easing,
} from 'react-native';

import PropTypes from 'prop-types';

export default class AnimatedDemo extends Component{
  constructor (){
    super();

    let defaultValue = new Animated.Value(0);
    this.state = {
      viewOpacity: defaultValue,
      viewRotation:defaultValue,
      textSize:defaultValue
    }
  }

  render(){
    return <Animated.View
      style={styles.containerStyle}>
      <Animated.View
        style={[
          {width:200,height:50,backgroundColor:'red'},
          { opacity: this.state.viewOpacity,
            transform:[{
            rotateZ:this.state.viewRotation.interpolate({
              inputRange:[0,1],
              outputRange:['0deg','360deg']
              })
            }]
          }
        ]}
      >

      </Animated.View>
    </Animated.View>
  }

  componentDidMount () {
    Animated.parallel(['viewOpacity','viewRotation'].map(property=>{
      return Animated.timing(this.state[property],{
        toValue:1,
        duration:1000,
        easing:Easing.linear
      })
    })).start();
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  }
})
