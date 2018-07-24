import React from 'react';
import {
  Dimensions,
  Platform
} from 'react-native';

const Utility = {
  screenSize: Dimensions.get('window'),
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android'
}


export default Utility;