import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  BackAndroid,
  ToastAndroid,
  BackHandler // 新的API，和BackAndroid用法一样，只是新增加了对tvOS的支持
} from 'react-native';
import HYButton from '../CustomComponent/HYButton';

let hardwareBackPressCount = 0;

export default class TestComponent extends Component{
  render(){
    return <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>
        点击返回键查看效果
      </Text>
      <HYButton
        extendStyle={{ marginTop: 10}}
        width={80}
        title={'退出APP'}
        onPress={()=>{
          // 静态方法 退出应用
          BackAndroid.exitApp();
        }}
      />
    </View>
  }

  componentDidMount () {
    // 添加返回按钮监听
    // 监听硬件的back键操作。如果没有任何监听函数，或者监听函数的返回值不是true，则会调用默认的back键功能来退出应用
    BackAndroid.addEventListener('hardwareBackpress',()=>{
      if (hardwareBackPressCount === 0){
        hardwareBackPressCount ++;
        ToastAndroid.show('第一次点击返回按钮',ToastAndroid.SHORT);
        return true;
      } else {
        return false;
      }
    })
  }

  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackpress');
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