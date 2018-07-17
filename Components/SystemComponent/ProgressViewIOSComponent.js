import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Picker,
  ProgressViewIOS
} from 'react-native';

export default class TestComponent extends Component{
  render(){
    return <View style={styles.containerStyle}>
      <ProgressViewIOS
        style={styles.progressStyle}

        // 当前的进度值（0到1之间）
        progress={0.3}

        // 进度条的样式 default', 'bar'
        progressViewStyle={'bar'}

        // 进度条本身染上的颜色
        progressTintColor={'green'}

        // 进度条轨道染上的颜色
        trackTintColor={'blue'}

        // 一个可以拉伸的图片，用于显示进度条
        // progressImage={require()}

        // 一个可拉伸的图片，用于显示进度条后面的轨道
        // trackImage={require('123')}
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
  progressStyle:{
    width:150,
    height:40
  },
  textStyle:{
    fontSize:18,
    color:'blue'
  }
})