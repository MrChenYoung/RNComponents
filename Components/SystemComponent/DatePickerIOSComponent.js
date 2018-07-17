import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  DatePickerIOS
} from 'react-native';

export default class DatePicker extends Component{
  render(){
    return <View style={styles.containnerStyle}>
      <DatePickerIOS
        style={styles.datePickerStyle}
        // 当前被选中的日期
        date={new Date()}

        // 时区差，单位是分钟。
        // 默认情况下，选择器会选择设备的默认时区。通过此参数，可以指定一个时区。举个例子，要使用北京时间（东八区），可以传递8 * 60
        timeZoneOffsetInMinutes={8 * 60}

        // 可选的最小的分钟单位 enum(1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30)
        minuteInterval={3}

        // 选择器模式 enum('date', 'time', 'datetime')
        mode={'datetime'}

        // 可选的最小日期
        // minimumDate={}

        // 可选的最大日期
        // maximumDate={}

        // 当用户修改日期或时间时调用此回调函数 唯一的参数是一个日期对象，表示新的日期和时间
        onDateChange={(date)=> {
          alert(date)
        }}
      />
    </View>
  }
}

const styles = StyleSheet.create({
  containnerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  datePickerStyle:{
    width:300,
    height:400
  }
})