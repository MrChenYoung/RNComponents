import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions
} from 'react-native';

const screenSize = Dimensions.get('window')

export default class ImageComponent extends Component{
  render(){
    return <View
      style={styles.container}>
      {/*加载本地RN图片*/}
      {this.loadRNLocalImage()}
      {/*加载网络图片*/}
      {this.loadNetImage()}
      {/*加载ios图片*/}
      {this.loadiOSImage()}
      {/*背景图片组件*/}
      {this.backgroundImageComponent()}
    </View>
  }

  // 加载本地图片
  loadRNLocalImage(){
    return <View style={styles.imageItemViewStyle}>
      <Image
        source={require('../../img/game.jpg')}
        style={styles.imageStyle}
        // 当元素挂载或者布局改变的时候调用
        onLayout={()=>{
          console.log('布局改变')
        }}

        // 加载开始时调用
        onLoadStart={()=>{
          console.log('开始加载')
        }}

        // 加载成功完成时调用此回调函数
        onLoad={()=>{
          console.log('加载成功')
        }}

        // 加载结束后，不论成功还是失败，调用此回调函数
        onLoadEnd={()=>{
          console.log('加载完成')
        }}

        // 决定当组件尺寸和图片尺寸不成比例的时候如何调整图片的大小
        resizeMode={'contain'}
      />
      <Text>加载RN本地图片</Text>
    </View>
  }

  // 加载网络图片
  loadNetImage(){
    return <View style={styles.imageItemViewStyle}>
      <Image
        source={{uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
        style={styles.imageStyle}
      />
      <Text>加载网络图片</Text>
    </View>
  }

  // 加载iOS Images.xcassets中的图片
  loadiOSImage(){
    return <View style={styles.imageItemViewStyle}>
      <Image
        source={{uri:'scence'}}
        style={styles.imageStyle}
      />
      <Text>加载iOS图片</Text>
    </View>
  }

  backgroundImageComponent(){
    return <View style={styles.imageItemViewStyle}>
      <ImageBackground
        source={{uri:'scence'}}
        style={[styles.imageStyle,{ justifyContent: 'center', alignItems: 'center'}]}
      >
        <Text style={{color:'blue'}}>背景图片组件</Text>
      </ImageBackground>
    </View>
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:70
  },
  imageItemViewStyle:{
    marginLeft:10,
    alignItems:'center',
    marginBottom:10
  },
  imageStyle:{
    width:100,
    height:100
  }
})