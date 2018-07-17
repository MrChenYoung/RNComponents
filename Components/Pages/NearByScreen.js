/**
 * Created by PC on 2017/7/18.
 */
import React, {Component} from 'react';
import {Text, View} from "react-native";
import PropTypes from 'prop-types';

export default class NearByScreen extends Component {
  static defaultProps = {
    extensionComponent:null
  }

  static propTypes = {
    extensionComponent:PropTypes.node
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#c6ff97', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 50}}>
          附近
        </Text>
        {this.props.extensionComponent}
      </View>
    );
  }
}