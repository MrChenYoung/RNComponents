import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  PixelRatio
} from 'react-native';

export default class TestComponent extends Component{
  render(){
    return <View style={styles.containerStyle}>
      <Text>
        当前设备像素密度：
      </Text>
      <Text style={styles.textStyle}>
        {this.getPixratio()}
      </Text>
      <Text>
        根据屏幕像素密度变换大小View:
      </Text>
      <View style={{backgroundColor:'red', width:this.getPixSize(50),height:this.getPixSize(50)}}/>
    </View>
  }

  // 获取像素密度
  getPixratio(){
    // 返回设备的像素密度
    // 1 : mdpi Android 设备 (160 dpi)
    // 1.5: hdpi Android 设备 (240 dpi)
    // 2 :     iPhone 4, 4S iPhone 5, 5c, 5s, iPhone 6, xhdpi Android 设备 (320 dpi)
    // 3 :     iPhone 6 plus, xxhdpi Android 设备 (480 dpi)
    // 3.5 : Nexus 6
    return PixelRatio.get()
  }

  // 将一个布局尺寸(dp)转换为像素尺寸(px)
  getPixSize(number){
    return PixelRatio.getPixelSizeForLayoutSize(number)
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