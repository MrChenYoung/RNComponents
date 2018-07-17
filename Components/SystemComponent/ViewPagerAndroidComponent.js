import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ViewPagerAndroid,
  Button
} from 'react-native';

import HomeScreen from '../Pages/HomeScreen';
import NearByScreen from '../Pages/NearByScreen';
import MineScreen from '../Pages/MineScreen';

export default class TestComponent extends Component{
  render(){
    return <ViewPagerAndroid
        style={{flex:1}}

        // 初始选中的页的下标。你可以用setPage 函数来翻页，并且用onPageSelected来监听页的变化
        initialPage={0}

        // 决定在滑动的时候是否要让软键盘消失
        // none （默认值），拖拽不会让键盘消失
        // on-drag， 当拖拽开始的时候会让键盘消失
        keyboardDismissMode={'on-drag'}

        // 是否在当前页滑动时展示前一页或者后一页，默认为false
        peekEnabled={true}

        // 页面滑动时两个页面之间的间距，配合peekEnabled使用
        pageMargin={100}

        // 当在页间切换时（不论是由于动画还是由于用户在页间滑动/拖拽）执行
        onPageScroll={()=>{
          // alert('页面切换')
        }}

        // 页面滑动状态变化时调用此回调函数
        // 页面滑动状态可能为:
        // idle 空闲，意味着当前没有交互
        // dragging 拖动中，意味着当前页面正在被拖动
        // settling 处理中，意味着当前页面发生过交互，且正在结束开头或收尾的动画
        onPageScrollStateChanged={()=>{

        }}

        // 这个回调会在页面切换完成后（当用户在页面间滑动）调用
        onPageSelected={()=>{

        }}

        // 设为false时可禁止滚动。默认值为true
        scrollEnabled={true}

        ref='ViewPager'
      >
      <View>
        <HomeScreen
          extensionComponent={
            <Button
              title='进入附近页面'
              onPress={()=>{
                this.refs.ViewPager.setPage(1);
              }}
            />
          }
        />
      </View>

        <View>
          <NearByScreen
            extensionComponent={
              <Button
                title='进入我的页面'
                onPress={()=>{
                  this.refs.ViewPager.setPage(2);
                }}
              />
            }
          />
        </View>

        <View>
          <MineScreen
            extensionComponent={
              <Button
                title='进入首页'
                onPress={()=>{
                  this.refs.ViewPager.setPage(0)
                }}
              />
            }
          />
        </View>


    </ViewPagerAndroid>
  }

  setViewPager(index){
    this.refs.ViewPager.setPage(index);
  }
}
