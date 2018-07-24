import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Vibration
} from 'react-native';
import HYButton from '../CustomComponent/HYButton';

export default class VibrationAPIDemo extends Component {
  constructor (){
    super();

    this.state = {
      vibration: false
    }
  }

  render() {
    return <View style={styles.welcome}>
      <HYButton
        width={80}
        title={'开始震动'}
        onPress={()=>{
         this.startVibration()
        }}
        extendStyle={{marginBottom:10}}
        enabled={!this.state.vibration}
      />
      <HYButton
        width={80}
        title={'停止震动'}
        onPress={()=>{
          this.stopVibration()
        }}
        extendStyle={{marginBottom:10}}
        enabled={this.state.vibration}
      />
    </View>
  }

  componentWillUnmount () {
    this.stopVibration()
  }

  // 开始震动
  startVibration(){
    // 参数1 : pattern参数为一个不定长的数组。在Andriod上，数组第一个元素表示开始震动前的等待时间，然后是震动持续时长和等待时长的交替，例如[0, 500, 1000, 500]表示立刻开始震动500ms，然后等待1000ms，再震动500ms；但在iOS上震动时长是固定的，所以从数组第二个元素开始都是表示震动的间隔时长
    // 参数2 : repeat参数为布尔类型，表示是否持续循环震动。为true时只有调用cancel才会停止
    Vibration.vibrate([2000, 500, 1000, 500],true)

    this.setState({
      vibration:true
    })
  }

  // 停止震动
  stopVibration(){
    Vibration.cancel()

    this.setState({
      vibration:false
    })
  }
}

const styles = StyleSheet.create({
  welcome: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});