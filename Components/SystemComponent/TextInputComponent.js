import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

export default class TestComponent extends Component{
  constructor (){
    super();

    this.state = {
      text:'文本内容'
    }
  }

  render(){
    return <View style={styles.containerStyle}>
      <TextInput
        style={styles.textInputStyle}

        // TextInput在安卓上默认有一个底边框，同时会有一些padding。如果要想使其看起来和iOS上尽量一致，则需要设置padding: 0，同时设置underlineColorAndroid="transparent"来去掉底边框。
        //
        // 又，在安卓上如果设置multiline = {true}，文本默认会垂直居中，可设置textAlignVertical: 'top'样式来使其居顶显示

        // 控制TextInput是否要自动将特定字符切换为大写
        // characters: 所有的字符
        // words: 每个单词的第一个字符
        // sentences: 每句话的第一个字符（默认）
        // none: 不自动切换任何字符为大写
        autoCapitalize={'words'}

        // 如果为false，会关闭拼写自动修正。默认值是true
        // autoCorrect={false}

        // 如果为true，在componentDidMount后会获得焦点。默认值为false
        autoFocus={false}

        // 如果为true，文本框会在提交的时候失焦。对于单行输入框默认值为true，多行则为false。注意：对于多行输入框来说，如果将blurOnSubmit设为true，则在按下回车键时就会失去焦点同时触发onSubmitEditing事件，而不会换行
        blurOnSubmit={true}

        // 如果为true，则隐藏光标。默认值为false
        caretHidden={false}

        // 如果为false，文本框是不可编辑的。默认值为true
        editable={true}

        // 决定弹出的何种软键盘的
        // ("default", 'numeric', 'email-address', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search')
        keyboardType={'default'}

        // 限制文本框中最多的字符数。使用这个属性而不用JS逻辑去实现，可以避免闪烁的现象
        // maxLength={120}

        // 如果为true，文本框中可以输入多行文字。默认值为false
        multiline={true}

        // 当文本框失去焦点的时候调用此回调函数
        onBlur={(text)=>{
          alert('输入完成:'+text)
        }}

        // 文本框内容变化时调用此回调函数
        onChange={()=>{

        }}

        // 当文本框内容变化时调用此回调函数。改变后的文字内容会作为参数传递
        onChangeText={(newText)=>{
          this.setState({
            text:newText
          })
        }}

        // 当文本输入结束后调用此回调函数
        onEndEditing={()=>{

        }}

        // 当文本框获得焦点的时候调用此回调函数
        onFocus={()=>{

        }}

        // 当组件挂载或者布局变化的时候调用
        onLayout={({x, y, width, height})=>{

        }}

        // 在内容滚动时持续调用
        onScroll={({ nativeEvent: { contentOffset: { x, y } } })=>{

        }}

        // 长按选择文本时，选择范围变化时调用此函数
        onSelectionChange={({ nativeEvent: { selection: { start, end } } })=>{

        }}

        // 此回调函数当软键盘的确定/提交按钮被按下的时候调用此函数。如果multiline={true}，此属性不可用
        onSubmitEditing={()=>{

        }}

        // 如果没有任何文字输入，会显示此字符串
        placeholder={'请输入文本'}

        // 占位字符串显示的文字颜色
        placeholderTextColor={'red'}

        // 决定“确定”按钮显示的内容。在Android上你还可以使用returnKeyLabel来自定义文本
        // 可选项:
        // 通用:done,go,next,search,send
        // Android: none,previous
        // iOS: default,emergency-call,google,join,route,yahoo
        returnKeyType={'done'}

        // 如果为true，文本框会遮住之前输入的文字，这样类似密码之类的敏感文字可以更加安全。默认值为false
        // 设置多行文本此属性会失效
        secureTextEntry={true}

        // 如果为true，当获得焦点的时候，所有的文字都会被选中
        selectTextOnFocus={true}

        // 设置选中文字的范围（指定首尾的索引值）。如果首尾为同一索引位置，则相当于指定光标的位置
        // selection={{start:5,end:5}}


        // 设置输入框高亮时的颜色（在iOS上还包括光标）
        selectionColor={'blue'}

        // 文本框中的文字内容
        value={this.state.text}

        // 提供一个文本框中的初始值。当用户开始输入的时候，值就可以改变
        // 在一些简单的使用情形下，如果你不想用监听消息然后更新value属性的方法来保持属性和状态同步的时候，就可以用defaultValue来代替
        defaultValue={'我是默认文本'}

        // 指定一个图片放置在左侧
        // Android
        inlineImageLeft={''}

        // 给放置在左侧的图片设置padding样式
        // Android
        inlineImagePadding={5}

        // 将软键盘返回键上的文字设置为指定的 label。可以用它来代替 returnKeyType
        // Android
        returnKeyLabel={'确定'}

        // 在 Android API Level 23+ 的平台上设置文字断行策略, 可能值有 simple, highQuality, balanced 默认值为 simple
        // Android
        textBreakStrategy={'simple'}

        // 设置输入框的行数。当multiline设置为true时使用它，可以占据对应的行数
        // Android
        numberOfLines={3}

        // 文本框的下划线颜色(译注：如果要去掉文本框的边框，请将此属性设为透明transparent)。
        // Android
        underlineColorAndroid={'transparent'}

        // 是否要在文本框右侧显示“清除”按钮
        // ('never', 'while-editing', 'unless-editing', 'always')
        // iOS
        clearButtonMode={'always'}

        // 如果为true，每次开始输入的时候都会清除文本框的内容
        // iOS
        clearTextOnFocus={true}

        // 如果为true，键盘会在文本框内没有文字的时候禁用确认按钮。默认值为false
        // iOS
        enablesReturnKeyAutomatically={true}

        // 设置 text input 内能被转化为可点击URL的数据的类型。当且仅当 multiline={true} 和 editable={false} 时起作用。默认情况下不检测任何数据类型.可接受一个类型值或类型值数组
        //'phoneNumber','link','address','calendarEvent','none','all'
        // iOS
        dataDetectorTypes={'phoneNumber'}

        // 指定键盘的颜色
        // ('default', 'light', 'dark')
        // iOS
        keyboardAppearance={'light'}

        // 当一个键被按下的时候调用此回调。传递给回调函数的参数为{ nativeEvent: { key: keyValue } }，其中keyValue即为被按下的键。会在onChange之前调用
        // iOS
        onKeyPress={({ nativeEvent: { key: keyValue } })=>{

        }}

        // 如果设置为false，则禁用拼写检查的样式（比如错误拼写的单词下的红线）。默认值继承自autoCorrect
        // iOS
        spellCheck={false}

      />
    </View>
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  textInputStyle:{
    width:200,
    height:200,
    borderRadius:5,
    borderColor:'#d8d8d8',
    borderWidth:1,
    padding:0
  }
})