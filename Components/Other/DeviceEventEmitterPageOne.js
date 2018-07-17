import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  DeviceEventEmitter
} from 'react-native';

export default class DeviceEventEmitterOne extends Component{
  constructor (props){
    super(props);

    this.state={
      msg:'暂无消息'
    }
  }
  render(){
    return <View style={styles.containerStyle}>
      <Button
        title='下一页'
        onPress={()=>this.props.navigation.navigate('DeviceEventEmitterTwo')}
      />
      <Text>
        {this.state.msg}
      </Text>
    </View>
  }

  componentWillMount () {
    // 监听通知
    this.emitter = DeviceEventEmitter.addListener('sendMsg',(msg)=>{
      alert('收到通知,返回上个页面看看吧!')
      // 接受到通知
      this.setState({
        msg:'接受到通知:' + msg
      })
    })
  }

  componentWillUnmount () {
    // 取消监听通知
    this.emitter.remove();
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
