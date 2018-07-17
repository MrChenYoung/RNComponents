import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Button,
  Platform
} from 'react-native';

// 颜色
const colors = ['red','green','blue'];

export default class ActivityIndicatorCom extends Component{
  constructor (){
    super();

    this.state={
      loading:false,
      colorIndex:0
    }
  }

  render(){
    return <View style={styles.containnerStyle}>
      <ActivityIndicator
        // 是否要显示指示器，默认为true，表示显示。
        animating={(Platform.OS === 'ios' ? this.state.loading : true)}
        // animating={true}

        // 滚轮的前景颜色（默认为灰色）
        color={colors[this.state.colorIndex]}

        // 在没有动画的时候，是否要隐藏指示器（默认为true）
        // hidesWhenStopped={false}

        // 指示器的大小。small的高度为20，large为36
        size={'large'}
      />
      {this.getExtensionComponent()}
      <View style={{height:10}}/>
      <Button
        title='改变颜色'
        onPress={()=>{
          let colIndex = (this.state.colorIndex + 1)%colors.length;
          this.setState({
            colorIndex:colIndex
          })
        }}
      />
    </View>
  }

  getExtensionComponent(){
    if (Platform.OS === 'ios'){
      return <Button
        title= {this.state.loading ? '停止加载' : '开始加载'}
        onPress={()=>{
          this.setState({
            loading:!this.state.loading
          })
        }}
      />
    } else {
      return null
    }
  }
}

const styles = StyleSheet.create({
  containnerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})