import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';

import HYFlatList from '../CustomComponent/HYFlatList';

const datas = [
  {
    name:'DeviceEventEmitter',
    detail:'内部通知'
  },
  {
    name:'推送'
  }
  ];

export default class OtherComponent extends Component{
  render(){
    return <HYFlatList
      data={datas}
      selectItem={this.selectItem.bind(this)}
    />
  }

  // 点击行
  selectItem(params){
    switch (params){
      case 'DeviceEventEmitter':
        this.props.navigation.navigate('DeviceEventEmitterOne');
        break;
    }
  }
}