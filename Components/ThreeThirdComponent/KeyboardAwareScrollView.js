import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
  TextInput
} from 'react-native';

import { KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const screenSize = Dimensions.get('window');

export default class TestComponent extends Component{
  render(){
    return <KeyboardAwareScrollView
      style={styles.scrollViewStyle}
      contentContainerStyle={styles.scrollViewContainerStyle}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
      <Image
        source={require('../../img/RNLogo.png')}
        style={styles.logoStyle}
      />
      {this.getInputTextComponent('请输入邮箱')}
      {this.getInputTextComponent('请输入用户名')}
      {this.getInputTextComponent('请输入密码')}
      {this.getInputTextComponent('请再次输入密码')}
    </KeyboardAwareScrollView>
  }

  // 获取单个输入框
  getInputTextComponent(placeHolder){
    return <TextInput
      placeholder = {placeHolder}
      style={styles.textInputStyle}
    />
  }
}

const styles = StyleSheet.create({
  scrollViewStyle:{
    width:'100%',
    height:'100%',
    backgroundColor:'#4c69a5'
  },
  scrollViewContainerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  logoStyle:{
    width:screenSize.width * 0.5,
    height:screenSize.width * 0.5,
    resizeMode:'contain',

  },
  textInputStyle:{
    height:50,
    backgroundColor:'#fff',
    width:screenSize.width - 30,
    borderRadius:3,
    marginTop:10,
    padding:5
  }
})
