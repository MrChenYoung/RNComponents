import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ToolbarAndroid
} from 'react-native';

const HomeNormal = require('../../img/Tabbar/pfb_tabbar_homepage_2x.png');
const HomeOn = require('../../img/Tabbar/pfb_tabbar_homepage_selected_2x.png');
const NearByNormal = require('../../img/Tabbar/pfb_tabbar_merchant_2x.png');
const NearByOn = require('../../img/Tabbar/pfb_tabbar_merchant_selected_2x.png');
const MineNormal = require('../../img/Tabbar/pfb_tabbar_mine_2x.png');
const MineOn = require('../../img/Tabbar/pfb_tabbar_mine_selected_2x.png');

export default class TestComponent extends Component{
  render(){
    let icon = require('../../img/ToolBar/menu.png');
    let actions = this.getActions();

    return <View style={styles.containerStyle}>
      <ToolbarAndroid
        style={styles.toolBarStyle}

        // 设置导航器的icon
        navIcon={icon}

        // 设置工具栏的标题
        title='ToolBar主标题'

        // 设置工具栏的标题颜色
        titleColor={'orange'}

        // 设置工具条的子标题
        subtitle={'ToolBar子标题'}

        // 设置工具条子标题的颜色
        subtitleColor={'blue'}

        // 设置整个工具条的徽标
        // logo={logo}

        // 设置功能菜单中的可用功能。他们会显示为部件右侧的图标或文字。如果放不下，则会被放进一个弹出菜单里
        actions={actions}

        // 设置Toolbar的右边缘和屏幕右边缘的距离
        contentInsetEnd={20}

        // 设置Toolbar的左边缘和屏幕左边缘的距离
        contentInsetStart={20}

        onActionSelected={(index)=>{
          alert('点击了第' + index + '个');
        }}

        // 当图标被选中的时候调用此回调
        onIconClicked={()=>{
          alert('点击了icon')
        }}

        // 设置功能列表的弹出菜单的图标
        // overflowIcon={}

        // 设置toolbar的排列顺序为从右到左
        rtl={false}


      />
    </View>
  }

  getActions(){
    let actions = [
      {
        // 必须的, 功能的标题
        title: '首页',
        // 这个功能的图标
        icon: HomeNormal,
        // enum('always', 'ifRoom', 'never')
        // always总是显示，ifRoom如果放的下则显示，或者never从不显示
        show:'always',
        // 值为布尔类型，指定是否在图标旁边同时还显示文字
        showWithText: true
      },
      {
        title:'附近',
        icon:NearByNormal,
        show:'always',
        showWithText:true
      },
      {
        title:'我的',
        icon:MineNormal,
        show:'always',
        showWithText:true
      }
    ];

    return actions;
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  toolBarStyle:{
    width:'100%',
    height:80,
    backgroundColor:'white'
  }
})