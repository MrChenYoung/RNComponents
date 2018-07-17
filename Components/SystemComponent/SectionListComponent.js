import React, { Component } from 'react';
import { StyleSheet, View, Text, SectionList}  from 'react-native';

export default class sectionList extends Component{

  // 重新设置每一行数据的key
  keyExtractor = (item, index) => String(index);

  render(){
    let sections = [
      { key: "A", data: [{ title: "阿童木" }, { title: "阿玛尼" }, { title: "爱多多" }] },
      { key: "B", data: [{ title: "表哥" }, { title: "贝贝" }, { title: "表弟" }, { title: "表姐" }, { title: "表叔" }] },
      { key: "C", data: [{ title: "成吉思汗" }, { title: "超市快递" }] },
      { key: "W", data: [{ title: "王磊" }, { title: "王者荣耀" }, { title: "往事不能回味" },{ title: "王小磊" }, { title: "王中磊" }, { title: "王大磊" }] },
    ];

    return <View>
      <SectionList
        // 数据
        sections={sections}
        // 每一行
        renderItem={this.renderItem}
        // 每个section头部
        renderSectionHeader={this.renderSectionHeader}
        // 行与行之间的分隔线组件。不会出现在第一行之前和最后一行之后
        ItemSeparatorComponent={this.ItemSeparatorComponent}
        // 每个section之间的分隔组件
        SectionSeparatorComponent={this.sectionSeparatorComponent}
        // 列表为空时渲染该组件。可以是React Component, 也可以是一个render函数， 或者渲染好的element
        ListEmptyComponent={<Text>空列表</Text>}
        // 头部组件
        ListHeaderComponent={this.listHeaderComponent}
        // 尾部组件
        ListFooterComponent={this.listFooterComponent}
        // 此函数用于为给定的item生成一个不重复的key。Key的作用是使React能够区分同类元素的不同个体，以便在刷新时能够确定其变化的位置，减少重新渲染的开销。若不指定此函数，则默认抽取item.key作为key值。若item.key也不存在，则使用数组下标。
        keyExtractor={this.keyExtractor}
      />
    </View>
  }

  // 每一行内容
  renderItem(info){
    var txt = info.item.title;
    return <Text
      style={styles.rowStyle}>{txt}</Text>
  }

  // 每个section头部
  renderSectionHeader(info){
    var txt = info.section.key;
    return <Text
      style={styles.sectionHeaderStyle}>{txt}</Text>
  }

  // 行与行之间的分隔线组件
  ItemSeparatorComponent(){
    return <View
      style={styles.itemSeparatorStyle}
    />
  }

  // 每个section之间的分隔组件
  sectionSeparatorComponent(){
    return <View
      style={{height:20,backgroundColor:'blue'}}
    />
  }

  listHeaderComponent(){
    return <View
      style={{backgroundColor:'yellow',height:10}}
    />
  }
  // 尾部组件
  listFooterComponent(){
    return <View
      style={{backgroundColor:'red',height:10}}
    />
  }
}

const styles = StyleSheet.create({
  rowStyle:{
    height: 60,
    textAlignVertical: 'center',
    backgroundColor: "#ffffff",
    color: '#5C5C5C',
    fontSize: 15
  },
  sectionHeaderStyle:{
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#9CEBBC',
    color: 'white',
    fontSize: 30
  },
  itemSeparatorStyle:{
    height:1,
    backgroundColor:'red'
  }
});