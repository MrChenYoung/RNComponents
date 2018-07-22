import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  ToastAndroid
} from 'react-native';

export default class TestComponent extends Component{
  render(){
    return <View style={styles.containerStyle}>
      <Button
        title='短时间Toast'
        onPress={()=>{
          ToastAndroid.show('短时间Toast',ToastAndroid.SHORT);
        }}
      />
      <View style={{width:'100%',height:20}}/>
      <Button
        title='长时间Toast'
        onPress={()=>{
          ToastAndroid.show('长时间Toast',ToastAndroid.LONG);
        }}
      />
      <View style={{width:'100%',height:20}}/>
      <Button
        title='短时间GravityToast'
        onPress={()=>{
          // ToastAndroid.showWithGravity('短时间GravityToast',ToastAndroid.SHORT,ToastAndroid.TOP);
          // ToastAndroid.showWithGravity('短时间GravityToast',ToastAndroid.SHORT,ToastAndroid.BOTTOM);
          ToastAndroid.showWithGravity('短时间GravityToast',ToastAndroid.SHORT,ToastAndroid.CENTER);
        }}

      />
    </View>
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonStyle:{
    marginTop:20
  }
})