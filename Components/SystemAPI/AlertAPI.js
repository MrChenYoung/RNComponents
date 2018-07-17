import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableHighlight,
  Dimensions
} from 'react-native'

const screenWidth = Dimensions.get('window').width;
const buttonWidth = screenWidth - 20;
const buttonHeight = 40;

// 在iOS上你可以指定任意数量的按钮。每个按钮还都可以指定自己的样式，此外还可以指定提示的类别。参阅AlertIOS来了解更多细节
// 在Android上最多能指定三个按钮，这三个按钮分别具有“中间态”、“消极态”和“积极态”的概念
// 在Android上默认情况下点击提示框的外面会自动取消提示框。你可以提供一个额外参数来处理这一事件：{ onDismiss: () => {} }。
//
// 还有另外一个参数也可以用来阻止提示框被自动取消，即{ cancelable: false }
export default class TestComponent extends Component{
  constructor (){
    super();

    this.state={
      alertSelectBtnText:''
    }
  }

  render(){
    return <View style={styles.containerStyle}>

      {/*显示alertView*/}
      {this.buttonWithTitle('AlertView示例',()=> {this.showNomalAlert()})}
      <Text>点击了'{this.state.alertSelectBtnText}'按钮</Text>
    </View>
  }

  // 显示普通alert
  showNomalAlert(){
    Alert.alert(
      '提示',
      '弹框标题',
      [{text:'取消',onPress: ()=> {
        this.setState({
          alertSelectBtnText:'取消'
        })
      }},{text:'确定',onPress: ()=> {
        this.setState({
          alertSelectBtnText:'确定'
        })
      }}],
      {cancelable: false},
    )
  }

  // 获取按钮
  buttonWithTitle(title,callBack){
    return <View style={styles.buttonStyle}>
      <TouchableHighlight
        onPress={callBack}
        underlayColor={'#e8e8e8'}
        activeOpacity={0.5}
      >
        <View style={styles.buttonInnerStyle}>
          <Text style={styles.buttonTextStyle}>{title}</Text>
        </View>
      </TouchableHighlight>
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
    width:buttonWidth,
    height:buttonHeight,
    marginTop:10,
    marginBottom:10
  },
  buttonInnerStyle:{
    height:buttonHeight,
    borderWidth:1,
    borderColor:'blue',
    borderRadius:6,
    justifyContent:'center',
    alignItems:'center',
  },
  buttonTextStyle:{
    fontSize:16,
    color:'red'
  }
})