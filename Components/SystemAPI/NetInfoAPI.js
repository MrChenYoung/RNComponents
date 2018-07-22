import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  NetInfo
} from 'react-native';

export default class TestComponent extends Component{
  constructor (){
    super();

    this.state = {
      netConnectStatus:'未知',
      netExpensive:'未知',
      netStyle:'未知'
    }
  }

  render(){
    return <View style={styles.containerStyle}>
      <Text >
        当前网络链接状态:
        <Text style={styles.textStyle}>
          {this.state.netConnectStatus}
        </Text>
      </Text>
      <View style={{height:20}}/>
      <Text>
        当前网络类型:
        <Text style={styles.textStyle}>
          {this.state.netStyle}
        </Text>
      </Text>
      <View style={{height:20}}/>
      <Text>
        当前网络收费情况:
        <Text style={styles.textStyle}>
          {this.state.netExpensive}
        </Text>
      </Text>
    </View>
  }

  componentDidMount () {
    // 添加网络链接状态监听
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this.handleConnectivityChange.bind(this)
    );

    // 获取网络链接状态
    this.detectionNetStatus();

    // 检测网络类型
    this.detectionNetStyle();

    // 检测当前网络是否收费
    this.detectionNetExpensive();
  }

  componentWillUnmount () {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this.handleConnectivityChange.bind(this)
    )
  }

  // 网络链接状态改变
  handleConnectivityChange(isConnected){
    let netStatus = isConnected ? '已连接' : '未连接';

    if (!isConnected) {
      // 网络断开链接,设置网络类型为未知
      this.setState({
        netStyle:'未知',
        netExpensive:'网络已断开'
      })
    }else {
      // 网络重新链接，重新检测网络类型
      this.detectionNetStyle();

      // 重新加测网络是否收费
      this.detectionNetExpensive();
    }

    this.setState({
      netConnectStatus:netStatus
    })
  }

  // 检测网络是否链接
  detectionNetStatus(){
    NetInfo.isConnected.fetch().done((isConnected)=>{
      let netStatus = isConnected ? '已连接' : '未连接';

      this.setState({
        netConnectStatus:netStatus
      })
    })
  }

  // 检测网络类型
  detectionNetStyle(){
    NetInfo.fetch().done((netStyle)=>{
      let netName = '';
      if (Platform.OS === 'ios'){
        switch (netStyle){
          case 'none':
            netName = '离线';
            break;
          case 'wifi':
            netName = 'wifi';
            break;
          case 'cell':
            netName = '移动网络';
            break;
          case 'unknown':
            netName = '未知';
            break;
        }
      } else {
        switch (netStyle){
          case 'NONE':
            netName = '离线';
            break;
          case 'BLUETOOTH':
            netName = '蓝牙数据连接';
            break;
          case 'DUMMY':
            netName = '模拟数据连接';
            break;
          case 'ETHERNET':
            netName = '以太网数据连接';
            break;
          case 'MOBILE':
            netName = '移动网络数据连接';
            break;
          case 'MOBILE_DUN':
            netName = '拨号移动网络数据连接';
            break;
          case 'MOBILE_HIPRI':
            netName = '高优先级移动网络数据连接';
            break;
          case 'MOBILE_MMS':
            netName = '彩信移动网络数据连接';
            break;
          case 'MOBILE_SUPL':
            netName = '安全用户面定位（SUPL）数据连接';
            break;
          case 'VPN':
            netName = '虚拟网络连接';
            break;
          case 'WIFI':
            netName = 'WIFI';
            break;
          case 'WIMAX':
            netName = 'WIMAX';
            break;
          case 'UNKNOWN':
            netName = '未知';
            break;
        }
      }

      this.setState({
        netStyle:netName
      })
    })
  }

  // 检测当前网络是否收费
  detectionNetExpensive(){
    if (Platform.OS === 'ios'){
      this.setState({
        netExpensive:'iOS平台无法检测'
      })
    } else {
      // 如果当前连接是通过移动数据网络，或者通过基于移动数据网络所创建的wifi热点，都有可能被判定为计费的数据连接
      this.setState({
        netExpensive:NetInfo.isConnectionExpensive ? '收费' : '免费'
      })
    }
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{
    fontSize:18,
    color:'blue'
  }
})