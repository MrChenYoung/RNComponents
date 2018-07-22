import React, { Component } from 'react';

import HYSectionList from '../CustomComponent/HYSectionList';
import { Alert, Platform } from 'react-native'

// 数据列表
const datas = [
  {
    key:'Android,iOS通用',
    platform:'all',
    usability:true,
    data:[
      {title:'Alert'},
      {title:'Animated'},
      {title:'AppState'},
      {title:'AsyncStorage'},
      {title:'NetInfo'}
    ]
  },
  {
    key:'iOS专用',
    platform:'iOS',
    usability:Platform.OS === 'ios',
    data:[
      {title:'ActionSheetIOS'},
      {title:'AlertIOS'},
      {title:'ImagePickerIOSAPI'}
    ]
  },
  {
    key:'Android专用',
    platform:'Android',
    usability:Platform.OS === 'android',
    data:[
      {title:'ToastAndroid'}
    ]
  }
];

// 系统API
export default class SystemAPI extends Component{
  render(){
    return <HYSectionList
      data={datas}
      selectItem={this.selectItem.bind(this)}
    />
  }

  // 点击cell
  selectItem(params,platfrom,usablity){
    let component = null;

    if (usablity){
      // 组件在该平台上可用

    } else if (platfrom === 'iOS'){
      // 组件在iOS平台上不可用
      Alert.alert('提示','该组件只能在iOS系统上使用');
      return;
    }else if(platfrom === 'Android') {
      Alert.alert('提示','该组件只能在Android系统上使用')
      return;
    }

    switch (params){
      case 'ActionSheetIOS':
        component = 'ActionSheetIOSPage';
        break;
      case 'ImagePickerIOSAPI':
        component = 'ImagePickerIOSAPIPage';
        break;
      case 'AlertIOS':
        component = 'AlertIOSPage';
        break;
      case 'Alert':
        component = 'AlertPage';
        break;
      case 'Animated':
        component = 'AnimatedPage';
        break;
      case 'AppState':
        component = 'AppStatePage';
        break;
      case 'ToastAndroid':
        component = 'ToastAndroidPage';
        break;
      case 'NetInfo':
        component = 'NetInfoPage';
        break;
      case 'AsyncStorage':
        component = 'AsyncStoragePage';
        break;
    }

    this.props.navigation.navigate(component);
  }
}