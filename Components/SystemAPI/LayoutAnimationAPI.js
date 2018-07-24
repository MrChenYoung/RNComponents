import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  LayoutAnimation,
  TouchableHighlight,
  UIManager,
  ScrollView,
  Image
} from 'react-native';
import HYButton from '../CustomComponent/HYButton';
import Utility from '../UtilityTools/Utility';

export default class LayoutAnimationDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      springViewWidth:100,
      springViewHeight:100
    }

    if (Utility.isAndroid){
      // 开启安卓动画设置
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView>
          <Image
            source={require('../../img/animation.jpg')}
            style={{
              width:this.state.springViewWidth,
              height:this.state.springViewHeight,
              alignSelf:'center',
              marginTop:20
            }}
          />
          {this.getButton('开始spring(弹跳)动画',()=>this.springAnimation())}
          {this.getButton('开始linear(线性)动画',()=>this.linearAnimation())}
          {this.getButton('开始easeInEaseOut(缓入缓出动画)',()=>this.easeInEaseOutAnimation())}
          {this.getButton('开始自定义动画',()=>this.customAnimation())}
        </ScrollView>
      </View>
    );
  }


  getButton(title,onPress){
    return <HYButton
      title={title}
      width={Utility.screenWidth - 20}
      extendStyle={{ alignSelf: 'center', marginTop: 10}}
      bgColor={'orange'}
      titleColor={'white'}
      onPress={()=>{
        onPress()
      }}
    />
  }

  // spring 弹跳动画
  springAnimation(){
    LayoutAnimation.spring();
    this.setState({
      springViewWidth:(this.state.springViewWidth === 100 ? (this.state.springViewWidth - 20) : (this.state.springViewWidth + 20)),
      springViewHeight:(this.state.springViewHeight === 100 ? (this.state.springViewHeight - 20) : (this.state.springViewHeight + 20))
    })
  }

  // linear 线性动画
  linearAnimation(){
    LayoutAnimation.linear();
    this.setState({
      springViewWidth:(this.state.springViewWidth === 100 ? (this.state.springViewWidth - 20) : (this.state.springViewWidth + 20)),
      springViewHeight:(this.state.springViewHeight === 100 ? (this.state.springViewHeight - 20) : (this.state.springViewHeight + 20))
    })
  }

  // easeInEaseOut 缓入缓出动画
  easeInEaseOutAnimation(){
    LayoutAnimation.easeInEaseOut();
    this.setState({
      springViewWidth:(this.state.springViewWidth === 100 ? (this.state.springViewWidth - 20) : (this.state.springViewWidth + 20)),
      springViewHeight:(this.state.springViewHeight === 100 ? (this.state.springViewHeight - 20) : (this.state.springViewHeight + 20))
    })
  }

  // 自定义动画
  customAnimation(){
    // 第一种方法
    LayoutAnimation.configureNext({
      duration:1000, // 持续时间1s
      // 视图创建动画
      create:{
        delay: 500, // 延迟指定时间（单位：毫秒）
        springDamping:0.5, // 弹跳动画阻尼系数（配合spring使用）
        initialVelocity:1, // 初始速度
        type:LayoutAnimation.Types.spring, // 类型定义在LayoutAnimation.Types中(spring,linear,easeInEaseOut)
        property:LayoutAnimation.Properties.scaleXY // 类型定义在LayoutAnimation.Properties中(opacity透明度,scaleXY缩放)
      },
      // 视图更新动画
      update:{
        delay: 500,
        springDamping:0.5,
        initialVelocity:1,
        type:LayoutAnimation.Types.linear,
        property:LayoutAnimation.Properties.scaleXY
      },
      // 视图删除动画
      delete:{
        delay: 500,
        springDamping:0.5,
        initialVelocity:1,
        type:LayoutAnimation.Types.easeInEaseOut,
        property:LayoutAnimation.Properties.scaleXY
      }
    },()=>{
      // 动画执行结束回调(只有iOS系统支持)
      alert('动画结束')
    },(error)=>{
      // 动画执行出错时调用(只有iOS系统支持)
      alert('动画执行出错')
    })

    // 第二种方法
    // create 用来创建configureNext所需的config参数的辅助函数
    // LayoutAnimation.configureNext(LayoutAnimation.create(
    //   1000, // 动画持续时间
    //   LayoutAnimation.Types.spring, // 动画类型
    //   LayoutAnimation.Properties.scaleXY // 动画属性
    // ))

    // 第三种方法
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

    this.setState({
      springViewWidth:(this.state.springViewWidth === 100 ? (this.state.springViewWidth - 20) : (this.state.springViewWidth + 20)),
      springViewHeight:(this.state.springViewHeight === 100 ? (this.state.springViewHeight - 20) : (this.state.springViewHeight + 20))
    })
  }
}


const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  view: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});