import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  StatusBar,
  ScrollView
} from 'react-native';

import { DrawerNavigator, SafeAreaView, DrawerItems} from 'react-navigation';

import HomeScreen from '../Pages/HomeScreen';
import NearByScreen from '../Pages/NearByScreen';
import MineScreen from '../Pages/MineScreen';

// 首页
class HomePage extends Component{
  render(){
    return <HomeScreen
      extensionComponent={<View>
        <Button
          title='打开侧滑栏'
          onProgress={()=>this.props.navigation.openDrawer()}
        />
        <Button
          title='跳转到附近页面'
          onProgress={()=>this.toNearByPage()}
        />
        <Button
          title='返回主页'
          onProgress={()=>this.props.navigation.goBack()}
        />
      </View>}
    />
  }

  toNearByPage(){
    this.props.navigation.navigate('NearBy')
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

// 自定义抽屉内容
class DrawerContent extends Component{
  render(){
    return <View style={{width:'100%',height:'100%', backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'white'}}>1234455</Text>
    </View>
  }
}

const DrawerRouteConfig = {
  Home: {
    screen: HomePage,
    navigationOptions:{
      drawerLabel:'首页',
      drawerIcon:({tintColor, focused})=>(
        <Image
          source={focused ? HomeOn : HomeNormal}
          style={{tintColor: tintColor, width: 23, height: 23}}
        />
      )
    }
  },
  NearBy: {
    screen: NearByPage,
    navigationOptions:{
      drawerLabel:'附近',
      drawerIcon:({tintColor, focused})=>(
        <Image
          source={focused ? NearByOn : NearByNormal}
          style={{tintColor: tintColor, width: 23, height: 23}}
        />
      )
    }
  },
  Mine: {
    screen: MinePage,
    navigationOptions:{
      drawerLabel:'我的',
      drawerIcon:({tintColor, focused})=>(
        <Image
          source={focused ? MineOn : MineNormal}
          style={{tintColor:tintColor, width: 23, height: 23}}
        />
      )
    }
  }
}

const DrawerOptionConfig = {
  // 抽屉导航配置

  // 默认页面组件
  initialRouteName:'Home',

  // 抽屉的宽
  drawerWidth:180,

  // 抽屉的位置，可以是left或者right. 默认是 left .
  drawerPosition:'right',

  // 抽屉容器的背景颜色 默认为白色
  drawerBackgroundColor:'orange',

  // 自定义抽屉组件,默认组件内容没有超过屏幕不能滚动
  // contentComponent: DrawerContent,
  contentComponent: props => {
    console.log(props)
    return (
      <View>
        <View style={{ height: 40, backgroundColor: 'red' }}>
          <View style={{ height: 20 }} />
          <Text>123</Text>
        </View>
        <StatusBar backgroundColor="blue" barStyle="dark-content" />
        <ScrollView>
          <SafeAreaView>
            {/* SafeAreaView
                         匹配iphonex  安全区域视图 */}
            <DrawerItems {...props} />
          </SafeAreaView>
        </ScrollView>
      </View>
    )
  },
  contentOptions:{
    // 选中文字颜色
    activeTintColor:'orange',
    // 选中背景颜色
    activeBackgroundColor:'gray',
    // 未选中文字颜色
    inactiveTintColor:'#d8d8d8',
    // 未选中背景颜色
    inactiveBackgroundColor:'white',
    // 抽屉标签样式
    labelStyle:{fontSize:18},
    // 每次调用按钮Item时调用该方法(没作用)
    onItemPress:(()=> alert('选择了')),

    // icon 容器样式
    iconContainerStyle: {
      backgroundColor: 'blue'
    },

    // 单个item容器样式
    itemStyle: {
      // backgroundColor: 'white'
    },

    // 容器的样式
    itemsContainerStyle: {
      backgroundColor: 'yellow'
    },

    // activeItemKey:'Notifications'
  }
}

const DrawerApp = DrawerNavigator(DrawerRouteConfig,DrawerOptionConfig);
export default DrawerApp;