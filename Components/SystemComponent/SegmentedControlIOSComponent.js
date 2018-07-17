import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  SegmentedControlIOS,
  ScrollView,
  Button
} from 'react-native';

import HomeScreen from '../Pages/HomeScreen';
import NearByScreen from '../Pages/NearByScreen';
import MineScreen from '../Pages/MineScreen';

const screenSize = Dimensions.get('window');

export default class TestComponent extends Component{
  constructor (){
    super();

    let defaultMain = this.getHomePage();
    this.state={
      selectIndex:0,
      mainComponent:defaultMain
    }
  }

  render(){
    return <View style={styles.containerStyle}>
      <ScrollView
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.scrollContentStyle}
      >
        <SegmentedControlIOS
          style={styles.segmentStyle}

          // 组件显示时，一开始被选中的段落的下标
          selectedIndex={this.state.selectIndex}

          // 如果为false，用户不能与此控件交互。默认为true
          enabled={true}

          // 如果为true，选中的段不会一直保持特效。但onValueChange回调还是会正常工作
          momentary={false}

          // 当用户点击某一段的时候调用。参数是一个事件对象
          onChange={()=>{
            alert(1)
          }}

          // 当用户点击某一段的时候调用。参数是被选中段的值
          onValueChange={(selectValue)=>{
           this.changePage(selectValue);
          }}

          // 被选中的段的颜色
          tintColor={'red'}

          // 按顺序每一个段落的标题文字
          values={['首页','附近','我的']}
        />
        <View style={{width:screenSize.width,height:screenSize.height - 40}}>
          {this.state.mainComponent}
        </View>
      </ScrollView>
    </View>
  }

  changePage(selectValue){
    let main = null;
    switch (selectValue){
      case '首页':
        main = this.getHomePage();
        break;
      case '附近':
        main = this.getNearByPage();
        break;
      case '我的':
        main = this.getMinePage();
        break;
    }

    this.setState({
      mainComponent:main
    })
  }

  getExtensionComponent(text,jumpToIndex){
    return <Button
      title={text}
      onPress={()=>{
        this.setState({
          selectIndex:jumpToIndex
        })

        let selectValue = '';
        switch (jumpToIndex){
          case 0:
            selectValue = '首页';
            break;
          case 1:
            selectValue = '附近';
            break;
          case 2:
            selectValue = '我的';
            break;
        }
        this.changePage(selectValue);
      }}
    />
  }

  getHomePage(){
    return <HomeScreen
      extensionComponent={this.getExtensionComponent('进入附近页面',1)}
    />
  }

  getNearByPage(){
    return <NearByScreen
      extensionComponent={this.getExtensionComponent('进入我的页面',2)}
    />
  }

  getMinePage(){
    return <MineScreen
      extensionComponent={this.getExtensionComponent('进入首页',0)}
    />
  }
}


const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  scrollViewStyle:{
    width:screenSize.width,
    height:screenSize.height,
  },
  scrollContentStyle:{
    justifyContent:'center',
    alignItems:'center'
  },
  segmentStyle:{
    width:screenSize.width - 20,
    height:40
  },
  textStyle:{
    fontSize:18,
    color:'blue'
  }
})