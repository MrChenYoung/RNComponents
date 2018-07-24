import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import { StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';

import SystemComponent from '../SystemComponent/SystemComponent';
import SystemAPI from '../SystemAPI/SystemAPIComponent';
import SystemLibrary from '../SystemLibrary/SystemLibraryConponent';
import ThreeThirdComponent from '../ThreeThirdComponent/ThreeThirdComponent';
import OtherComponent from '../Other/OtherComponent';

// 系统组件
import FlatListComponent from '../SystemComponent/FlatListComponent'
import SectionListComponent from '../SystemComponent/SectionListComponent'
import TouchableComponent from '../SystemComponent/TouchableComponent'
import ImageComponent from '../SystemComponent/ImageComponent'
import ButtonComponent from '../SystemComponent/ButtonComponent'
import ActivityIndicator from '../SystemComponent/ActivityIndicatorComponent'
import TabbarIOSComponent from '../SystemComponent/TabbarIOSComponent'
import NavigatorIOSComponent from '../SystemComponent/NavigatorIOSComponent'
import DatePickerIOSComponent from '../SystemComponent/DatePickerIOSComponent'
import CheckBoxComponent from '../SystemComponent/CheckBoxComponent';
import DrawerLayoutAndroid from '../SystemComponent/DrawerLayoutAndroid';
import KeyboardAvoidingViewComponent from '../SystemComponent/KeyboardAvoidingViewComponent';
import MaskedViewIOSComponent from '../SystemComponent/MaskedViewIOSComponent';
import ModalComponent from '../SystemComponent/ModalComponent';
import PickerComponent from '../SystemComponent/PickerComponent';
import PickerIOSComponent from '../SystemComponent/PickerIOSComponent';
import ProgressBarAndroidComponent from '../SystemComponent/ProgressBarAndroidComponent';
import ProgressViewIOSComponent from '../SystemComponent/ProgressViewIOSComponent';
import RefreshControlComponent from '../SystemComponent/RefreshControlComponent';
import ScrollViewComponent from '../SystemComponent/ScrollViewComponent';
import SegmentedControlIOSComponent from '../SystemComponent/SegmentedControlIOSComponent';
import SliderComponent from '../SystemComponent/SliderComponent';
import StatusBarComponent from '../SystemComponent/StatusBarComponent';
import SwitchComponent from '../SystemComponent/SwitchComponent';
import TextComponent from '../SystemComponent/TextComponent';
import TextInputComponent from '../SystemComponent/TextInputComponent';
import ToolbarAndroidComponent from '../SystemComponent/ToolbarAndroidComponent';
import ViewComponent from '../SystemComponent/ViewComponent';
import ViewPagerAndroidComponent from '../SystemComponent/ViewPagerAndroidComponent';
import WebViewComponent from '../SystemComponent/WebViewComponent';
import ClipboardComponent from '../SystemComponent/ClipboardComponent';
import DatePickerAndroidComponent from '../SystemComponent/DatePickerAndroidComponent';
import TimePickerAndroidComponent from '../SystemComponent/TimePickerAndroidComponent';


// 系统API
import ActionSheetIOSAPI from '../SystemAPI/ActionSheetIOSAPI';
import ImagePickerIOSAPI from '../SystemAPI/ImagePickerIOSAPI';
import AlertIOSAPI from '../SystemAPI/AlertIOSAPI';
import AlertAPI from '../SystemAPI/AlertAPI';
import AnimatedAPI from '../SystemAPI/AnimatedAPI';
import AppStateAPI from '../SystemAPI/AppStateAPI';
import ToastAndroidAPI from '../SystemAPI/ToastAndroidAPI';
import NetInfoAPI from '../SystemAPI/NetInfoAPI';
import AsyncStorageAPI  from '../SystemAPI/AsyncStorageAPI';
import DimensionsAPI from '../SystemAPI/DimensionsAPI';
import BackAndroidAPI from '../SystemAPI/BackAndroidAPI';
import StyleSheetAPI from '../SystemAPI/StyleSheetAPI';
import PixelRatioAPI from '../SystemAPI/PixelRatioAPI';
import VibrationAPI from '../SystemAPI/VibrationAPI';
import LinkingAPI from '../SystemAPI/LinkingAPI';
import LayoutAnimationAPI from '../SystemAPI/LayoutAnimationAPI';

// 系统库
import MyStackNavigator from '../SystemLibrary/MyStackNavigator';
import MyTabNavigatorBottom from '../SystemLibrary/MyTabNavigatorBottom';
import MyTabNavigatorTop from '../SystemLibrary/MyTabNavigatorTop';
import MyDrawerNavigator from '../SystemLibrary/MyDrawerNavigator';

// 第三方组件
import KeyboardAwareScrollView from '../ThreeThirdComponent/KeyboardAwareScrollView';
import ReactnativeSwiper from '../ThreeThirdComponent/ReactnativeSwiper';
import VectorIconsComponent from '../ThreeThirdComponent/VectorIconsComponent';

// 其他
import DeviceEventEmitterPageOne from '../Other/DeviceEventEmitterPageOne';
import DeviceEventEmitterPageTwo from '../Other/DeviceEventEmitterPageTwo';


// tabBarIcon
const systemComponentNormal = require('../../img/Tabbar/systemComponent.png');
const systemComponentOn = require('../../img/Tabbar/systemCompont_on.png');
const systemApiNormal = require('../../img/Tabbar/systemApi.png');
const systemApiOn = require('../../img/Tabbar/systemApi_on.png');
const systemLibraryNormal = require('../../img/Tabbar/systemLibrary.png');
const systemLibraryOn = require('../../img/Tabbar/systemLibrary_on.png');
const threeThirdNormal = require('../../img/Tabbar/threeThird.png');
const threeThirdOn = require('../../img/Tabbar/threeThird_on.png');
const otherNormal = require('../../img/Tabbar/other.png');
const otherOn = require('../../img/Tabbar/other_on.png');

const TabBarRouteConfig = {
  SystemComponent:{
    screen:SystemComponent,
      navigationOptions:{
        headerTitle:'系统组件',
        tabBarLabel:'系统组件',
        tabBarIcon:({tintColor,focused})=> (
        <Image
          source={focused ? systemComponentOn : systemComponentNormal}
          style={styles.tabBarIconStyle}
        />
      )
    }
  },
  SystemAPI:{
    screen:SystemAPI,
      navigationOptions:{
        headerTitle:'系统API',
        tabBarLabel:'系统API',
        tabBarIcon:({tintColor,focused})=> (
        <Image
          source={focused ? systemApiOn : systemApiNormal}
          style={styles.tabBarIconStyle}
        />
      )
    }
  },
  SystemLibrary:{
    screen:SystemLibrary,
      navigationOptions:{
        headerTitle:'系统库',
        tabBarLabel:'系统库',
        tabBarIcon:({tintColor,focused})=> (
        <Image
          source={focused ? systemLibraryOn : systemLibraryNormal}
          style={styles.tabBarIconStyle}
        />
      )
    }
  },
  ThreeThirdComponent:{
    screen:ThreeThirdComponent,
      navigationOptions:{
        headerTitle:'第三方组件',
        tabBarLabel:'第三方组件',
        tabBarIcon:({tintColor,focused})=> (
        <Image
          source={focused ? threeThirdOn : threeThirdNormal}
          style={styles.tabBarIconStyle}
        />
      )
    }
  },
  OtherComponent:{
    screen:OtherComponent,
    navigationOptions:{
      headerTitle:'其他',
      tabBarLabel:'其他',
      tabBarIcon:({tintColor,focused})=>(
        <Image
          source={focused ? otherOn : otherNormal}
          style={styles.tabBarIconStyle}
        />
      )
    }
  }
}

const TabBarNavigatorConfig = {
  initialRouteName:'SystemAPI',
  swipeEnabled:true,
  tabBarComponent:TabBarBottom,
  tabBarPosition:'bottom',
  tabBarOptions:{},
  lazy:true
}

const TabBar = TabNavigator(TabBarRouteConfig, TabBarNavigatorConfig);

const StackNavigatorRouteConfig = {
  Tab:{
    screen:TabBar
  },
  StackNavigatorPage:{
    screen:MyStackNavigator,
    navigationOptions:{
      headerTitle:'StackNavigator'
    }
  },
  TabNavigatorBottomPage:{
    screen:MyTabNavigatorBottom,
    navigationOptions:{
      headerTitle:'TabNavigatorBottom'
    }
  },
  TabNavigatorTopPage:{
    screen:MyTabNavigatorTop,
    navigationOptions:{
      headerTitle:'TabNavigatorTop'
    }
  },
  DrawerNavigatorPage:{
    screen:MyDrawerNavigator,
    navigationOptions:{
      headerTitle:'DrawerNavigator'
    }
  },
  FlatListPage:{
    screen:FlatListComponent,
    navigationOptions:{
      headerTitle:'FlatList'
    }
  },
  SectionListPage:{
    screen:SectionListComponent,
    navigationOptions:{
      headerTitle:'SectionList'
    }
  },
  TouchablePage:{
    screen:TouchableComponent,
    navigationOptions:{
      headerTitle:'Touchable'
    }
  },
  ImagePage:{
    screen:ImageComponent,
    navigationOptions:{
      headerTitle:'Image'
    }
  },
  ButtonPage:{
    screen:ButtonComponent,
    navigationOptions:{
      headerTitle:'Button'
    }
  },
  ActivityIndicatorPage:{
    screen:ActivityIndicator,
    navigationOptions:{
      headerTitle:'ActivityIndicator'
    }
  },
  TabBarIOSPage:{
    screen:TabbarIOSComponent,
    navigationOptions:{
      headerTitle:'TabBarIOS'
    }
  },
  NavigatorIOSPage:{
    screen:NavigatorIOSComponent,
    navigationOptions:{
      headerTitle:'Navigator'
    }
  },
  DatePickerIOSPage:{
    screen:DatePickerIOSComponent,
    navigationOptions:{
      headerTitle:'DatePickerIOS'
    }
  },
  ActionSheetIOSPage:{
    screen:ActionSheetIOSAPI,
    navigationOptions:{
      headerTitle:'ActionSheetIOS'
    }
  },
  ImagePickerIOSAPIPage:{
    screen:ImagePickerIOSAPI,
    navigationOptions:{
      headerTitle:'ImagePickerIOSAPI'
    }
  },
  DeviceEventEmitterOne:{
    screen:DeviceEventEmitterPageOne,
    navigationOptions:{
      headerTitle:'DeviceEventEmitterPageOne'
    }
  },
  DeviceEventEmitterTwo:{
    screen:DeviceEventEmitterPageTwo,
    navigationOptions:{
      headerTitle:'DeviceEventEmitterPageTwo'
    }
  },
  CheckBoxPage:{
    screen:CheckBoxComponent,
    navigationOptions:{
      headerTitle:'CheckBox'
    }
  },
  DrawerLayoutAndroidPage:{
    screen:DrawerLayoutAndroid,
    navigationOptions:{
      headerTitle:'DrawerLayoutAndroid'
    }
  },
  KeyboardAvoidingViewPage:{
    screen:KeyboardAvoidingViewComponent,
    navigationOptions:{
      headerTitle:'KeyboardAvoidingView'
    }
  },
  KeyboardAwareScrollViewPage:{
    screen:KeyboardAwareScrollView,
    navigationOptions:{
      headerTitle:'KeyboardAwareScrollView'
    }
  },
  MaskedViewIOSPage:{
    screen:MaskedViewIOSComponent,
    navigationOptions:{
      headerTitle:'MaskedViewIOS'
    }
  },
  ModalComponentPage:{
    screen:ModalComponent,
    navigationOptions:{
      headerTitle:'Modal'
    }
  },
  PickerPage:{
    screen:PickerComponent,
    navigationOptions:{
      headerTitle:'Picker'
    }
  },
  PickerIOSPage:{
    screen:PickerIOSComponent,
    navigationOptions:{
      headerTitle:'PickerIOS'
    }
  },
  ProgressBarAndroidPage:{
    screen:ProgressBarAndroidComponent,
    navigationOptions:{
      headerTitle:'ProgressBarAndroid'
    }
  },
  ProgressViewIOSPage:{
    screen:ProgressViewIOSComponent,
    navigationOptions:{
      headerTitle:'ProgressViewIOS'
    }
  },
  RefreshControlPage:{
    screen:RefreshControlComponent,
    navigationOptions:{
      headerTitle:'RefreshControl'
    }
  },
  ScrollViewPage:{
    screen:ScrollViewComponent,
    navigationOptions:{
      headerTitle:'ScrollView'
    }
  },
  SegmentedControlIOSPage:{
    screen:SegmentedControlIOSComponent,
    navigationOptions:{
      headerTitle:'SegmentedControlIOS'
    }
  },
  SliderPage:{
    screen:SliderComponent,
    navigationOptions:{
      headerTitle:'Slider'
    }
  },
  StatusBarPage:{
    screen:StatusBarComponent,
    navigationOptions:{
      headerTitle:'StatusBar'
    }
  },
  SwitchPage:{
    screen:SwitchComponent,
    navigationOptions:{
      headerTitle:'Switch'
    }
  },
  TextPage:{
    screen:TextComponent,
    navigationOptions:{
      headerTitle:'Text'
    }
  },
  TextInputPage:{
    screen: TextInputComponent,
    navigationOptions:{
      headerTitle:'TextInput'
    }
  },
  ToolbarAndroidPage:{
    screen:ToolbarAndroidComponent,
    navigationOptions:{
      headerTitle:'ToolbarAndroid'
    }
  },
  ViewPage:{
    screen: ViewComponent,
    navigationOptions:{
      headerTitle:'View'
    }
  },
  ViewPagerAndroidPage:{
    screen:ViewPagerAndroidComponent,
    navigationOptions:{
      headerTitle:'ViewPagerAndroid'
    }
  },
  WebViewPage:{
    screen:WebViewComponent,
    navigationOptions:{
      headerTitle:'WebView'
    }
  },
  AlertIOSPage:{
    screen:AlertIOSAPI,
    navigationOptions:{
      headerTitle:'AlertIOS'
    }
  },
  AlertPage:{
    screen:AlertAPI,
    navigationOptions:{
      headerTitle:'Alert'
    }
  },
  AnimatedPage:{
    screen:AnimatedAPI,
    navigationOptions:{
      headerTitle:'Animated'
    }
  },
  AppStatePage:{
    screen:AppStateAPI,
    navigationOptions:{
      headerTitle:'AppState'
    }
  },
  ReactnativeSwiperPage:{
    screen:ReactnativeSwiper,
    navigationOptions:{
      headerTitle:'ReactnativeSwiper'
    }
  },
  VectorIconsPage:{
    screen:VectorIconsComponent,
    navigationOptions:{
      headerTitle:'react-native-vector-icons'
    }
  },
  ClipboardPage:{
    screen:ClipboardComponent,
    navigationOptions:{
      headerTitle:'Clipboard'
    }
  },
  DatePickerAndroidPage:{
    screen:DatePickerAndroidComponent,
    navigationOptions:{
      headerTitle:'DatePickerAndroid'
    }
  },
  TimePickerAndroidPage:{
    screen:TimePickerAndroidComponent,
    navigationOptions:{
      headerTitle:'TimePickerAndroid'
    }
  },
  ToastAndroidPage:{
    screen:ToastAndroidAPI,
    navigationOptions:{
      headerTitle:'ToastAndroid'
    }
  },
  NetInfoPage:{
    screen:NetInfoAPI,
    navigationOptions:{
      headerTitle:'NetInfo'
    }
  },
  AsyncStoragePage:{
    screen:AsyncStorageAPI,
    navigationOptions:{
      headerTitle:'AsyncStorage'
    }
  },
  DimensionsPage:{
    screen:DimensionsAPI,
    navigationOptions:{
      headerTitle:'Dimensions'
    }
  },
  BackAndroidPage:{
    screen:BackAndroidAPI,
    navigationOptions:{
      headerTitle:'BackAndroid'
    }
  },
  StyleSheetPage:{
    screen:StyleSheetAPI,
    navigationOptions:{
      headerTitle:'StyleSheet'
    }
  },
  PixelRatioPage:{
    screen:PixelRatioAPI,
    navigationOptions:{
      headerTitle:'PixelRatio'
    }
  },
  VibrationPage:{
    screen:VibrationAPI,
    navigationOptions:{
      headerTitle:'Vibration'
    }
  },
  LinkingPage:{
    screen:LinkingAPI,
    navigationOptions:{
      headerTitle:'Linking'
    }
  },
  LayoutAnimationPage:{
    screen:LayoutAnimationAPI,
    navigationOptions:{
      headerTitle:'LayoutAnimation'
    }
  }
}

const StackNavigation = StackNavigator(StackNavigatorRouteConfig);
export default StackNavigation;

const styles = StyleSheet.create({
  tabBarIconStyle:{
    width:20,
    height:20
  }
})