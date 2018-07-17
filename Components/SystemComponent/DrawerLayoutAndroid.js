import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  DrawerLayoutAndroid,
  Dimensions,
  Button,
  PixelRatio,
  ScrollView
} from 'react-native';

import HomeScreen from '../Pages/HomeScreen';
import NearByScreen from '../Pages/NearByScreen';
import MineScreen from '../Pages/MineScreen';

const HomeNormal = require('../../img/Tabbar/pfb_tabbar_homepage_2x.png');
const HomeOn = require('../../img/Tabbar/pfb_tabbar_homepage_selected_2x.png');
const NearByNormal = require('../../img/Tabbar/pfb_tabbar_merchant_2x.png');
const NearByOn = require('../../img/Tabbar/pfb_tabbar_merchant_selected_2x.png');
const MineNormal = require('../../img/Tabbar/pfb_tabbar_mine_2x.png');
const MineOn = require('../../img/Tabbar/pfb_tabbar_mine_selected_2x.png');

// 侧滑栏项
class DrawerItem extends Component{
  // 属性
  static defaultProps={
    selectImage:null,
    normalImage:null,
    contentText:null,
    selected:false,
    pressed:(itemTitle)=>{}
  }

  render(){
    let textColor = this.props.selected ? 'black' : '#778899';
    let containerBgColor = this.props.selected ? 'white' : '#d8d8d8';

    return <TouchableWithoutFeedback
      onPress={()=>{
        this.props.pressed(this.props.contentText);
      }}
    >
      <View style={[styles.drawerContainerStyle,{backgroundColor:containerBgColor}]}>
        <Image
          source={this.props.selected ? this.props.selectImage : this.props.normalImage}
          style={styles.drawerItemImageStyle}
        />
        <Text style={[styles.drawerItemContentStyle,{ color: textColor}]}>
          {this.props.contentText}
        </Text>
      </View>
      </TouchableWithoutFeedback>
  }
}

// 侧滑菜单
const texts = ['首页','附近','我的'];
const selectedImageNames = [HomeOn,NearByOn,MineOn];
const normalImageNames = [HomeNormal,NearByNormal,MineNormal];

class DrawerLayoutMenu extends Component {
  constructor (){
    super();
    // 选中行的index
    this.state= {
      selectIndex: -1
    }
  }

  static defaultProps = {
    itemClicked:(itemTitle)=>{}
  }

  render() {
    let menuItems = [];
    /** 通过for循环添加几个菜单项 */
    for(let i = 0; i < 20; i++) {
      let index = i%texts.length;

      menuItems.push(
        <DrawerItem
          selectImage={selectedImageNames[index]}
          normalImage={normalImageNames[index]}
          contentText={texts[index]}
          selected={i === this.state.selectIndex ? true : false}
          pressed={(itemTitle)=>{
            this.setState({
              selectIndex:i
            })

            // 关闭侧滑栏
            this.props.itemClicked(itemTitle);
          }}
        />
      );
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.containerScrollStyle}>
          {menuItems}
        </ScrollView>
      </View>
    );
  }
}

export default class DrawerLayoutAndroidCom extends Component{
  constructor (){
    super();

    let defaultTextCom = <View>
      <Text style={[styles.textSmall]}>向右侧滑打开菜单</Text>
      <Button
        title='点击打开菜单'
        onPress={()=>{
          this.refs.drawer.openDrawer()
        }}
      />
    </View>;

    let defaultMainCom = <View style={styles.textContainer}>
      {defaultTextCom}
    </View>;

    this.state={
      // 侧滑栏未打开时的主页面
      MainComponent:defaultMainCom,
      TextComponent:defaultTextCom
    }
  }

  render() {
    let navigationView = (<DrawerLayoutMenu />);  // 侧滑菜单的视图
    let screenWidth = Dimensions.get('window').width;  // 获取屏幕的宽度

    return <DrawerLayoutAndroid
      // 设置抽屉的锁定模式
      // unlocked (默认值)，意味着此时抽屉可以响应打开和关闭的手势操作
      // locked-closed，意味着此时抽屉将保持关闭，不可用手势打开
      // locked-open，意味着此时抽屉将保持打开，不可用手势关闭
      // 无论抽屉处于那种状态，都仍然可以调用openDrawer/closeDrawer这两个方法打开和关闭
      drawerLockMode={'unlocked'}

      // 指定抽屉可以从屏幕的哪一边滑入
      // DrawerLayoutAndroid.positions.Left, DrawerLayoutAndroid.positions.Right
      drawerPosition={DrawerLayoutAndroid.positions.Left}

      // 指定抽屉的宽度，也就是从屏幕边缘拖进的视图的宽度
      drawerWidth={screenWidth * 2 / 3}

      // 指定在拖拽的过程中是否要隐藏软键盘
      // none (默认值)，拖拽不会隐藏软键盘 on-drag 当拖拽开始的时候隐藏软键盘
      keyboardDismissMode={'none'}

      // 每当导航视图（抽屉）被关闭之后调用此回调函数
      onDrawerClose={()=>{this.showAlert('抽屉关闭')}}

      // 每当导航视图（抽屉）被打开之后调用此回调函数
      onDrawerOpen={()=>{this.showAlert('抽屉打开')}}

      // 每当导航视图（抽屉）产生交互的时候调用此回调函数
      onDrawerSlide={()=>{this.showAlert('抽屉产生交互')}}

      // 每当抽屉的状态变化时调用此回调函数
      // idle（空闲），表示现在导航条上没有任何正在进行的交互
      // dragging（拖拽中），表示用户正在与导航条进行交互
      // settling（停靠中），表示用户刚刚结束与导航条的交互，导航条正在结束打开或者关闭的动画
      onDrawerStateChanged={()=>{}}

      /** 设置ref属性，便于通过this.refs.drawer获取到DrawerLaytoutAndroid这个组件 */
      ref='drawer'

      //此方法用于渲染一个可以从屏幕一边拖入的导航视图
      renderNavigationView={() => (<DrawerLayoutMenu  itemClicked={(itemTitle)=>this.clickItem(itemTitle)}/>)}
    >
      {this.state.MainComponent}
    </DrawerLayoutAndroid>
  }

  // 提示
  showAlert(msg){
    // alert(msg);
  }

  // 点击侧滑栏item
  clickItem(title){
    this.refs.drawer.closeDrawer();

    let defaultComp = this.state.MainComponent;
    switch (title){
      case '首页':
        defaultComp = <HomeScreen extensionComponent={this.state.TextComponent}/>
        break;
      case '附近':
        defaultComp = <NearByScreen extensionComponent={this.state.TextComponent}/>
        break;
      case '我的':
        defaultComp = <MineScreen extensionComponent={this.state.TextComponent}/>
        break;
    }

    this.setState({
      MainComponent:defaultComp
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerScrollStyle:{
    width:'100%',
    height:'100%'
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSmall: {
    fontSize: 15,
    marginBottom:10
  },
  drawerContainerStyle:{
    width:'100%',
    height:40,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#d8d8d8'
  },
  drawerItemImageStyle:{
    width:20,
    height:20,
    margin:10
  },
  drawerItemContentStyle:{
    fontSize:16
  }
})