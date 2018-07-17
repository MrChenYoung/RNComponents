import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  NavigatorIOS,
  ScrollView,
  Dimensions
} from 'react-native';

const screenSize = Dimensions.get('window')

export default class navibar extends Component{

  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  //   navigator: PropTypes.object.isRequired,
  // }

  render(){
    return <NavigatorIOS
      style={styles.navigationStyle}

      // 导航条的背景颜色
      barTintColor={'white'}

      // 导航栏上按钮的颜色
      tintColor={'orange'}

      // 导航器标题的文字颜色
      titleTextColor={'blue'}

      // 一个布尔值，决定是否导航条是半透明的
      translucent={true}

      // 决定是否启用滑动返回手势。不指定此属性时，手势会根据navigationBar的显隐情况决定是否启用（显示时启用手势，隐藏时禁用手势）。指定此属性后，手势与navigationBar的显隐情况无关
      interactivePopGestureEnabled={true}

      // NavigatorIOS使用"路由"对象来包含要渲染的子视图、它们的属性、以及导航条配置
      initialRoute={{
        component: mainComponent,
        title: '主页',

        // 左边图标
        leftButtonIcon:{uri:'navigationbar_friendattention',scale:2},
        // 右边图标
        rightButtonIcon:{uri:'navigationbar_pop',scale:2}
      }}

      // 一个布尔值，决定导航栏是否隐藏
      navigationBarHidden={false}

      // 一个布尔值，决定是否要隐藏1像素的阴影(导航条下的线条)
      shadowHidden={false}

      onLeftButtonPress={()=>{
        alert('我的信息')
      }}

      onRightButtonPress={()=>{
        alert('扫一扫')
      }}
    />
  }
}

class mainComponent extends Component{
  render(){
    // 最外层没有ScrollView进入下一个页面后，返回会报错
    return <ScrollView >
      <View style={styles.container}>
        <Text style={styles.textStyle}>导航页面</Text>
        <Text
          style={styles.textStyle}
          onPress={()=>{
            this.props.navigator.push({
              component: NextPage,
              title:'第二页',
              passProps:{btnTitle:'我是从上个页面传过来的'}
            })
          }}
        >点我进入下一页</Text>
      </View>
    </ScrollView>
  }
}

class NextPage extends Component{
  constructor (props){
    super(props);

    this.props.navigator.barTintColor='red'
  }
  render(){
    return <View style={styles.container}>
      <Text style={styles.textStyle}>{this.props.btnTitle}</Text>
      <Text
        style={styles.textStyle}
        onPress={()=>{
          this.props.navigator.pop()
        }}
      >点我返回上个页面</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{
    fontSize:20,
    color:'orange'
  },
  navigationStyle:{
    flex:1
  }
});