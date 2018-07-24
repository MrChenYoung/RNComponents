import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  ScrollView
} from 'react-native';

import Utility from '../UtilityTools/Utility';
import HYButton from '../CustomComponent/HYButton';

const Datas = [
  {title:'打开我的APP',url:'myApp://'},
  {title:'打开百度',url:'https://www.baidu.com'},
  {title:'发送短信给13761943167',url:Utility.isIOS ? 'sms:13761943167&body=短信内容' : 'sms:13761943167?body=短信内容'},
  {title:'打电话给13761943167',url:'tel:13761943167'},
  {title:'发送邮件给chenhuiyiyoung@163.com',url:'mailto:chenhuiyiyoung@163.com'},
  {title:'打开QQ',url:'mqq://'},
  {title:'打开微信',url:'weixin://'},
  {title:'打开新浪微博',url:'weibo://'},
  {title:'打开腾讯微博',url:'tencentweibo://'},
  {title:'打开淘宝',url:'taobao://'},
  {title:'打开支付宝',url:'alipay://'},
  {title:'打开美团',url:'imeituan://'},
  {title:'打开知乎',url:'zhihu://'},
  {title:'打开优酷',url:'youku://'},

  // 新浪微博: weibo:// (sinaweibo://)
];

export default class TestComponent extends Component{
  constructor (){
    super();

    this.state = {
      outUrl:''
    }
  }

  render(){
    return <View style={styles.containerStyle}>
      <ScrollView>
        <Text style={{marginLeft:10,marginTop:20}}>
          捕捉到外部链接:
        </Text>
        <View style={{width:Utility.screenWidth - 20,height:100,backgroundColor:'white',borderRadius:5,marginLeft:10,marginTop:5}}>
          <Text style={styles.textStyle}>
            {this.state.outUrl.length === 0 ? '无' : this.state.outUrl}
          </Text>
        </View>
        {this.getButtons()}
      </ScrollView>
    </View>
  }

  componentDidMount () {
    // 如果你的应用被其注册过的外部url调起，则可以在任何组件内获取url
    Linking.getInitialURL().then((url)=>{
      // 获取到外部链接
      if (url){
        this.setState({
          outUrl:url
        })
      } else {
        this.setState({
          outUrl:''
        })
      }
    }).catch(err=>{
      // 获取外部链接错误
      alert('错误'+err)
    })

    // 添加一个监听Linking变化的事件。type参数应填url，并提供一个处理函数
    Linking.addEventListener('url',this.handleOpenUrl);
  }

  componentWillUnmount () {
    // 删除一个事件处理函数。type参数应填url
    Linking.removeEventListener('url',this.handleOpenUrl)
  }

  getButtons(){
    let buttons = [];
    for (let i = 0; i < Datas.length; i++) {
      let dic = Datas[i];
      buttons.push(
        <HYButton
          width={Utility.screenWidth - 20}
          extendStyle={{ marginLeft: 10, marginTop: 10}}
          title={dic.title}
          onPress={()=>{
            this.openUrl(dic.url)
          }}
        />
      )
    }

    return buttons;
  }

  // 打开url
  openUrl(url){
    Linking.canOpenURL(url).then((support)=>{
      if (support){
        Linking.openURL(url);
      } else {
        alert('无法打开url:'+url)
      }
    })
  }

  handleOpenUrl(event){
    this.setState({
        outUrl: event.url
      }
    )
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    // justifyContent:'center',
    // alignItems:'center'
  },
  textStyle:{
    fontSize:14,
    color:'gray',
    padding:5
  }
})