import React, { Component } from 'react';
import HYSectionList from '../CustomComponent/HYSectionList';
import { DrawerNavigator } from 'react-navigation'

const data = [{
  key:'react-navigation',
  data:[
    {title:'StackNavigator'},
    {title:'TabNavigatorBottom'},
    {title:'TabNavigatorTop'},
    {title:'DrawerNavigator'}
  ]}
];

// 系统库
export default class SystemLibrary extends Component{
  render(){
    return <HYSectionList
      data={data}
      selectItem={this.selectItem.bind(this)}
    />
  }

  // 点击每一行回调
  selectItem(params){
    switch (params){
      case 'StackNavigator':
        this.props.navigation.navigate('StackNavigatorPage');
        break;
      case 'TabNavigatorBottom':
        this.props.navigation.navigate('TabNavigatorBottomPage');
        break;
      case 'TabNavigatorTop':
        this.props.navigation.navigate('TabNavigatorTopPage');
        break;
      case 'DrawerNavigator':
        this.props.navigation.navigate('DrawerNavigatorPage');
        break;
    }
  }
}