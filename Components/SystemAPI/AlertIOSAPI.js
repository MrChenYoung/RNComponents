import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  AlertIOS,
  TouchableHighlight,
  Dimensions
} from 'react-native'

const screenWidth = Dimensions.get('window').width;
const buttonWidth = screenWidth - 20;
const buttonHeight = 40;

export default class TestComponent extends Component{
  constructor (){
    super();

    this.state={
      alertInputText:'',
      alertSelectBtnText:''
    }
  }

  render(){
    return <View style={styles.containerStyle}>
      {this.buttonWithTitle('AlertView示例',()=> {this.showAlertViewIOS()})}
      <Text>点击了'{this.state.alertSelectBtnText}'按钮</Text>
      {/*显示带输入框的alert*/}
      {this.buttonWithTitle('带输入框的AlertView示例', ()=> {this.showPromptAlertIOS()})}
      <Text>点击了'{this.state.alertSelectBtnText}'按钮</Text>
      <Text>输入了'{this.state.alertInputText}'文本</Text>
    </View>
  }

  // 显示普通alert
  showAlertViewIOS(){
    AlertIOS.alert(
      '提示',
      '提示文本信息',
      [
        {
          text:'取消',
          onPress: ()=> {
            this.setState({
              alertSelectBtnText:'取消'
            })
          }},
        {text:'确定', onPress: ()=> {
            this.setState({
              alertSelectBtnText:'确定'
            })
          }}
      ]
    )
  }

  // 显示带输入框的alertView
  showPromptAlertIOS(){
    // 参数1: 标题
    // 参数2: 提示信息
    // 参数3： 按钮数组
    // 参数4： type:string-进行设置输入框的类型配置可选值有'default','login-password',plain-text','secure-text'
    // 参数5: defaultValue:string  该为需要输入信息的默认值(textfield)
    AlertIOS.prompt('提示','输入文字',[{text:'取消',onPress: ()=> {
        this.setState({
          alertSelectBtnText:'取消',
          alertInputText:''
        })
      }},{text:'确定',onPress: (inputText)=> {
        this.setState({
          alertSelectBtnText:'确定',
          alertInputText:inputText
        })
      }}],
      'login-password')
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
  },
  cancelButtonStyle:{
    color:'red',
    backgroundColor:'red',
    fontSize:14
  },
  textStyle:{
    fontSize:18,
    color:'blue'
  }
})