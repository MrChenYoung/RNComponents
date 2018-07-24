import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class TestComponent extends Component{
  render(){
    return <View style={styles.containerStyle}>
      {/*create(obj:{[key:string]:any}) */}
      <Text style={styles.textStyle}>
        边框由StyleSheet创建的分割线:
      </Text>
      <View style={styles.cuttingLineStyle}/>
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
  },
  cuttingLineStyle:{
    height:40,
    width:200,
    borderBottomColor:'red',
    // 该用来定义当前平台最细的宽度。该属性用来设置边框或者两个组件之间的分割线
    // 该会根据当前平台信息，自动转换成一根很细的线
    borderBottomWidth:StyleSheet.hairlineWidth
  }
})