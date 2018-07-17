import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  AppState
} from 'react-native';

export default class TestComponent extends Component{
  constructor (){
    super();

    this.state = {
      currentAppState:AppState.currentState
    }
  }

  componentDidMount () {
    // 添加一个监听函数，用于监听应用状态的变化。type参数应填change
    AppState.addEventListener('change',()=>this.handleAppStateChange.bind(this));
  }

  componentWillUnmount () {
    // 移除一个监听函数。type参数应填change
    AppState.removeEventListener('change',()=>this.handleAppStateChange.bind(this));
  }

  // 收到appstate改变处理
  handleAppStateChange(newAppState){
    alert(newAppState);
    this.setState({
      currentAppState:newAppState
    })
  }

  render(){
    return <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>
        AppState is:{this.state.currentAppState}
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
    fontSize:18,
    color:'blue'
  }
})