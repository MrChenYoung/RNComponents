import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';

export default class Tabbar extends Component{
  constructor(props){
    super(props);

    this.state={
      selected:'home'
    }
  }

  render(){
    return <TabBarIOS
      //标签栏的背景颜色
      barTintColor = {'blue'}

      //当前被选中的标签图标的颜色
      tintColor={"white"}

      // 当前没有被选中的标签图标的颜色。仅在iOS 10及以上版本有效
      unselectedTintColor={"#1faaaa"}

      // 一个布尔值，决定标签栏是否需要半透明化
      translucent={true}
    >
      {/*首页*/}
      {this.getItem('首页','home','tabbar_home')}

      {/*发现*/}
      {this.getItem('发现','discover','tabbar_discover')}

      {/*消息*/}
      {this.getItem('消息','message','tabbar_message_center')}

      {/*我的*/}
      {this.getItem('我的','mine','tabbar_profile')}

    </TabBarIOS>
  }

  // 获取每个item
  getItem(titleName,selectTag,iconImage){
    // 选中后显示的图片
    let selectedImage = iconImage + '_highlighted';

    return <TabBarIOS.Item
      // 在图标右上角显示一个红色的气泡
      badge={5}

      // 给当前标签指定一个自定义的图标。如果定义了systemIcon属性， 这个属性会被忽略。
      icon={{uri:iconImage,scale:2}}

      // 当此标签被选中时调用。你应该修改组件的状态来使得selected={true}。
      onPress={()=>{this.selectItem(selectTag)}}

      // 这个属性决定了子视图是否可见。如果你看到一个空白的页面，很可能是没有选中任何一个标签。
      selected={this.state.selected === selectTag}

      // 当标签被选中的时候显示的自定义图标。如果定义了systemIcon属性，这个属性会被忽略。如果定义了icon而没定义这个属性，在选中的时候图标会染上蓝色
      selectedIcon={{uri:selectedImage,scale:2}}

      // 在图标下面显示的标题文字。如果定义了systemIcon属性，这个属性会被忽略。
      title={titleName}

      // 一些预定义的系统图标。注意如果你使用了此属性，标题和自定义图标都会被覆盖为系统定义的值
      // systemIcon={'bookmarks'}
    >
      <View
        style={styles.container}
      >
        <Text
          style={styles.textStyle}
        >{titleName}</Text>
      </View>
    </TabBarIOS.Item>
  }

  // 点击选中tabbarItem
  selectItem(pageName){
    this.setState({
      selected:pageName
    })
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{
    fontSize:20,
    color:'red'
  }
})