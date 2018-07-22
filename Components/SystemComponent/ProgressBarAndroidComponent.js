import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Picker,
  ProgressBarAndroid
} from 'react-native';

const Datas = [
  '选择Progress样式',
  'Horizontal',
  'Small',
  'Large',
  'Inverse',
  'SmallInverse',
  'LargeInverse'
]

const Colors = [
  '选择颜色',
  'gray',
  'red',
  'green',
  'blue'
];


export default class ProgressBarComponent extends Component{
  constructor (){
    super();

    this.state = {
      progressColor:''
    }
  }

  render(){
    return <View style={styles.containerStyle}>
      {this.getItems('Horizontal')}
      {this.getItems('Small')}
      {this.getItems('Large')}
      {this.getItems('Inverse')}
      {this.getItems('SmallInverse')}
      {this.getItems('LargeInverse')}
      <Picker
        style={styles.pickerStyle}
        mode={'dropdown'}
        onValueChange={(selectValue,selectIndex)=>{
          this.setState({
            progressColor:selectValue
          })
        }}
      >
        {this.getPickerItem()}
      </Picker>

    </View>
  }

  // 获取pickerItem
  getPickerItem(){
    let items = [];
    for (let i = 0; i < Colors.length; i++) {
      items.push(
        <Picker.Item label={Colors[i]} value={Colors[i]} />
      )
    }

    return items;
  }

  //
  getItems(params){
    return <View
      style={styles.itemContainerStyle}
    >
      <Text style={styles.textStyle}>
        {params}'样式':
      </Text>
      {this.getProgressBar(params)}
    </View>
  }

  // 获取指定样式的progressBar
  getProgressBar(model){
    let indeter = true;
    let progress = 0.1;
    if (model === 'Horizontal'){
      indeter = false;
      progress = 0.5;
    }else if (model === 'Large'){
      progress = 0.2;
    }

    return <ProgressBarAndroid
      style={{width:50,height:30}}
      // 进度条的样式
      // Horizontal、Small、Large、Inverse、SmallInverse、LargeInverse
      styleAttr={model}

      // 进度条的颜色
      color={this.state.progressColor}

      // 决定进度条是否要显示一个不确定的进度。注意这个在styleAttr是Horizontal的时候必须是false
      indeterminate={indeter}

      // 当前的进度值（在0到1之间）
      progress={progress}
    />
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    // flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  itemContainerStyle:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    marginBottom:20
  },
  pickerStyle:{
    width:130,
    height:40
  },
  textStyle:{
    width:120,
    textAlign:'right',
    marginRight:20
  }
})