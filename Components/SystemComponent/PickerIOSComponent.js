import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  PickerIOS
} from 'react-native';

const datas = [
  '北京市(京)',
  '天津市(津)',
  '上海市(沪)',
  '重庆市(渝)',
  '河北省(冀)',
  '河南省(豫)',
  '云南省(云)',
  '辽宁省(辽)',
  '黑龙江省(黑)',
  '湖南省(湘)',
  '安徽省(皖)',
  '山东省(鲁)',
  '新疆维吾尔(新)',
  '江苏省(苏)',
  '浙江省(浙)',
  '江西省(赣)',
  '湖北省(鄂)',
  '广西壮族(桂)',
  '甘肃省(甘)',
  '山西省(晋)',
  '内蒙古(蒙)',
  '陕西省(陕)',
  '吉林省(吉)',
  '福建省(闽)',
  '贵州省(贵)',
  '广东省(粤)',
  '青海省(青)',
  '西藏(藏)',
  '四川省(川)',
  '宁夏回族(宁)',
  '海南省(琼)',
  '台湾省(台)',
  '香港特别行政区',
  '澳门特别行政区'
]

export default class TestComponent extends Component{
  constructor (){
    super();

    this.state={
      selectIndex:0,
      selectValue:datas[0]
    }
  }

  render(){
    return <View style={styles.containerStyle}>
      <Text
        style={styles.textStyle}
      >
        选中了第'{this.state.selectIndex}'个item,选中了:{this.state.selectValue}
        </Text>
      <View style={{flexDirection:'row', height:40, justifyContent:'center',alignItems:'center',marginTop:20}}>
        <Text style={styles.textStyle}>
          选中第
        </Text>
        <TextInput
          style={styles.textInputStyle}
          value={String(this.state.selectIndex)}
          onChangeText={(value)=>{
            // 更新状态机
            if (parseInt(value) >= 0 && parseInt(value) < datas.length){
              let selValue = datas[value];

              this.setState({
                selectIndex:parseInt(value),
                selectValue:selValue
              })
            }


          }}
        />
        <Text style={styles.textStyle}>
          行
        </Text>
      </View>
      <PickerIOS
        style={styles.pickerStyle}

        // item样式
        itemStyle={styles.pickerItemStyle}

        // 选中的值
        selectedValue={this.state.selectValue}

        // 当值发生变化的时候进行回调
        onValueChange={(selectValue,selectIndex)=>{
          this.setState({selectIndex,selectValue});
        }}
      >
        {this.getItems()}
      </PickerIOS>
    </View>
  }

  getItems(){
    let items = [];
    for (let i = 0; i < datas.length; i++) {
      items.push(
        <PickerIOS.Item
          key={i + ''}
          value={datas[i]}
          label={datas[i]}
        />
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
  pickerStyle:{
    width:'100%',
    height:200,
  },
  pickerItemStyle:{
    fontSize:16,
    color:'blue'
  },
  textStyle:{
    fontSize:16,
    color:'gray',
  },
  textInputStyle:{
    width:30,
    height:30,
    borderWidth:1,
    borderColor:'#d8d8d8',
    textAlign:'center'
  }
})