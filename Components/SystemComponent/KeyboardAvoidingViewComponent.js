import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions
} from 'react-native';

const screenSize = Dimensions.get('window');

export default class KeyboardAvoidingComponent extends Component{
  render(){
    return (this.getMainComponent())
  }

  // 获取单个输入框
  getInputTextComponent(placeHolder){
    return <TextInput
      placeholder = {placeHolder}
      style={styles.textInputStyle}
    />
  }

  getMainComponent(){
    return <KeyboardAvoidingView
      style={styles.containerStyle}
      // height', 'position', 'padding'
      // 测试发现用position键盘弹出的时候，输入框同级的其他子试图不会移动
      // 用padding键盘弹出的时候，输入框同级的子试图会随着移动
      behavior={'padding'}

      // 如果设定behavior值为'position'，则会生成一个View作为内容容器。此属性用于指定此内容容器的样式。
      // contentContainerStyle={{}}

      // 有时候应用离屏幕顶部还有一些距离（比如状态栏等等），利用此属性来补偿修正这段距离。
      // keyboardVerticalOffset={-64}
    >
      <ScrollView
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.scrollViewContainerStyle}
      >
        <Image
          source={require('../../img/RNLogo.png')}
          style={styles.logoStyle}
        />
        {this.getInputTextComponent('请输入邮箱')}
        {this.getInputTextComponent('请输入用户名')}
        {this.getInputTextComponent('请输入密码')}
        {this.getInputTextComponent('请再次输入密码')}
      </ScrollView>
    </KeyboardAvoidingView>
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#4c69a5'
  },
  scrollViewStyle:{
    width:'100%',
    height:'100%',
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