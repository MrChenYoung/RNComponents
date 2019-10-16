import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions
} from 'react-native';

import HomeScreen from '../Pages/HomeScreen';
import NearByScreen from '../Pages/NearByScreen';
import MineScreen from '../Pages/MineScreen';

const screenSize = Dimensions.get('window');

// 需要安装react-navigation （npm install --save react-navigation）
import { StackNavigator } from 'react-navigation'

// 首页扩展
class HomePage extends Component{


  render(){
    return <HomeScreen
      extensionComponent={<View>
        <Button
          title={'进入附近页面'}
          onPress={()=>this.props.navigation.navigate('NearBy')}
        />
      </View>}
    />
  }
}

// 附近页扩展
class NearByPage extends Component{
  render(){
    return <NearByScreen
      extensionComponent={<View>
        <Button
          title='进入我的页面'
          onPress={()=>this.props.navigation.navigate('Mine')}
        />
        <Button
          title='返回首页'
          onPress={()=>this.props.navigation.goBack()}
        />
      </View>}
    />
  }
}

// 我的页面扩展
class MinePage extends Component {
  render (){
    return <MineScreen
      extensionComponent={<View>
        <Button
          title='返回附近页面'
          onPress={()=>this.props.navigation.goBack()}
        />
        <Button
          title='返回首页'
          onProgress={()=>this.props.navigation.goBack('Home')}
        />
      </View>}
    />
  }

}


// 路由设置
const StackNavigatorRouteConfig = {
// 对应界面名称
  Home: {
    screen: HomePage,
      navigationOptions:{
        // 设置导航栏标题，推荐
        headerTitle:'首页',
        // 返回按钮文字
        headerBackTitle:'返回首页',
        // 返回标题不能显示时（比如返回标题太长了）显示此标题，默认为 “Back”
        headerTruncatedBackTitle:'标题过长',
        // 设置导航栏颜色(实际效果只有标题文字颜色变了)
        headerTintColor:'red',
        headerRight:<Text>测试</Text>
    }
  },
  NearBy: {
    screen: NearByPage,
      navigationOptions:{
      headerTitle:'附近',
        // 可以设置一些导航的属性，如果隐藏顶部导航栏只要将这个属性设置为null
        // header:null,
        // 设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
        headerBackTitle:null,
        // 设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"
        // headerTruncatedBackTitle:'返回文字'
        // 设置导航条右侧。可以是按钮或者其他视图控件
        headerRight:(<Button title={'分享'} onPress={()=>{alert('确定分享?')}}/>),
        // 设置导航条左侧。可以是按钮或者其他视图控件
        // headerLeft:(<Button title={'返回'} onPress={()=> {}}/>),
        // 设置导航条的样式。背景色，宽高等
        // headerStyle:{width:screenSize.width, height:30, backgroundColor:'orange'},
        // 设置导航栏文字样式
        headerTitleStyle:{fontSize:12, color:'blue'},
      // 设置导航栏‘返回’文字样式
      headerBackTitleStyle:{fontSize:15,color:'red'},
    },
    // 定义跳转风格
    // mode:'card' // 使用iOS和安卓默认的风格
    mode:'modal',
      headerMode:'screen'
  },
  Mine:{
    screen: MinePage,
      navigationOptions:{
      headerTitle:'我的'
    }
  }
}

const StackNavigatorOptionConfig = {
  // 这个地方是全局的导航设置
  // 默认显示界面
  initialRouteName:'Home',

  // 屏幕导航的默认选项, 也可以在组件内用static navigationOptions 设置(会覆盖此处的设置)
  navigationOptions: {
    headerBackTitle:'全局返回'
  },

  // StackNavigator模式 (float:渐变,类似iOS的原生效果 none:隐藏导航栏  screen:标题与屏幕一起淡入淡出)
  headerMode:'screen',

  // 定义跳转风格 (card 默认跳转风格, modal 模态跳转)
  mode:'card',
  // mode:'modal',

  // 跳转动画开始(实际测试发现没调用)
  onTransitionStart:(()=>{
    // alert('开始跳转')
  }),

  // 跳转动画结束
  onTransitionEnd:(()=>{
    // alert('跳转结束')
  }),

  // 为各个页面设置统一的样式，比如背景色，字体大小等
  cardStyle:{
    backgroundColor:'cyan'
  }
}

// 每个页面都有navigation属性，该属性有以下几个属性/方法
// navigate - 跳转到其他页面，有三个参数:routeName:导航器中配置的路由名称, params:传递参数到下一个页面,action:action
// state - 当前页面导航器的状态,里面包含有传递过来的参数 params 、 key 、路由名称 routeName
// setParams - 更改路由的参数
// goBack - 返回
// dispatch - 发送一个action

const MyApp = StackNavigator(StackNavigatorRouteConfig);
export default MyApp;
