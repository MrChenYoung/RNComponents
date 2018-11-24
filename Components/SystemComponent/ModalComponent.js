import React, { Component } from 'react';
import {
  StyleSheet,
  Modal,
  Text,
  View,
  Button
} from 'react-native';

export default class ModalExample extends Component {

  constructor(props) {
    super(props);
    this.state = {modalVisible: false};
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Modal
          // 弹出动画类型 'none', 'slide', 'fade'
          animationType={"slide"}

          // modal页面消失的时候调用(经测试好像没用) 安卓上返回按钮按下调用，且是必填项
          onRequestClose={() => {alert("modal消失")}}

          // modal页面显示以后调用
          onShow={()=>{alert('modal显示')}}

          // modal背景视图是否透明
          transparent={false}

          // 显示/隐藏modal
          visible={this.state.modalVisible}

          // The onOrientationChange callback is called when the orientation changes while the modal is being displayed. The orientation provided is only 'portrait' or 'landscape'. This callback is also called on initial render, regardless of the current orientation.
          // 仅限iOS系统
          // onOrientationChange={()=>alert('方向改变')}

          // ['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']
          // 仅限iOS系统
          // supportedOrientations={'portrait'}
        >
          <View style={styles.containerStyle}>
            <Button
              title='返回'
              onPress={()=>{
                this.setModalVisible(!this.state.modalVisible)
              }}
            />
          </View>
        </Modal>
          <Button
            title='显示Modal'
            onPress={()=>{
              this.setModalVisible(true)
            }}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
