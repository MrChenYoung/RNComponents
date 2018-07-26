import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';

export default class HYButton extends Component{
  constructor (){
    super();

  }

  static defaultProps = {
    title:'',
    enabled:true,
    bgColor:'white',
    width:60.0,
    height:40.0,
    borderWidth:0,
    borderColor:'#d8d8d8',
    borderRadius:0,
    titleColor:'blue',
    fontSize:14.0,
    extendStyle:{},
    onPress:()=>{}
  }

  static propTypes = {
    title:PropTypes.string.isRequired,
    enabled:PropTypes.bool,
    bgColor:PropTypes.string,
    width:PropTypes.number,
    height:PropTypes.number,
    borderWidth:PropTypes.number,
    borderColor:PropTypes.string,
    borderRadius:PropTypes.number,
    titleColor:PropTypes.string,
    fontSize:PropTypes.number,
    extendStyle:PropTypes.object,
    onPress:PropTypes.func
  }

  render(){
    return <TouchableHighlight
      style={
        [
          styles.containerStyle,
          this.props.extendStyle,
          {backgroundColor:this.props.enabled ? this.props.bgColor : '#d8d8d8'},
          {width:this.props.width,height:this.props.height},
          {borderWidth:this.props.borderWidth,borderColor:this.props.borderColor,borderRadius:this.props.borderRadius},
          {opacity:this.props.enabled ? 1 : 0.8}
          ]
      }
      disabled={!this.props.enabled}
      underlayColor={'#d8d8d8'}
      activeOpacity={0.8}
      onPress={()=>{
        this.props.onPress()
      }}
    >
      <View>
        <Text
          style={
            [
              {color:this.props.titleColor},
              {fontSize:this.props.fontSize},
              // {opacity:0.8},
              this.props.enabled ? {} : {color:'gray'}
            ]
          }
        >
          {this.props.title}
        </Text>
      </View>
      </TouchableHighlight>
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    justifyContent:'center',
    alignItems:'center',
    padding:5,
  }
})