import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Button
} from 'react-native';


import HYCollectionItem from '../CustomComponent/HYCollectionItem';

import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// 图片名（可以到这个网址搜索:http://ionicons.com/）
const Ionicons = [
  {
    name:'ios-stopwatch',
    color:'#ff856c'
  },
  {
    name:'ios-partly-sunny',
    color:'#90bdc1'
  },
  {
    name:'logo-twitter',
    color:'#2aa2ef'
  },
  {
    name:'md-pin',
    color:'#00D204'
  },
  {
    name:'ios-baseball',
    color:'#5e2a06'
  },
  {
    name:'logo-tumblr',
    color:'#37465c'
  },
  {
    name:'md-contrast',
    color:'#2F3600'
  },
  {
    name:'ios-stats',
    color:'#fd8f9d'
  },
  {
    name:'md-chatboxes',
    color:'#83709d'
  },
  {
    name:'ios-calendar-outline',
    color:'#ec240e'
  },
  {
    name:'ios-unlock',
    color:'#32A69B'
  },
  {
    name:'md-search',
    color:'#69B32A'
  },
  {
    name:'md-move',
    color:'#68231A'
  },
  {
    name:'ios-log-in',
    color:'#fdbded'
  },
  {
    name:'ios-list-outline',
    color:'#68d746'
  },
  {
    name:'ios-paper-outline',
    color:'#fe952b'
  },
  {
    name:'ios-mic-outline',
    color:'#4285f4'
  },
  {
    name:'logo-youtube',
    color:'#e32524'
  },
  {
    name:'ios-globe',
    color:'#00ab6b'
  },
  {
    name:'md-shuffle',
    color:'#893D54'
  },
  {
    name:'ios-chatbubbles',
    color:'#248ef5'
  },
  {
    name:'md-images',
    color:'#f5248e'
  },
  {
    name:'ios-navigate',
    color:'#48f52e'
  },
  {
    name:'md-notifications',
    color:'#f27405'
  }
];

const FAIcons = [
  {
    name:'contao',
    color:'#FF9A05'
  },
  {
    name:'spotify',
    color:"#777"
  },
  {
    name:'google',
    color:'#4285f4'
  },
  {
    name:'twitter-square',
    color:'#2aa2ef'
  },
  {
    name:'fire',
    color:'#ff6b6b'
  },
  {
    name:'safari',
    color:'#23bfe7'
  },
  {
    name:'rocket',
    color:'red'
  }
]

export default class TestComponent extends Component{
  render(){
    return <ScrollView
      // style={{flex:1}}
      contentContainerStyle={styles.containnerStyle}
    >
      <Text style={styles.textStyle}>Ionicons</Text>
      <HYCollectionItem
        itemContentViews={this.getItems('Ionicons',Ionicons)}
        itemClicked={(index)=>alert(Ionicons[index].name)}
      />
      <Text style={styles.textStyle}>FontAwesomeIcon</Text>
      <HYCollectionItem
        itemContentViews={this.getItems('FontAwesome',FAIcons)}
        itemClicked={(index)=>alert(FAIcons[index].name)}
      />
      <FontAwesome.Button  //在图片后加, 自定义样式的文字
        name="facebook"
        backgroundColor="#3b5998">
        <Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>
      </FontAwesome.Button>
      <FontAwesome.Button    //在图片后加文字
        name="facebook"
        backgroundColor="#3b5998"
        onPress={()=>{}} //点击该按钮后触发的方法
      >
        Login with Facebook
      </FontAwesome.Button>
    </ScrollView>
  }

  getItems(type,data){
    let items = [];

    for (let i = 0; i < data.length; i++) {
      let com = null;
      let dic = data[i];
      switch (type){
        case 'Ionicons':
          com = <View style={{justifyContent:'center',alignItems:'center'}}>
            <Icon size={48} name={dic.name} color={dic.color}/>
            <Text style={{marginTop:5}}>{dic.name}</Text>
          </View>;
          break;
        case 'FontAwesome':
          com = <View style={{justifyContent:'center',alignItems:'center'}}>
            <FontAwesome name={dic.name} size={48} color={dic.color} />
            <Text style={{marginTop:10}}>{dic.name}</Text>
            </View>;
          break;
      }

      items.push(
        com
      )
    }

    return items;
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  normalCellStyle:{
    borderTopWidth:1,
    borderRightWidth:1
  },
  rightCellStyle:{

  },
  textStyle:{
    fontSize:18,
    color:'blue'
  }
})