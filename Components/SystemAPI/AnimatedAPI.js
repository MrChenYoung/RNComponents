import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  Easing
} from 'react-native';

import PropTypes from 'prop-types';

export default class Animated extends Component{
  constructor (){
    super();

    let defaultValue = new Animated.Value(0);
    this.state = {
      viewOpacity: defaultValue
    }
  }

  render(){
    return <Animated.View style={[styles.containerStyle,{opacity:this.state.viewOpacity}]}>
      <Text>动画文字</Text>
    </Animated.View>
  }

  componentDidMount () {
    Animated.timing(this.state.viewOpacity,{
      toValue:1,
      duration:2500,
      easing: Easing.linear
    } ).start();
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})


// class BeginAnimatButton extends Component{
//   static defaultProps = {
//     beginAnimate:()=>{}
//   }
//
//   static propTypes = {
//     beginAnimate:PropTypes.func
//   }
//
//   render(){
//     return <TouchableHighlight
//       underlayColor={'orange'}
//       activeOpacity={0.5}
//       onPress={()=>{
//         this.props.beginAnimate();
//       }}
//       style={styles.beginAnimateButtonViewStyle}
//     >
//       <View >
//         <Text style={styles.beginAnimateButtonTextStyle}>
//           开始动画
//         </Text>
//       </View>
//     </TouchableHighlight>
//   }
// }
//
// export default class TestComponent extends Component{
//   render(){
//     return <ScrollView
//       style={styles.scrollViewStyle}
//       contentContainerStyle={styles.contentStyle}
//     >
//       <View
//         style={styles.innerViewStyle}
//       >
//         <Text>
//         Animated.timing:
//         </Text>
//         <View style={{marginLeft:80}}>
//           <Image
//             source={require('../../img/add.png')}
//             style={{width:60,height:60}}
//           />
//           <BeginAnimatButton beginAnimate={()=>{alert('123')}}/>
//         </View>
//       </View>
//     </ScrollView>
//   }
// }
//
// const styles = StyleSheet.create({
//   containerStyle:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   scrollViewStyle:{
//     flex:1,
//   },
//   contentStyle:{
//     alignItems:'center'
//   },
//   innerViewStyle:{
//     flexDirection:'row',
//     justifyContent:'center',
//     alignItems:'center',
//     width:'100%',
//     height:80,
//   },
//   beginAnimateButtonViewStyle:{
//     width:70,
//     height:25,
//     borderRadius:5,
//     backgroundColor:'orange',
//     padding:3,
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   beginAnimateButtonTextStyle:{
//     color:'white',
//     fontSize:14
//   }
// })