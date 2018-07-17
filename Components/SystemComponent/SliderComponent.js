import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Slider,
  ScrollView,
  Dimensions,
  TextInput
} from 'react-native';

const screenSize = Dimensions.get('window');

export default class TestComponent extends Component{
  constructor (){
    super();

    this.state={
      sliderValue:20
    }
  }

  render(){
    return <View style={styles.containerStyle}>
      <ScrollView
        style={styles.scrollStyle}
        contentContainerStyle={styles.contentStyle}
      >
        <Slider
          style={styles.sliderStyle}

          // 如果为true，用户就不能移动滑块。默认为false
          disabled={false}

          // 指定一个滑块右侧轨道背景图。仅支持静态图片。图片最左边的像素会被平铺直至填满轨道(iOS)
          // maximumTrackImage={require('')}

          // 指定一个滑块左侧轨道背景图。仅支持静态图片。图片最右边的像素会被平铺直至填满轨道(iOS)
          // minimumTrackImage={require('')}

          // 给滑块设置一张图片。只支持静态图片
          // thumbImage={require('')}


          // Color of the foreground switch gri(Android)
          thumbTintColor={'red'}

          // 给轨道设置一张背景图。只支持静态图片。图片最中央的像素会被平铺直至填满轨道
          // trackImage={require('')}

          // 滑块右侧轨道的颜色。默认为一个蓝色的渐变色
          // maximumTrackTintColor={'gray'}

          // 滑块的最小值（当滑块滑到最左侧时表示的值）。默认为0
          minimumValue={0}

          // 滑块的最大值（当滑块滑到最右端时表示的值）。默认为1
          maximumValue={100}

          // 滑块的初始值。这个值应该在最小值和最大值之间。默认值是0
          value={this.state.sliderValue}

          // 用户结束滑动的时候调用此回调
          onSlidingComplete={()=>{

          }}

          // 在用户拖动滑块的过程中不断调用此回调
          onValueChange={(value)=>{
            this.setState({
              sliderValue:value
            })
          }}

          // 滑块的最小步长。这个值应该在0到(maximumValue - minimumValue)之间。默认值为0
          step={0}
        />
        <View
          style={{
            width:screenSize.width,
            height:40,
            flexDirection:'row',
            justifyContent:'center',
            marginTop:20
          }}>
          <Text>
            当前slider值:{String(this.state.sliderValue)}
          </Text>
        </View>
        <View
          style={{
            width:screenSize.width,
            height:40,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            marginTop:20,
          }}>
          <Text>
            输入想要改变的slider的值:
          </Text>
          <TextInput
            style={{
              width:60,
              height:'100%',
              borderRadius:3,
              borderWidth:1,
              borderColor:'#d8d8d8',
              textAlign:'center',
              marginLeft:10
            }}
            value={String(this.state.sliderValue)}

            onChangeText={(value)=>{
              if (value.length > 0){
                let currentValue = parseInt(value);
                this.setState({
                  sliderValue:currentValue
                })
              }else {
                this.setState({
                  sliderValue:0
                })
              }
            }}

          />
        </View>
      </ScrollView>
    </View>
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  scrollStyle:{
    width:screenSize.width,
    height:screenSize.height
  },
  contentStyle:{
    // justifyContent:'center',
    alignItems:'center'
  },
  sliderStyle:{
    width:200,
    height:40,
    marginTop:40
  },
  textStyle:{
    fontSize:18,
    color:'blue'
  }
})