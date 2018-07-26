import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text, Platform
} from 'react-native'

import HYFlatList from '../CustomComponent/HYFlatList';

// 数据列表
const datas = [
  {
    name:'react-native-keyboard-aware-scroll-view',
    detail:'解决键盘挡住输入框问题'
  },
  {
    name:'react-native-swiper',
    detail:'轮播图'
  },
  {
    name:'react-native-vector-icons',
    detail:'iconfont图标库'
  },
  {
    name:'react-timer-mixin',
    detail:'定时器'
  }
];

// 第三方组件
export default class ThreeThirdComponent extends Component{
  render(){
    return <HYFlatList
      data={datas}
      selectItem={this.selectItem.bind(this)}
    />
  }

  // 点击每一行
  selectItem(params){
    let component = null;

    switch (params){
      case 'react-native-keyboard-aware-scroll-view':
        component = 'KeyboardAwareScrollViewPage';
        break;
      case 'react-native-swiper':
        component = 'ReactnativeSwiperPage';
        break;
      case 'react-native-vector-icons':
        component = 'VectorIconsPage';
        break;
      case 'react-timer-mixin':
        component = 'TimerMixinPage';
        break;
    }

    this.props.navigation.navigate(component);
  }
}