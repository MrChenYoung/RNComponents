import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Dimensions,
  RefreshControl
} from 'react-native';

const screenSize = Dimensions.get('window');

export default class TestComponent extends Component{
  render(){
    return <View style={styles.containerStyle}>
      <ScrollView
        style={styles.scrollViewStyle}

        // 这些样式会应用到一个内层的内容容器上，所有的子视图都会包裹在内容容器内
        // contentContainerStyle={styles.containerStyle}

        // 当此属性为true的时候，所有的子视图会在水平方向上排成一行，而不是默认的在垂直方向上排成一列。默认值为false
        horizontal={false}

        // 用户拖拽滚动视图的时候，是否要隐藏软键盘
        // none（默认值），拖拽时不隐藏软键盘
        // on-drag 当拖拽开始的时候隐藏软键盘
        // interactive 软键盘伴随拖拽操作同步地消失，并且如果往上滑动会恢复键盘。安卓设备上不支持这个选项，会表现的和none一样
        keyboardDismissMode={'on-drag'}

        // 如果当前界面有软键盘，那么点击scrollview后是否收起键盘，取决于本属性的设置
        // 'never'（默认值），点击TextInput以外的子组件会使当前的软键盘收起。此时子元素不会收到点击事件
        // 'always'，键盘不会自动收起，ScrollView也不会捕捉点击事件，但子组件可以捕获
        // 'handled'，当点击事件被子组件捕获时，键盘不会自动收起。这样切换TextInput时键盘可以保持状态。多数带有TextInput的情况下你应该选择此项
        keyboardShouldPersistTaps={'always'}

        // 此函数会在ScrollView内部可滚动内容的视图发生变化时调用
        // 调用参数为内容视图的宽和高
        onContentSizeChange={(contentWidth,contentHeight)=>{}}

        // 滚动动画开始时调用此函数
        onMomentumScrollStart={()=>{
          // alert('开始滚动')
        }}

        // 滚动动画结束时调用此函数
        onMomentumScrollEnd={()=>{
          // alert('结束滚动')
        }}

        // 在滚动的过程中，每帧最多调用一次此回调函数。调用的频率可以用scrollEventThrottle属性来控制
        onScroll={()=>{
          // alert('滚动中')
        }}

        // 指定RefreshControl组件，用于为ScrollView提供下拉刷新功能
        refreshControl={<RefreshControl />}
        // 设置refreshControl属性后必须设置该属性
        refreshing={false}

        // 当此属性为true时，屏幕之外的子视图（子视图的overflow样式需要设为hidden）会被移除。这个可以提升大列表的滚动性能。默认值为true
        removeClippedSubviews={true}

        // 垂直方向滚动条
        showsVerticalScrollIndicator={true}

        // 覆盖默认的overScroll模式(Android)
        // 'auto' - 默认值，允许用户在内容超出视图高度之后可以滚动视图
        // 'always' - 无论内容尺寸，用户始终可以滚动视图
        // 'never' - 始终不允许用户滚动视图
        overScrollMode={'always'}

        // 当此属性为true时，水平方向即使内容比滚动视图本身还要小，也可以弹性地拉动一截。当horizontal={true}时默认值为true，否则为false
        // iOS系统才有用
        // alwaysBounceHorizontal={true}

        // 当此属性为true时，垂直方向即使内容比滚动视图本身还要小，也可以弹性地拉动一截。当horizontal={true}时默认值为false，否则为true
        // iOS系统才有效
        alwaysBounceVertical={true}

        // 当滚动视图放在一个导航条或者工具条后面的时候，iOS系统是否要自动调整内容的范围。默认值为true。（译注：如果你的ScrollView或ListView的头部出现莫名其妙的空白，尝试将此属性置为false）
        // iOS系统有效
        automaticallyAdjustContentInsets={true}

        // 当值为true时，如果内容范围比滚动视图本身大，在到达内容末尾的时候，可以弹性地拉动一截。如果为false，尾部的所有弹性都会被禁用，即使alwaysBounce属性为true。默认值为true
        // iOS系统有效
        bounces={false}

        // 当值为true时，使用手势缩放内容可以超过min/max的限制，然后在手指抬起之后弹回min/max的缩放比例。否则的话，缩放不能超过限制
        // iOS系统有效
        bouncesZoom={true}
      >
        {this.getSubComponent(30,false)}
      </ScrollView>
      <ScrollView
        style={styles.scrollViewStyle}
        horizontal={true}
        // 水平方向滚动条
        showsHorizontalScrollIndicator={true}
        // alwaysBounceHorizontal={true}
      >
        {this.getSubComponent(30,true)}
      </ScrollView>
    </View>
  }
  
  // 获取子组件
  getSubComponent(number,isStandard){
    let subComponents = [];
    let otherStyle = isStandard ? {width:40,height:'100%'} : {width:'100%',height:40};
    for (let i = 0; i < number; i++) {
      subComponents.push(
        <View style={[{justifyContent:'center',alignItems:'center'},otherStyle]}>
          <Text
            style={styles.textStyle}
          >
            {i}
          </Text>
        </View>

      )
    }
    
    subComponents.push(
      <TextInput
        style={{borderRadius:3, borderWidth:1,borderColor:'white',padding:5,marginTop:10,marginBottom:10}}
        placeholder='请输入文字'
        placeholderTextColor={'white'}
      />
    )
    
    return subComponents;
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  scrollViewStyle:{
    width:screenSize.width - 20,
    height:(screenSize.height - 64 - 30) * 0.5,
    backgroundColor:'red',
    marginTop:10,
    marginBottom:10
  },
  contentStyle:{
    // justifyContent:'center',
    // alignItems:'center',
    paddingVertical: 20
  },
  textStyle:{
    fontSize:18,
    color:'blue',
    width:40,
    height:40,
    textAlign:'center'
  }
})