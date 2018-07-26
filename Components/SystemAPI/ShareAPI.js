import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Share
} from 'react-native';

import HYButton from '../CustomComponent/HYButton';
import Utility from '../UtilityTools/Utility';

export default class TestComponent extends Component{
  render(){
    return <View style={styles.containerStyle}>
      <HYButton
        title={'分享'}
        bgColor={'orange'}
        width={Utility.screenWidth - 20}
        titleColor={'white'}
        onPress={()=>this.share('')}
      />
    </View>
  }

  share(message){
    Share.share({
      message:'分享信息',
      title:'分享标题',
      url:'http://www.baidu.com'
    },{
      dialogTitle:'分享百度',
      excludedActivityTypes:[
        'com.apple.UIKit.activity.PostToTwitter'
      ],
      tintColor:'green'
    })
      .then((result)=>{
        if (result.action === Share.sharedAction){
          if (result.activityType){
            alert('分享'+result.activityType);
          } else {
            alert('Android取消分享')
          }
        } else if (result.action === Share.dismissedAction){
          alert('iOS取消分享')
        }
      })
      .catch((error)=>{
        alert('分享失败')
      })
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