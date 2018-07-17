import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImagePickerIOS,
  Image,
  TouchableHighlight
} from 'react-native';

export default class ImagePicker extends Component{
  constructor (props){
    super(props);

    this.state={
      images:[]
    }
  }

  render(){
      return <View style={styles.containner}>
        {this.allImagesComponent()}
      </View>
  }


  // 显示所有的图片
  allImagesComponent(){
    let imageComponents = [];
    for (let i = 0; i < this.state.images.length + 1; i++) {
      let imageComp = i === this.state.images.length ?
        <Image
          source={require('../../img/add.png')}
          style={styles.imageStyle}
        /> :
        <Image
          source={{uri:this.state.images[i]}}
          style={styles.imageStyle}
        />;
        let bgView = i === this.state.images.length ?
          <TouchableHighlight
            onPress={()=>{this.pickImage()}}
            style={styles.imageBgViewStyle}
            underlayColor={'#e8e8e8'}
          >
            <View>
              {imageComp}
            </View>
          </TouchableHighlight> :
          <View style={styles.imageBgViewStyle}>
            {imageComp}
          </View>;
      imageComponents.push(
        bgView
      )
    }

    return imageComponents;
  }


  // 选择照片
  pickImage(){
    ImagePickerIOS.openSelectDialog({},(imageUri)=>{
      // 选择完成
      let imgs = this.state.images;
      imgs.push(imageUri)

      this.setState({
        images:imgs
      })
    },()=>{
      alert('取消选择')
    })
  }
}

const styles = StyleSheet.create({
  containner:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  imageBgViewStyle:{
    width:85,
    height:85,
    marginLeft:10,
    borderWidth:1,
    borderColor:'#e8e8e8',
    justifyContent:'center',
    alignItems:'center'
  },
  imageStyle:{
    width:80,
    height:80,
  }
})