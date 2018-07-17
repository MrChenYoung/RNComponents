import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  Dimensions
} from 'react-native';

const screenSize = Dimensions.get('window');

import Swiper from 'react-native-swiper';

export default class TestComponent extends Component{
  render(){
    return <View style={styles.containerStyle}>
      {this.getSwiper(true)}
      {this.getSwiper(false)}
    </View>
  }


  getSwiper(horizontal){
    return <View style={{width:screenSize.width,height:200,marginBottom:20}}>
      <Swiper
        // 组件宽度
        // width={200}

        // 组件高度
        height={200}

        // 默认展示第几张图片
        index={0}

        // 当幻灯片未加载的时候显示自定义加载程序
        loadMinimalLoader={<ActivityIndicator />}

        // 自己控制原点方向
        autoplayDirection={true}

        // 自动轮播
        autoplay={true}

        // 如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片
        loop={true}

        // 每隔1秒切换
        autoplayTimeout={1}

        // 水平方向，为false可设置为竖直方向
        horizontal={horizontal}

        // 允许自定义小圆点的样式
        paginationStyle={{bottom:5}}

        // 为false时不显示控制按钮
        showsButtons={true}

        // buttonWrapperStyle={{backgroundColor:'orange'}}

        // 下一个箭头样式
        nextButton={horizontal ? null : <Text style={{color:'white'}}>下一个</Text>}

        // 上一个箭头样式
        prevButton={horizontal ? null : <Text style={{color:'white'}}>下一个</Text>}

        // 为false不显示下方圆点
        showsPagination={true}

        // 未选中的圆点样式
        // dot={<Text style={{fontSize:25,color:'gray'}}>&bull;</Text>}

        // 选中的圆点样式
        // activeDot={<Text style={{fontSize:25,color:'blue'}}>&bull;</Text>}

        // 未选中圆点的样式
        // dotStyle={{backgroundColor:'red'}}

        // 未选中圆点的颜色
        dotColor={'white'}

        // 选中圆点的样式
        // activeDotStyle={{backgroundColor:'green'}}

        // 选中圆点的颜色
        activeDocColor={'blue'}

        // 拖动时索引更新调用
        onIndexChanged={(index)=>{
          // alert(index)
        }}
      >
        {this.getSwiperItems()}
      </Swiper>
    </View>
  }

  // 获取轮播图
  getSwiperItems(){
    let items = [];
    let images = [
      require('../../img/Swiper/swiper0.jpg'),
      require('../../img/Swiper/swiper1.jpg'),
      require('../../img/Swiper/swiper2.jpg'),
      require('../../img/Swiper/swiper3.jpg'),
      require('../../img/Swiper/swiper4.jpg'),
      require('../../img/Swiper/swiper5.jpg')
    ];

    for (let i = 0; i < 5; i++) {
      let img = images[i];
      items.push(
        <View style={{width:200,height:200}}>
          <Image
            source={img}
            style={{width:screenSize.width,height:200}}
            key={i}/>
        </View>
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
})