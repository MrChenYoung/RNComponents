import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button
} from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import HomeScreen from '../Pages/HomeScreen';
import NearByScreen from '../Pages/NearByScreen';
import MineScreen from '../Pages/MineScreen';

// 首页
class HomePage extends Component{
  render(){
    return <HomeScreen
    extensionComponent={<Button
      title='返回主页'
      onProgress={()=>this.props.navigation.goBack()}
    />}
    />
  }
}

// 附近
class NearByPage extends Component{
  render(){
    return <NearByScreen
      extensionComponent={<Button
        title='返回主页'
        onProgress={()=>this.props.navigation.goBack()}
      />}
    />
  }
}

// 我的
class MinePage extends Component{
  render(){
    return <MineScreen
      extensionComponent={<Button
        title='返回主页'
        onProgress={()=>this.props.navigation.goBack()}
      />}
    />
  }
}

const HomeNormal = require('../../img/Tabbar/pfb_tabbar_homepage_2x.png');
const HomeOn = require('../../img/Tabbar/pfb_tabbar_homepage_selected_2x.png');
const NearByNormal = require('../../img/Tabbar/pfb_tabbar_merchant_2x.png');
const NearByOn = require('../../img/Tabbar/pfb_tabbar_merchant_selected_2x.png');
const MineNormal = require('../../img/Tabbar/pfb_tabbar_mine_2x.png');
const MineOn = require('../../img/Tabbar/pfb_tabbar_mine_selected_2x.png');

const TabNavigationRouteConfig = {
  Home:{
    screen:HomePage,
    navigationOptions:{
      tabBarLabel:'首页',
      // Tab的是否可见，没有设置的话默认为 true
      tabBarVisible:true,
      tabBarIcon:({tintColor, focused})=>(
        <Image
          source={focused ? HomeOn : HomeNormal}
          style={{width:30,height:30}}
        />
      )
    }
  },
  NearBy:{
    screen:NearByPage,
    navigationOptions:{
      tabBarLabel:'附近',
      tabBarIcon:({tintColor, focused})=>(
        <Image
          source={focused ? NearByOn : NearByNormal}
          style={{width:30,height:30}}
        />
      )
    }
  },
  Mine:{
    screen:MinePage,
    navigationOptions:{
      tabBarLabel:'我的',
      tabBarIcon:({tintColor, focused})=>(
        <Image
          source={focused ? MineOn : MineNormal}
          style={{width:30,height:30}}
        />
      )
    }
  }
}

const TabNavigationConfig = {
  // 设置默认的页面组件
  initialRouteName:'Home',

  // Tab选项卡组件，有 TabBarBottom 和 TabBarTop 两个值，在iOS中默认为 TabBarBottom ，在Android中默认为 TabBarTop
  tabBarComponent: TabBarBottom,
  // tabbar的位置(ios默认在底部，安卓默认在顶部) Tab选项卡的位置，有 top 或 bottom 两个值
  tabBarPosition:'bottom',

  // 配置
  navigationConfig: {},

  // 是否允许在标签,滑动切换
  swipeEnabled:true,

  // 是否在更改标签时显示动画
  animationEnabled:true,

  // 是否根据需要懒惰呈现标签，而不是提前，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐为true
  lazy:true,

  // android点击返回键时的处理，有initialRoute(返回初始界面)和none(退出)两个值
  backBehavior:'none',

  // 导航栏样式1
  tabBarOptions: {
    // 是否显示图片
    showIcon:true,
    // 是否显示底部文字
    showLabel:true,
    // 透明度
    pressOpacity:1,
    pressColor:'orange',
    // 选中Tab的文字颜色
    activeTintColor:'red',
    // 选中后标签的背景色
    activeBackgroundColor:'yellow',
    // 未选中着色
    inactiveTintColor:'#e8e8e8',
    // 未选中背景色
    inactiveBackgroundColor:'#D8BFD8',
  },

  // 导航栏样式2
  /*
  tabBarOptions:{
    // 导航条样式
    style: {
      height: 49,
      backgroundColor: '#E9967A',
      zIndex: 0,
      // absolute relative
      position: 'relative',
    },
    // 标签的样式
    labelStyle: {
      fontSize: 11,
      paddingVertical: 0,
      marginTop: -4,
      color:'white'
    },
    // icon的样式
    // iconStyle: {
    //   marginTop: -3
    // },
    // // 单个Tab的样式
    // tabStyle: {
    //   backgroundColor: 'blue',
    // },
  }
*/
}

const tabbar = TabNavigator(TabNavigationRouteConfig,TabNavigationConfig);
export default tabbar;

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{
    fontSize:20,
    color:'blue'
  }
})