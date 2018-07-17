import React, { Component } from 'react';
import {
  StyleSheet,
  SectionList,
  View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';
import PropTypes from 'prop-types';

export default class MySectionList extends Component{
  constructor(props){
    super(props);
  }

  // 默认属性
  static defaultProps = {
    data:[],
    selectItem:(()=>{}),
    keyExtractor:((item, index)=>String(index))
  }

  // 属性类型
  static propTypes = {
    // 属性必须是数组
    data:PropTypes.array,
    // 属性必须是函数
    selectItem:PropTypes.func
  }

  render(){
    return <View style={styles.listContainerStyle}>
      <SectionList
        sections={this.props.data}
        keyExtractor={this.props.keyExtractor}
        renderItem={(item)=>this.renderItem(item)}
        renderSectionHeader={this.renderSectionHeader}
        ItemSeparatorComponent={this.ItemSeparatorComponent}
      />
    </View>
  }

  // 每一行内容
  renderItem(info){
    return <TouchableHighlight
      underlayColor={'#e8e8e8'}
      onPress={()=>{this.props.selectItem(info.item.title,info.section.platform,info.section.usability)}}
    >
      <View style={styles.cellContainerStyle}>
        <Text style={styles.cellTextStyle}>
          {info.item.title}
        </Text>
        <Image
          style={styles.cellArrowImgStyle}
          source={require('../../img/arrow.png')}
        />
      </View>
    </TouchableHighlight>
  }

  // 头部
  renderSectionHeader(info){
    return <View style={styles.sectionHeaderContainerStyle}>
      <Text style={styles.sectionHeaderTextStyle}>
        {info.section.key}
      </Text>
    </View>
  }

  // 分割线
  ItemSeparatorComponent(){
    return <View
      style={styles.itemSeparatorStyle}
    />
  }
}

const styles = StyleSheet.create({
  // 列表样式
  listContainerStyle:{
    flex:1,
    backgroundColor:'white',
    // marginTop:20
  },
  // 头部样式
  sectionHeaderContainerStyle:{
    height:30,
    backgroundColor:'#d8d8d8',
    justifyContent:'center',
    paddingLeft:5
  },
  // 头部文字样式
  sectionHeaderTextStyle:{
    fontSize:16,
    color:'#CD5C5C'
  },
  // 分割线样式
  itemSeparatorStyle:{
    height:0.5,
    backgroundColor:'#d8d8d8'
  },
  // 每一行样式
  cellContainerStyle:{
    flexDirection:'row',
    height:44,
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:10
  },
  // cell文字样式
  cellTextStyle:{
    fontSize:14,
    color:'black'
  },
  // cell箭头样式
  cellArrowImgStyle:{
    width:20,
    height:20,
    marginRight:8
  },
})