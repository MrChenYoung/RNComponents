import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Picker,
  TextInput,
  Platform
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

    let newDatas = [];

    for (let i = 0; i < datas.length; i++) {
      newDatas.push({key:'第'+i+'行',value:datas[i]})
    }

    this.state={
      selected:'点击展开菜单',
      selectIndex:0,
      pickerData:newDatas,
      androidPickerMode:'dialog'
    }
  }

  render(){
    let picker = Platform.OS === 'ios' ? this.getPickerForIOS() : this.getPickerForAndroid();

    return <View style={styles.containerStyle}>
      <Text
        style={styles.textStyle}
      >
        选中了第'{this.state.selectIndex}'个item,选中了:{datas[this.state.selectIndex]}
        </Text>
      <View style={{flexDirection:'row',height:40, justifyContent:'center',alignItems:'center',marginTop:20}}>
        <Text style={styles.textStyle}>
          选中第
        </Text>
        <TextInput
          style={styles.textInputStyle}
          underlineColorAndroid={'transparent'}
          value={String(this.state.selectIndex)}
          // defaultValue={'0'}
          onChangeText={(value)=>{
            // 安卓就是操蛋，不这样设置竟然不能删除输入框里面的内容
            if (Platform.OS === 'android') {
              this.setState({
                selectIndex:value
              })
            }

            // 更新状态机
            if (parseInt(value) >= 0 && parseInt(value) < this.state.pickerData.length){
              let selectValue = this.state.pickerData[value].key;
              this.setState({
                selected: selectValue,
                selectIndex:parseInt(value)
              })
            }
          }}
        />
        <Text style={styles.textStyle}>行</Text>
      </View>
      {picker}
    </View>
  }

  // 获取pickItem
  getPickerItems(){
    let items = [];
    for (let i = 0; i < this.state.pickerData.length; i++) {
      let dic = this.state.pickerData[i];
      items.push(<Picker.Item label={dic.value} value={dic.key} key={i}/>)
    }

    return items;
  }

  // 获取iOS Picker
  getPickerForIOS(){
    return <Picker
      // 样式
      style={styles.pickerStyle}

      // 某一项被选中时执行此回调
      // itemValue: 被选中项的value属性 itemPosition: 被选中项在picker中的索引位置
      onValueChange={(itemValue,itemPosition)=>{
        this.setState({
            selected:itemValue,
            selectIndex:itemPosition
          }
        )
      }}

      // 默认选中的值。可以是字符串或整数
      selectedValue={this.state.selected}

      // 指定应用在每项标签上的样式(仅限iOS系统)
      itemStyle={styles.pickerItemStyle}
    >
      {this.getPickerItems()}
    </Picker>
  }

  getPickerForAndroid(){
    return <View style={{flexDirection:'row',height:40,marginTop:10}}>
      <Picker
        style={{width:180,height:'100%',color:'gray'}}
        mode={'dropdown'}
        onValueChange={(itemValue,itemPosition)=>{
          this.setState({
            androidPickerMode:itemValue
          })
        }}
      >
        <Picker.Item label={'选择Picker样式'} value={'dialog'}/>
        <Picker.Item label={'下拉式'} value={'dropdown'}/>
        <Picker.Item label={'弹框式'} value={'dialog'}/>
      </Picker>
      <Picker
        // 样式
        style={styles.pickerForAndroidStyle}

        // 某一项被选中时执行此回调
        // itemValue: 被选中项的value属性 itemPosition: 被选中项在picker中的索引位置
        onValueChange={(itemValue,itemPosition)=>{
          this.setState({
              selected:itemValue,
              selectIndex:itemPosition
            }
          )
        }}

        // 默认选中的值。可以是字符串或整数
        selectedValue={this.state.selected}

        // 如果设为false，则会禁用此选择器(仅限Android系统)
        enabled={true}

        // 可以指定在用户点击选择器时，以怎样的形式呈现选项(仅限Android系统)
        // dialog（对话框形式）: 显示一个模态对话框。默认选项
        // dropdown（下拉框形式）: 以选择器所在位置为锚点展开一个下拉框
        mode={this.state.androidPickerMode}

        // 设置选择器的提示字符串,在Android的对话框模式中用作对话框的标题(仅限Android系统)
        // 弹出框的标题(只有mode为dialog时起作用)
        prompt={'中国所有的省份'}
      >
        {this.getPickerItems()}
      </Picker>
    </View>
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
    backgroundColor:'red',
    marginTop:100,
  },
  pickerItemStyle:{
    fontSize:14,
    color:'blue'
  },
  pickerForAndroidStyle:{
    width:140,
    height:'100%',
    color:'gray',
  },
  textStyle:{
    fontSize:18,
    color:'blue'
  },
  textInputStyle:{
    width:30,
    height:40,
    borderWidth:1,
    borderColor:'#d8d8d8',
    textAlign:'center'
  }
})
