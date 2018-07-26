import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import HYButton from '../CustomComponent/HYButton';
import Utility from '../UtilityTools/Utility';

export default class TestComponent extends Component{
  constructor (){
    super();

    this.state = {
      number:0
    }
  }

  render(){
    return <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>
        {this.state.number}
      </Text>
      {this.getButton('延迟执行',()=>this.setTimeout())}
      {this.getButton('开始计时',()=>this.startTimeCount())}
      {this.getButton('停止计时',()=>this.stopTimeCount())}
      {this.getButton('清零',()=>this.clearNumber())}
    </View>
  }

  getButton(title,onPress){
    let enable = true;
    if (this.state.number !== 0){
      enable = false;
    }

    return <HYButton
      title={title}
      width={Utility.screenWidth - 20}
      extendStyle={{ marginTop: 10}}
      titleColor={'white'}
      bgColor={'orange'}
      enabled={(title === '清零' || title === '停止计时') ? true : enable}
      onPress={()=>{
        onPress()
      }}
    />
  }

  // 延迟执行
  setTimeout(){
    this.timeOutTimer = setTimeout(()=>{
      this.setState({
        number:this.state.number + 100
      })
    },2000)
  }

  // 开始计时
  startTimeCount(){
    this.countTimer = setInterval(()=>{
      this.setState({
        number:this.state.number + 1
      })
    },1000)
  }

  // 停止计时
  stopTimeCount(){
    clearInterval(this.countTimer);
  }

  // 清0
  clearNumber(){
    this.setState({
      number:0
    })
  }

  componentWillUnmount () {
    this.timeOutTimer && clearTimeout(this.timeOutTimer);
    this.countTimer && clearInterval(this.countTimer);
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    // justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{
    fontSize:30,
    color:'blue',
    marginTop:20
  }
})