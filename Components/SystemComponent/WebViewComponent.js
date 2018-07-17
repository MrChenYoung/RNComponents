import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  WebView
} from 'react-native';

export default class TestComponent extends Component{
  render(){
    return <WebView
      style={{flex:1}}

      // 指定HTML5视频是在网页当前位置播放还是使用原生的全屏播放器播放。 默认值为false
      // iOS
      allowsInlineMediaPlayback={true}

      // 是否弹性
      // iOS
      bounces={true}

      // 边距
      // iOS
      contentInset={{top:20,left:20,bottom:20,right:20}}

      // 探测网页中某些特殊数据类型，自动生成可点击的链接，默认情况下仅允许探测电话号码
      // 'phoneNumber','link','address','calendarEvent','none','all'
      // iOS
      dataDetectorTypes={['phoneNumber','link','address','calendarEvent']}

      // 允许为webview发起的请求运行一个自定义的处理函数。返回true或false表示是否要继续执行响应的请求
      // iOS
      onShouldStartLoadWithRequest={()=>{
        return true;
      }}

      // iOS
      scrollEnabled={true}

      // 指定是否开启DOM本地存储
      // Android
      domStorageEnabled={true}

      // 仅限Android平台。iOS平台JavaScript是默认开启的
      // Android
      javaScriptEnabled={true}

      // 指定混合内容模式。即WebView是否应该允许安全链接（https）页面中加载非安全链接（http）的内容
      // ('never', 'always', 'compatibility')
      // Android
      mixedContentMode={'compatibility'}

      // 用于控制页面上的表单是否启用自动保存/自动补全功能
      // Android
      saveFormDataDisabled={true}


      // 为WebView设置user-agent字符串标识。这一字符串也可以在原生端用WebViewConfig来设置，但js端的设置会覆盖原生端的设置
      // Android
      userAgent={''}


      // 在WebView中载入一段静态的html代码或是一个url（还可以附带一些header选项）
      source={{uri:'http://www.baidu.com'}}

      automaticallyAdjustContentInsets={true}

      // 在网页加载完成之后，还可以主动调用此方法（以ref形式调用）继续给WebView注入JS代码。注入后会立即执行
      injectJavaScript={()=>{
        alert('注入JS')
      }}

      // 设置在网页加载之前注入的一段JS代码
      injectedJavaScript={''}

      // 设置页面中的HTML5音视频是否需要在用户点击后再开始播放。默认值为true
      mediaPlaybackRequiresUserAction={true}

      // 加载失败时调用
      onError={()=>{
        alert('加载失败')
      }}

      // 加载成功时调用
      onLoad={()=>{
        alert('加载成功')
      }}

      // 加载结束时（无论成功或失败）调用
      onLoadEnd={()=>{
        alert('加载结束')
      }}

      // 加载开始时调用
      onLoadStart={()=>{
        alert('开始加载')
      }}

      // 在webview内部的网页中调用window.postMessage方法时可以触发此属性对应的函数，从而实现网页和RN之间的数据交换。 设置此属性的同时会在webview中注入一个postMessage的全局函数并覆盖可能已经存在的同名实现
      onMessage={()=>{
        alert('收到消息')
      }}

      onNavigationStateChange={()=>{

      }}

      // 设置一个函数，返回一个视图用于显示错误
      renderError={()=>{
        return <Text>
          错误
        </Text>
      }}

      // 设置一个函数，返回一个加载指示器
      renderLoading={()=>{
        return <View />
      }}

      // 设置是否要把网页缩放到适应视图的大小，以及是否允许用户改变缩放比例
      scalesPageToFit={true}

      // 强制WebView在第一次加载时先显示loading视图。默认为true
      startInLoadingState={true}
    />
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{
    fontSize:18,
    color:'blue'
  }
})