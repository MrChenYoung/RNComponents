import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class TestComponent extends Component{
  render(){
    return <View style={styles.containerStyle}>
      <Text
        style={styles.textStyle}

        // 指定字体是否随着给定样式的限制而自动缩放
        adjustsFontSizeToFit={true}

        // 控制字体是否要根据系统的“字体大小”辅助选项来进行缩放
        allowFontScaling={true}

        // 当adjustsFontSizeToFit开启时，指定最小的缩放比（即不能低于这个值）。可设定的值为0.01 - 1.0
        // iOS
        minimumFontScale={0.5}

        // 用来当文本过长的时候裁剪文本。包括折叠产生的换行在内，总的行数不会超过这个属性的限制
        numberOfLines={3}

        // 当挂载或者布局变化以后调用
        onLayout={({nativeEvent: {layout: {x, y, width, height}}})=>{

        }}

        // 当文本被长按以后调用此回调函数
        onLongPress={()=>{
          alert('长按')
        }}

        // 当文本被点击以后调用此回调函数
        onPress={()=>{
          alert('点击')
        }}

        // 决定用户是否可以长按选择文本，以便复制和粘贴
        // 设置为false以后onLongPress方法照常响应，只是没有复制粘贴选项,默认是false
        selectable={true}
      >
        测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
      </Text>
      <Text style={{fontSize:16,color:'blue'}}>
        Hello world!
        <Text>
          {/*内层继承外层样式*/}
          Inner text!
        </Text>
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
    // fontSize:18,
    color:'white',
    width:100,
    height:50,
    backgroundColor:'red',
    // 指定字体的粗细。大多数字体都支持'normal'和'bold'值。并非所有字体都支持所有的数字值。如果某个值不支持，则会自动选择最接近的值
    // ('normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900')
    fontWeight:'900',
    lineHeight:20,
  },
})