import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

export default class TouchableDemo extends Component{
  render(){
    return <View style={styles.container}>
      {/*TouchableWithoutFeedback*/}
      {this.touchableWithoutFeedbackComponent()}
      {/*TouchableHighlight*/}
      {this.touchableHighlightComponent()}
      {/*TouchableOpacity*/}
      {this.touchableOpacity()}
    </View>
  }

  // TouchableWithoutFeedback 触摸没有任何反馈，不建议直接使用
  touchableWithoutFeedbackComponent(){
    return <TouchableWithoutFeedback
      // 如果设为true，则禁止此组件的一切交互
      disabled={false}
      // 点击事件
      onPress={()=>{alert('点击了')}}
      // 长按手势
      onLongPress={()=>{alert('长按了')}}
      // 单位是毫秒，从onPressIn开始，到onLongPress被调用的延迟
      delayLongPress={5000}
      // 手指按下触发
      onPressIn={()=>{alert('手指按下')}}
      // 手指抬起触发
      onPressOut={()=>{alert('手指抬起')}}

      // 单位是毫秒，从触摸操作开始到onPressIn被调用的延迟
      delayPressIn={1000}
      // 单位是毫秒，从触摸操作结束开始到onPressOut被调用的延迟
      delayPressOut={1000}
      // 这一属性定义了按钮的外延范围
      hitSlop={{top:10,left:10,bottom:10,right:10}}
    >
      {this.touchableView('TouchableWithoutFeedback点击')}
    </TouchableWithoutFeedback>
  }

  // TouchableHighlight 当按下的时候，封装的视图的不透明度会降低，
  // 同时会有一个底层的颜色透过而被用户看到，使得视图变暗或变亮
  // TouchableWithoutFeedback的所有属性都适用
  touchableHighlightComponent(){
    return <TouchableHighlight
      // 添加手势view的样式(在view上设置无效，只能在这设置)
      style={styles.innerViewStyle}
      // 点击事件
      onPress={()=>{alert('点击了')}}
      // 点击以后控件的透明度
      activeOpacity={0.5}
      // 当底层的颜色被隐藏的时候调用
      onHideUnderlay={this.onHideUnderlay()}
      // 当底层的颜色被显示的时候调用
      onShowUnderlay={this.onShowUnderlay()}
      // 有触摸操作时显示出来的底层的颜色
      underlayColor={'#e8e8e8'}
    >
      {this.touchableView('TouchableHighlight点击')}
    </TouchableHighlight>
  }

  // 与TouchableHighlight的区别在于并没有额外的颜色变化，更适于一般场景
  // TouchableWithoutFeedback的所有属性都适用
  touchableOpacity(){
    return <TouchableOpacity
      // 点击以后控件的透明度
      activeOpacity={0.5}
      // 点击事件
      onPress={()=>{alert('点击了')}}
      // 长按手势
      onLongPress={()=>{alert('长按了')}}
    >
      {this.touchableView('TouchableOpacity点击')}
    </TouchableOpacity>
  }


  onHideUnderlay(){
    // 底层的颜色被隐藏

  }

  onShowUnderlay(){
    // 底层的颜色被显示
  }

  // 点击View
  touchableView(text){
    return   <View style={styles.innerViewStyle}>
      <Text style={styles.textStyle}>
        {text}
      </Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    flex:1
  },
  innerViewStyle:{
    width:300,
    height:40,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius:5
  },
  textStyle:{
    fontSize:18,
    color:'blue'
  }
})