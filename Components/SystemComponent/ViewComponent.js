import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class TestComponent extends Component{
  render(){
    return <View style={styles.containerStyle}>
      <View
        style={styles.innerStyle}

        // 设置当用户与此元素交互时，“读屏器”（对视力障碍人士的辅助功能）阅读的文字
        accessibilityLabel={'读屏器文字'}

        // 当此属性为true时，表示此视图时一个启用了无障碍功能的元素。默认情况下，所有可触摸操作的元素都是无障碍功能元素
        accessible={true}

        // 当accessible为true时，如果用户对一个已选中的无障碍元素做了一个双击手势时，系统会调用此函数
        onAccessibilityTap={()=>{
          alert('123')
        }}

        // 当组件挂载或者布局变化的时候调用
        onLayout={({nativeEvent: { layout: {x, y, width, height}}})=>{
          alert('view加载完成:' + '\n' + 'x:'+ x + ' '+'y:'+y + ' ' + 'width:' + width + ' ' + 'height:'+height);
        }}

        // 当accessible为true时，如果用户做了一个双指轻触(Magic tap)手势，系统会调用此函数
        onMagicTap={()=>{
          
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
  innerStyle:{
    width:150,
    height:100,
    backgroundColor:'blue',
    borderColor:'red',
    borderWidth:5,
    // 边框线的风格,这个和CSS样式一样的enum('solid', 'dotted', 'dashed')
    borderStyle:'dashed',
    // 透明度
    opacity:0.8,
    // 设置内容超过容器显示还是隐藏enum('visible', 'hidden')
    overflow:'visible',
    // 高度，设置Z轴，可以产生立体效果
    elevation:100,
    borderTopLeftRadius:5,
    borderTopRightRadius:10,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:30
  }

})