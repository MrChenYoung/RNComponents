import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  DeviceEventEmitter
} from 'react-native';

export default class DeviceEventEmitterOne extends Component{
  constructor (props){
    super(props);

    this.state={
      msg:''
    }
  }

  render(){
    return <View style={styles.containerStyle}>
      <TextInput
        style={styles.inputStyle}
        placeholder='请输入要发送的通知内容'
        onChangeText={(msg)=>{
          this.setState({
            msg:msg
          })
        }}
      />
      <Button
        title='发送通知'
        onPress={()=>DeviceEventEmitter.emit('sendMsg',this.state.msg)}
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
  inputStyle:{
    borderWidth:0.5,
    borderColor:'#FF8C00',
    borderRadius:5,
    padding:3,
    height:30
  }
})