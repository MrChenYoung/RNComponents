import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
  Picker,
  Platform
} from 'react-native';

const IOSPlatform = (Platform.OS === 'ios');
const AndroidPlatfrom = (Platform.OS === 'android');

const statusBarStyles = [
  '选择状态栏样式',
  'default',
  'light-content',
  'dark-content'
]

const statusBarBackgroundColors = [
  '选择状态栏背景色',
  'red',
  'green',
  'blue'
]

export default class TestComponent extends Component{
  static navigationOptions={
    headerStyle:{backgroundColor:'#4169E1'},
    headerTitleStyle:{color:'white'},
    headerTintColor:'white'
  }

  constructor (){
    super();

    let defaultStatusStyle = IOSPlatform ? 'default' : '';
    this.state={
      hiddenStatusBar:false,
      selectStatusStyle: defaultStatusStyle,
      statusBarBackgroundColor:'red'
    }
  }

  render(){
    return <View style={styles.containerStyle}>
      <StatusBar
        // 指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
        animated={true}

        // 是否隐藏状态栏
        hidden={this.state.hiddenStatusBar}

        // 设置状态栏文本的颜色('default', 'light-content', 'dark-content')
        barStyle={this.state.selectStatusStyle}

        // 状态栏的背景色(Android)
        backgroundColor={this.state.statusBarBackgroundColor}

        // 指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用(Android)
        translucent={false}

        // 指定是否显示网络活动提示符(iOS)
        networkActivityIndicatorVisible={true}

        // 通过hidden属性来显示或隐藏状态栏时所使用的动画效果。默认值为'fade'('fade', 'slide')(iOS)
        showHideTransition={'slide'}

        style={{width:200,height:40,backgroundColor:'red',marginTop:100}}

        ref={'statusBar'}
      />

      <Button
        title={this.state.hiddenStatusBar ? '显示状态栏' : '隐藏状态栏'}
        onPress={()=>{
          this.setState({
            hiddenStatusBar:!this.state.hiddenStatusBar
          })
        }}
      />
      {this.getSelectStatusBarStylePicker()}
      {this.getSelectStatusBarColorPicker()}

    </View>
  }

  getSelectStatusBarStylePicker(){
    let pickerStyle = IOSPlatform ? styles.pickerStyle : styles.androidPickerStyle;
    return <Picker
      style={pickerStyle}
      itemStyle={styles.itemStyle}
      onValueChange={(itemValue,itemPosition)=>{
        if (IOSPlatform){
          let v = itemValue === '选择状态栏样式' ? 'default' : itemValue;
          this.setState({
            selectStatusStyle:v
          })
        } else {
          this.setState({
            selectStatusStyle:itemValue
          })
        }
      }}

      selectedValue={this.state.selectStatusStyle}
      mode={'dropdown'}
    >
      {this.getStatusBarStylePickerItem()}
    </Picker>
  }

  getStatusBarStylePickerItem(){
    let items = [];
    for (let i = 0; i < statusBarStyles.length; i++) {
      items.push(
        <Picker.Item label={statusBarStyles[i]} value={statusBarStyles[i]} key={i}/>
      )
    }
    return items;
  }

  getSelectStatusBarColorPicker(){
    if (Platform.OS === 'ios'){
      return null;
    } else {
      return <Picker
        style={styles.androidPickerStyle}
        mode={'dropdown'}

        onValueChange={(itemValue,itemPosition)=>{
          this.setState({
            statusBarBackgroundColor:itemValue
          })
        }}
      >
        {this.getStatusBarColorItems()}
      </Picker>
    }
  }

  getStatusBarColorItems(){
    let items = [];
    for (let i = 0; i < statusBarBackgroundColors.length; i++) {
      items.push(
        <Picker.Item label={statusBarBackgroundColors[i]} value={statusBarBackgroundColors[i]} key={i}/>
      )
    }
    return items;
  }

}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  pickerStyle:{
    width:'100%',
    height:150,
  },
  androidPickerStyle:{
    width:200,
    height:40
  },
  itemStyle:{
    fontSize:14,
    color:'#4169E1'
  },
  textStyle:{
    fontSize:18,
    color:'blue'
  }
})