import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl
} from 'react-native';

export default class TestComponent extends Component{
  constructor (){
    super();

    this.state={
      isRefreshing:false
    }
  }

  render(){
    return <View style={styles.containerStyle}>
      <ScrollView
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.scrollViewStyle}
        refreshControl={
          <RefreshControl
            // 视图是否应该在刷新时显示指示器
            refreshing={this.state.isRefreshing}

            // 在视图开始刷新时调用
            onRefresh={this.beginRefresh.bind(this)}

            // 指定刷新指示器的颜色(iOS)
            tintColor={'blue'}

            // 指定刷新指示器下显示的文字(iOS)
            title={'正在刷新...'}

            // 指定至少一种颜色用来绘制刷新指示器(Android)
            colors={['red','green']}

            // 指定是否要开启刷新指示器(Android)
            enabled={true}

            // 指定刷新指示器的背景色(Android)
            progressBackgroundColor={'blue'}

            // 指定刷新指示器的大小，具体数值可参阅RefreshControl.SIZE.(Android)
            // size={}

            // 指定刷新指示器的垂直起始位置(top offset)(Android)
            progressViewOffset={0}
          />
        }
      >
        <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
          <Text
            style={styles.textStyle}
          >
            下拉刷新
          </Text>
        </View>
      </ScrollView>
    </View>
  }

  // 开始刷新
  beginRefresh(){
    this.setState({
      isRefreshing:true
    })

    // 3秒以后停止刷新
    setTimeout(()=>{
      this.setState({
        isRefreshing:false
      })
    },3000);
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  scrollViewStyle:{
    width:'100%',
    height:'100%'
  },
  scrollContentStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  refreshStyle:{
    backgroundColor:'white',
    width:100,
    height:100
  },
  textStyle:{
    fontSize:18,
    color:'black'
  }
})