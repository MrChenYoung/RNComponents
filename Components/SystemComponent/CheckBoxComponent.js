import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  CheckBox,
  Text
} from 'react-native';

export default class CheckBoxComponent extends Component{
  constructor (){
    super();

    this.state={
      selectCheckBox:false
    }
  }

  render(){
    return <View style={styles.containerStyle}>
      <CheckBox
        style={styles.checkBoxStyle}

        // 如果为true，这个组件不能进行交互,默认为false
        disabled={false}

        // Used in case the props change removes the component.
        onChange={()=>{
          alert('改变了')
        }}

        // 当值改变的时候调用此回调函数，参数为新的值
        onValueChange={(value)=>{
          alert('值改变了'+value)
        }}

        // 表示CheckBox是否打开。默认为false（关闭状态）
        value={this.state.selectCheckBox}

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
  textStyle:{
    fontSize:16,
    color:'blue'
  },
  checkBoxStyle:{

  }
})