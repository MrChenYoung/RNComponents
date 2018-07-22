import React from 'react';
import {
  Dimensions
} from 'react-native';

const Utility = {
  screenSize:Dimensions.get('window'),
  screenWidth:Dimensions.get('window').width,
  screenHeight:Dimensions.get('window').height
}

export default Utility;