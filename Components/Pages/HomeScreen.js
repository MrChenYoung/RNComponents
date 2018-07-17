/**
 * Created by PC on 2017/7/18.
 */
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from "react-native";
import PropTypes from 'prop-types';

export default class HomeScreen extends Component {
  static defaultProps = {
    extensionComponent:<View />
  }

  static propTypes = {
    extensionComponent:PropTypes.node
  }

    render() {
        return (
          <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>首页</Text>
            {this.props.extensionComponent}
          </View>
        );
    }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    backgroundColor:'#f2a0ff',
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{
    fontSize:50
  }
})
