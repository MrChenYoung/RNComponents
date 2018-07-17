import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SectionList,
  TouchableHighlight,
  Image,
  Alert,
  Platform
} from 'react-native';

import HYSectionList from '../CustomComponent/HYSectionList';
import KeyboardAvoidingViewComponent from './KeyboardAvoidingViewComponent'

// 数据列表
const datas = [
  {
    key:'Android,iOS通用',
    platform:'all',
    usability:true,
    data:[
      {title:'ActivityIndicator'},
      {title:'Button'},
      {title:'FlatList'},
      {title:'Image'},
      {title:'KeyboardAvoidingView'},
      {title:'Modal'},
      {title:'Picker'},
      {title:'RefreshControl'},
      {title:'ScrollView'},
      {title:'SectionList'},
      {title:'Slider'},
      {title:'StatusBar'},
      {title:'Switch'},
      {title:'Text'},
      {title:'TextInput'},
      {title:'Touchable'},
      {title:'View'},
      {title:'WebView'}
    ]
  },
  {
    key:'iOS专用',
    platform:'iOS',
    usability:Platform.OS === 'ios',
    data:[
      {title:'DatePickerIOS'},
      {title:'MaskedViewIOS'},
      {title:'NavigatorIOS'},
      {title:'PickerIOS'},
      {title:'ProgressViewIOS'},
      {title:'SegmentedControlIOS'},
      {title:'TabBarIOS'},
    ]
  },
  {
    key:'Android专用',
    platform:'Android',
    usability:Platform.OS === 'android',
    data:[
      {title:'CheckBox'},
      {title:'DrawerLayoutAndroid'},
      {title:'ProgressBarAndroid'},
      {title:'ToolbarAndroid'},
      {title:'ViewPagerAndroid'}
    ]
  }
];

// 系统组件
export default class SystemComponent extends Component{
  render(){
    return <HYSectionList
      data={datas}
      selectItem={this.selectItem.bind(this)}
    />
  }

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
      case 'FlatList':
        component = 'FlatListPage';
        break;
      case 'SectionList':
        component = 'SectionListPage';
        break;
      case 'Touchable':
        component = 'TouchablePage';
        break;
      case 'Image':
        component = 'ImagePage';
        break;
      case 'Button':
        component = 'ButtonPage';
        break;
      case 'ActivityIndicator':
        component = 'ActivityIndicatorPage';
        break;
      case 'TabBarIOS':
        component = 'TabBarIOSPage';
        break;
      case 'NavigatorIOS':
        component = 'NavigatorIOSPage';
        break;
      case 'DatePickerIOS':
        component = 'DatePickerIOSPage';
        break;
      case 'CheckBox':
        component = 'CheckBoxPage';
        break;
      case 'DrawerLayoutAndroid':
        component = 'DrawerLayoutAndroidPage';
        break;
      case 'KeyboardAvoidingView':
        component = 'KeyboardAvoidingViewPage';
        break;
      case 'MaskedViewIOS':
        component = 'MaskedViewIOSPage';
        break;
      case 'Modal':
        component = 'ModalComponentPage';
        break;
      case 'Picker':
        component = 'PickerPage';
        break;
      case 'PickerIOS':
        component = 'PickerIOSPage';
        break;
      case 'ProgressBarAndroid':
        component = 'ProgressBarAndroidPage';
        break;
      case 'ProgressViewIOS':
        component = 'ProgressViewIOSPage';
        break;
      case 'RefreshControl':
        component = 'RefreshControlPage';
        break;
      case 'ScrollView':
        component = 'ScrollViewPage';
        break;
      case 'SegmentedControlIOS':
        component = 'SegmentedControlIOSPage';
        break;
      case 'Slider':
        component = 'SliderPage';
        break;
      case 'StatusBar':
        component = 'StatusBarPage';
        break;
      case 'Switch':
        component = 'SwitchPage';
        break;
      case 'Text':
        component = 'TextPage';
        break;
      case 'TextInput':
        component = 'TextInputPage';
        break;
      case 'ToolbarAndroid':
        component = 'ToolbarAndroidPage';
        break;
      case 'View':
        component = 'ViewPage';
        break;
      case 'ViewPagerAndroid':
        component = 'ViewPagerAndroidPage';
        break;
      case 'WebView':
        component = 'WebViewPage';
        break;
    }

    this.props.navigation.navigate(component);
  }
}
