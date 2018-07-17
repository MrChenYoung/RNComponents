import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Switch
} from 'react-native';

export default class TestComponent extends Component{
  constructor (){
    super();

    this.state={
      switchOn:false
    }
  }

  render(){
    return <View style={styles.containerStyle}>
      <Switch
        // 如果为true，这个组件不能进行交互
        disabled={false}

        // 表示此开关是否打开。默认为false（关闭状态）
        value={this.state.switchOn}

        // 当值改变的时候调用此回调函数，参数为新的值
        onValueChange={(newValue)=>{
          this.setState({
            switchOn:newValue
          })
        }}

        // 开启状态时的背景颜色
        onTintColor={'blue'}

        // 开关上圆形按钮的背景颜色
        thumbTintColor={'red'}

        // 关闭状态时的边框颜色(iOS)或背景颜色(Android)
        tintColor={'green'}
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
  textStyle:{
    fontSize:18,
    color:'blue'
  }
})