import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActionSheetIOS,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import ReactNative from 'react-native';

const screenWidth = Dimensions.get('window').width;
const buttonWidth = screenWidth - 20;
const buttonHeight = 40;

export default class ActionSheetAlert extends Component{
  constructor (props){
    super(props);

    this.state={
      alertInputText:'',
      alertSelectBtnText:''
    }
  }

  render(){
    return <View style={styles.containerStyle}>
      {/*普通actionSheet*/}
      {this.buttonWithTitle('普通actionSheet',()=>{this.showNomalActionSheet()})}
      {/*分享actionSheet*/}
      {this.buttonWithTitle('分享actionSheet',()=>{this.showShareActionSheet(false)})}
      {/*分享屏幕快照*/}
      {this.buttonWithTitle('分享屏幕快照',()=>{this.showShareActionSheet(true)})}
    </View>
  }

  // 普通actionSheet
  showNomalActionSheet(){
    let buttons = ['分享到QQ','分享到朋友圈','分享到微信好友','取消','删除'];
    let cancelIndex = 3;
    let destructiveIndex = 4;

    // 在iOS设备上显示一个ActionSheet弹出框
    ActionSheetIOS.showActionSheetWithOptions({
      // 一组按钮的标题（必选）
      options:buttons,
      // 弹出框顶部的标题
      title:'分享',
      // 弹出框顶部标题下方的信息
      message:'选择分享途径',
      // 选项中取消按钮所在的位置（索引）
      cancelButtonIndex:cancelIndex,
      // 选项中删除按钮所在的位置（索引）
      destructiveButtonIndex:destructiveIndex,
        // 文字渲染颜色
      // tintColor:'red'
    },
      (clickIndex)=>{
      // 点击回调
        alert(buttons[clickIndex])
      })
  }

  // 显示分享actionSheet
  showShareActionSheet(shareSnapshot){
    let message = '我是分享信息';
    let url = 'http:www.baidu.com';
    let subject = '分享信息主题';
    let excludedActivityTypes = ['com.apple.UIKit.activity.PostToTwitter'];

    if (!shareSnapshot){
      // 在iOS设备上显示一个分享弹出框
      ActionSheetIOS.showShareActionSheetWithOptions({
          // 要分享的URL地址
          url:url,
          // 要分享的信息
          message:message,
          // 要分享的信息主题
          subject:subject,
          // 指定在actionsheet中不显示的活动
          excludedActivityTypes:excludedActivityTypes
        },
        (error)=>{
          alert('分享失败')
        },
        (success,method)=>{
          var text;
          if (success) {
            text = `Shared via ${method}`;
          } else {
            text = 'You didn\'t share';
          }

          alert(text)
        })
    } else {
      ReactNative.takeSnapshot('window')
        .then((uri)=>{
          ActionSheetIOS.showShareActionSheetWithOptions({
            url:uri,
            message:'分享屏幕快照',
            excludedActivityTypes:excludedActivityTypes
          },(error)=>{
            alert('分享失败')
          },
            (success,method)=>{
              var text;
              if (success) {
                text = `Shared via ${method}`;
              } else {
                text = '取消分享屏幕快照:' + uri;
              }

              alert(text)
            })
        })
    }
  }

  // 获取按钮
  buttonWithTitle(title,callBack){
    return <View style={styles.buttonStyle}>
      <TouchableHighlight
        onPress={callBack}
        underlayColor={'#e8e8e8'}
        activeOpacity={0.5}
      >
        <View style={styles.buttonInnerStyle}>
          <Text style={styles.buttonTextStyle}>{title}</Text>
        </View>
      </TouchableHighlight>
    </View>
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonStyle:{
    width:buttonWidth,
    height:buttonHeight,
    marginTop:10,
    marginBottom:10
  },
  buttonInnerStyle:{
    height:buttonHeight,
    borderWidth:1,
    borderColor:'blue',
    borderRadius:6,
    justifyContent:'center',
    alignItems:'center',
  },
  buttonTextStyle:{
    fontSize:16,
    color:'red'
  }
});