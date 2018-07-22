import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Clipboard,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native';

export default class TestComponent extends Component{
  constructor (){
    super();

    this.state = {
      toClipText:'',
      clipBoardText:''
    }
  }

  componentWillMount () {
    // 清空粘贴板内容
    Clipboard.setString(this.state.clipBoardText);
  }

  render(){
    return <View style={styles.containerStyle}>
      <TextInput
        ref={'myTextInput'}
        style={styles.textInputStyle}
        placeholder='请输入要复制的文本'
        onChangeText={(newText)=>{
          this.setState({
            toClipText:newText
          })
        }}
      />
      {this.getButton('复制并粘贴文本',()=>{

        // 收起键盘
        this.refs.myTextInput.blur();

        // 复制文本到粘贴板
        Clipboard.setString(this.state.toClipText)

        this._getClipboardContent()
      })}
      <Text style={styles.textStyle}>
        {this.state.clipBoardText}
      </Text>
    </View>
  }

  getButton(title,touchFunc){
    return <TouchableHighlight
      style={styles.buttonViewStyle}
      onPress={()=>touchFunc()}
    >
      <View>
        <Text style={{fontSize:16,color:'white'}}>
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  }

  // 获取粘贴板上的内容
  async _getClipboardContent(){
    let content = await Clipboard.getString();
    this.setState({
      clipBoardText:content
    })
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    backgroundColor:'white',
    // justifyContent:'center',
    alignItems:'center'
  },
  textInputStyle:{
    width:'80%',
    height:40,
    borderWidth:1,
    borderColor:'#d8d8d8',
    borderRadius:5,
    padding:5,
    marginTop:20
  },
  buttonViewStyle:{
    width:'80%',
    height:30,
    backgroundColor:'#1E90FF',
    borderRadius:5,
    marginTop:20,
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{
    fontSize:18,
    color:'blue'
  }
})