import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableHighlight,
  View,
  Text,
  Image
} from 'react-native';

import PropTypes from 'prop-types';

export default class HYFlatList extends Component{
  static defaultProps = {
    data:[],
    selectItem:(()=>{})
  }

  static propTypes = {
    data:PropTypes.array,
    selectItem:PropTypes.func
  }

  keyExtractor = (item, index)=>String(index);
  render(){
    return <View style={styles.listContainerStyle}>
      <FlatList
        data={this.props.data}
        keyExtractor={this.keyExtractor}
        renderItem={(item)=>this.renderItem(item)}
        ItemSeparatorComponent={this.ItemSeparatorComponent}
      />
    </View>
  }

  // 每一行内容
  renderItem(info){
    return <TouchableHighlight
      underlayColor={'#e8e8e8'}
      onPress={()=>{this.props.selectItem(info.item.name)}}
    >
      <View style={styles.cellContainerStyle}>
        <View>
          <Text style={styles.cellTextStyle}>
            {info.item.name}
          </Text>
          <Text style={styles.cellDetailTextStyle}>
            {info.item.detail}
          </Text>
        </View>
        <Image
          style={styles.cellArrowImgStyle}
          source={require('../../img/arrow.png')}
        />
      </View>
    </TouchableHighlight>
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
  cellDetailTextStyle:{
    fontSize:12,
    color:'gray',
    marginTop:3
  },
  // cell箭头样式
  cellArrowImgStyle:{
    width:20,
    height:20,
    marginRight:8
  },
})
