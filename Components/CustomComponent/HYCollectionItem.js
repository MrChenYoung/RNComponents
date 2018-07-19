import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  ScrollView,
  Dimensions
} from 'react-native'
import PropTypes from 'prop-types';

const screenSize = Dimensions.get('window');

export default class TestComponent extends Component{
  static defaultProps = {
    columnNumber:3, // 列数
    borderWidth:1, // 分割线的宽度
    borderColor:"#ccc",
    itemContentViews:[], // item内容
    itemClicked:(index)=>{}
  }

  static propTypes = {
    columnNumber:PropTypes.number,
    borderWidth:PropTypes.number,
    borderColor:PropTypes.string,
    itemContentViews:PropTypes.array,
    itemClicked:PropTypes.func
  }

  render(){
    return <View style={styles.containerStyle}>
      <ScrollView
        style={styles.scrollStyle}
        contentContainerStyle={styles.scrollContentStyle}
      >
        {this.getItems()}
      </ScrollView>
    </View>
  }

  componentDidMount () {
    // alert(this.props.itemContentViews.length);
  }

  getItems(){
    let items = [];
    let cellWidth = screenSize.width / this.props.columnNumber;
    let cellBaseStyle = { width:cellWidth, height:cellWidth, backgroundColor:'white',justifyContent:'center',alignItems:'center'};
    let normalCellStyle = {borderColor:this.props.borderColor,borderTopWidth:this.props.borderWidth, borderRightWidth:this.props.borderWidth};
    let rightCellStyle = {borderColor:this.props.borderColor, borderTopWidth:this.props.borderWidth};
    let bottomCellStyle = {borderColor:this.props.borderColor,borderBottomWidth:this.props.borderWidth};

    let remainder = this.props.itemContentViews.length%this.props.columnNumber;
    let baseRowNum = parseInt(this.props.itemContentViews.length/this.props.columnNumber);
    let rowNum = remainder === 0 ? baseRowNum : baseRowNum + 1;

    for (let i = 0; i < this.props.itemContentViews.length; i++) {
      let currentRow = parseInt(i/this.props.columnNumber) + 1;
      let containerStyle = {};
      if ((i + 1)%this.props.columnNumber === 0){
        containerStyle = currentRow === rowNum ? {} : rightCellStyle;
      } else if (parseInt(i/this.props.columnNumber) + 1 === rowNum){
        containerStyle = {borderRightWidth:this.props.borderWidth,borderColor:this.props.borderColor};
      }else {
        containerStyle = normalCellStyle;
      }

      if (currentRow === rowNum && rowNum === 1){
        containerStyle = normalCellStyle;
      }

      let bottom = currentRow === rowNum || (currentRow === rowNum - 1) ? bottomCellStyle : {};//i + 1 + this.props.columnNumber >= this.props.itemContentViews.length
      let cellStyles = [cellBaseStyle,containerStyle,bottom];
      items.push(
        <TouchableHighlight
          underlayColor={'#d8d8d8'}
          onPress={()=>this.props.itemClicked(i)}
          key={i}
        >
          <View
            style={cellStyles}
          >
            {this.props.itemContentViews[i]}
          </View>
        </TouchableHighlight>
      )
    }

    return items;
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center'
  },
  scrollStyle:{
    flex:1,

  },
  scrollContentStyle:{
    alignItems:'center',
    flexDirection:'row',
    flexWrap:'wrap'
  },
  textStyle:{
    fontSize:18,
    color:'blue'
  }
})