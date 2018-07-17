import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

export default class ButtonComponent extends Component{
  render(){
    return <View style={styles.containerStyle}>
      <Button
        // 按钮内显示的文本
        title={'我是按钮，可以点击'}

        // 用于给残障人士显示的文本（比如读屏器软件可能会读取这一内容）
        accessibilityLabel={'特殊文本'}

        // 文本的颜色(iOS)，或是按钮的背景色(Android)
        color={'orange'}

        // 设置为true时此按钮将不可点击
        disabled={false}

        onPress={()=>{
          alert('按钮被点击')
        }}

        // 不起作用
        style={styles.buttonStyle}
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
    backgroundColor:'blue',
    borderWidth:1,
    borderColor:'blue'
  }
})