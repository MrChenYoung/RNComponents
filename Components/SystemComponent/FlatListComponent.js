import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableHighlight,
  Alert,
  Button
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class flatListDemo extends Component{
  constructor (props){
    super(props);

    let data = [];
    for (let i = 0; i < 20; i++) {
      data.push({name:'第' + i + '行'})
    }
    this.state={
      emptyData:[],
      listData:data,
      refreshing:false,
      showActionBtn:false
    }

    // this.ListEmptyComponent = this.ListEmptyComponent.bind(this);
  }

  // props
  // 重新设置每一行数据的key
  keyExtractor = (item, index) => String(index);

  static navigationOptions = {
    headerTitle:'FlatList'
  }

  render(){
    return <View style={styles.container}>
      <FlatList
        // 绑定flatList
        ref={(flatList)=>this.myList = flatList}
        // 用于为给定的item生成一个不重复的key。若不指定此函数，则默认抽取item.key作为key值。若item.key也不存在，则使用数组下标index。如果没有指定该属性，就把item.key作为了key值，才会认定两个重复的数据是一条数据！
        keyExtractor={this.keyExtractor}
        // 数据
        data={this.state.emptyData}
        // 列表为空时渲染该组件
        ListEmptyComponent={this.ListEmptyComponent.bind(this)}
        // 每一行内容
        renderItem={this.renderCell}
        // 分割线
        ItemSeparatorComponent={this.ItemSeparatorComponent}
        // 头部
        ListHeaderComponent={this.ListHeaderComponent}
        // 尾部
        ListFooterComponent={this.ListFooterComponent}
        // 列数
        // numColumns={2}
        // 如果设置了多列布局（即将numColumns值设为大于1的整数），则可以额外指定此样式作用在每行容器上
        // columnWrapperStyle={styles.cellStyle}
        //设置为true则变为水平布局模式(不能和numColumns、columnWrapperStyle)属性同时使用
        // horizontal={true}
        // 指定渲染开始的item index
        // initialScrollIndex={3}
        // 如果设置了此选项，则会在列表头部添加一个标准的RefreshControl
        // 控件，以便实现“下拉刷新”的功能。同时你需要正确设置refreshing
        // 属性。

        // 下拉刷新
        onRefresh={()=> this.onRefresh()}
        refreshing={this.state.refreshing}

        // 上拉加载更多
        onEndReachedThreshold={0.1}
        onEndReached={() => this.loadMoreData()}
      />
      {this.action1Btn()}
      {this.action2Btn()}
    </View>
  }

  // 每一行内容
  renderCell({item}){
    return <TouchableHighlight
      onPress={()=>{
        Alert.alert('提示','点击了' + item.name);
      }}

      underlayColor={'#e8e8e8'}

      activeOpacity={0.5}
    >
      <View style={styles.cellContainerStyle}>
        <Text
          style={styles.textStyle}
        >{item.name}</Text>
      </View>
    </TouchableHighlight>
  }

  // 分割线
  ItemSeparatorComponent(){
    return <View style={{height:0.5,backgroundColor:'#e8e8e8',marginLeft:10}}/>
  }

  // 头部
  ListHeaderComponent(){
    return <View style={styles.headerAndFooterBgViewStyle}>
      <Text style={styles.headerAndFooterTextStyle}>头部视图</Text>
    </View>
  }

  // 尾部
  ListFooterComponent(){
    return <View style={styles.headerAndFooterBgViewStyle}>
      <Text style={styles.headerAndFooterTextStyle}>尾部视图</Text>
    </View>
  }

  // 列表为空时渲染该组件
  ListEmptyComponent(){
    return <View style={styles.emptyListStyle}>
      <Text style={{fontSize:20,color:'red'}}>列表空空如也!</Text>
      <View style={styles.loadDataBgViewStyle}>
        <TouchableHighlight
          onPress={()=>this.loadAllData()}
          style={styles.loadDataBtnStyle}
          activeOpacity={0.5}
          underlayColor={'gray'}
        >
          <View>
            <Text style={{fontSize:16,color:'white'}}>加载数据</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  }

  // 加载数据
  loadAllData(){
    let data = [];
    for (let i = 0; i < this.state.listData.length; i++) {
      data.push(this.state.listData[i])
    }

    this.setState({
      emptyData:data,
      showActionBtn:true
    })
  }

  action1Btn(){
    if (this.state.showActionBtn) {
      return (
        //滚动到底部
        <View style={styles.scrollToEndButtonStyle}>
          <Button
            title='滚动到底部'
            onPress={()=>this.scrollToEnd()}
          />
        </View>
      )
    } else {
      return null
    }
  }

  action2Btn(){
    if (this.state.showActionBtn){
      return (
        //滚动到指定行
        <View style={styles.scrollToIndexButtonStyle}>
          <Button
            title='滚动到第15行'
            onPress={()=>this.scrollToIndex()}
          />
        </View>
      )
    } else {
      return null
    }
  }

  // 下拉刷新调用
  onRefresh(){
    this.setState({refreshing:true})

    // 1秒钟以后停止刷新
    setTimeout(()=> {
      this.setState({
        refreshing:false,
        emptyData:[],
        showActionBtn:false
      })
    }, 1000)
  }

  // 上拉加载更多
  loadMoreData(){
    let newData = this.state.emptyData;
    newData.push({name:'第' + newData.length + '行'})

    setTimeout(() => {
      this.setState((state) => ({
        emptyData: newData
      }));
    }, 3000)
  }

  // 滑动到底部 如果不设置getItemLayout属性的话，可能会比较卡。
  scrollToEnd(){
    this.myList.scrollToEnd()
  }

  // 滚动到指定行 如果不设置getItemLayout属性的话，可能会比较卡。
  scrollToIndex(){
    // 如果不设置getItemLayout属性的话，无法跳转到当前可视区域以外的位置
    this.myList.scrollToIndex({viewPosition:0.5, index:15})
  }
}

const styles = StyleSheet.create({
  container:{
    // flex:1,
  },
  emptyListStyle:{
    width:screenWidth,
    height:screenHeight - 64 - 20 - 20,
    justifyContent:'center',
    alignItems:'center'
  },
  loadDataBgViewStyle:{
    width:80,
    height:40,
    marginTop:10,
    overflow:'hidden'
  },
  loadDataBtnStyle:{
    width:'100%',
    height: '100%',
    backgroundColor:'#4169E1',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:6,
    overflow:'hidden'
  },
  headerAndFooterBgViewStyle:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'orange',
    height:20
  },
  headerAndFooterTextStyle:{
    fontSize:15,
    color:'red'
  },
  cellStyle:{
    borderWidth:2,
    borderColor:'black',
    paddingLeft:20,
    justifyContent:'center'
  },
  cellContainerStyle:{
    width:Dimensions.get('window').width,
    height:44,
    justifyContent:'center',
    alignItems:'center'
  },
  // cellInerViewStyle:{
  //   width:100,
  //   height:44,
  //   justifyContent:'center',
  //   alignItems:'center'
  // },
  textStyle:{
    // backgroundColor:'blue',
    color:'red',
    fontSize:20
  },
  scrollToEndButtonStyle:{
    position:'absolute',
    top:20,
    left:20
  },
  scrollToIndexButtonStyle:{
    position:'absolute',
    bottom:20,
    left:20
  }
});