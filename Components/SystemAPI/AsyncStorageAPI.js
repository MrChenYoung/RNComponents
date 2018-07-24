import React, { Component }  from 'react';
import{
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TextInput,
  TouchableHighlight,
  Button,
  ScrollView
} from 'react-native';
import HYButton from '../CustomComponent/HYButton';
import Utility from '../UtilityTools/Utility';

const storeDatas = [
  {
    key:'张三',
    value:'一名学生'
  },
  {
    key:'李四',
    value:'一名军人'
  },
  {
    key:'王五',
    value:'一个农民'
  },
  {
    key:'李六',
    value:'一个工人'
  }
];

const message = 'hello' + "\n" + 'world';

export default class AsynsStorageComponent extends Component{
  constructor (){
    super();

    this.state={
      storageData:[],
      storageMessage:'',
      canSaveData:true,
      removeItemEnable:true
    }
  }

  render(){
    return <View style={styles.containerStyle}>
      <Text style={{marginLeft:10,marginTop:20}}>
        获取到本地存储数据:
      </Text>
      <View style={styles.innerViewStyle}>
        <ScrollView>
          <Text style={this.state.storageData.length === 0 ? {color:'#d8d8d8'} : {color:'black'}}>
            {this.state.storageData.length === 0 ? '本地没有存储数据' : this.state.storageMessage}
          </Text>
        </ScrollView>
      </View>
      <HYButton
        extendStyle={{alignSelf:'center'}}
        width={Utility.screenWidth - 20}
        title={'存储数据'}
        enabled={this.state.canSaveData}
        onPress={()=>{
          this.storeDatasToLocal()
        }}
      />
      <HYButton
      title={'清空数据'}
      extendStyle={{alignSelf:'center', marginTop: 20}}
      width={Utility.screenWidth - 20}
      enabled={!this.state.canSaveData}
      onPress={()=>{
        this.clearSroreDatas()
      }}
      />
      <HYButton
        title={'移除张三'}
        extendStyle={{alignSelf:'center', marginTop: 20}}
        width={Utility.screenWidth - 20}
        enabled={this.state.removeItemEnable}
        onPress={()=>{
          this.removeItem()
        }}
      />
      <HYButton
        title={'修改张三'}
        extendStyle={{alignSelf:'center', marginTop: 20}}
        width={Utility.screenWidth - 20}
        enabled={this.state.removeItemEnable}
        onPress={()=>{
          this.mergeItem()
        }}
      />
      <HYButton
        title={'批量删除'}
        extendStyle={{alignSelf:'center', marginTop: 20}}
        width={Utility.screenWidth - 20}
        enabled={this.state.removeItemEnable}
        onPress={()=>{
          this.multiRemove()
        }}
      />
      <HYButton
        title={'批量修改'}
        extendStyle={{alignSelf:'center', marginTop: 20}}
        width={Utility.screenWidth - 20}
        enabled={this.state.removeItemEnable}
        onPress={()=>{
          this.multiChange()
        }}
      />
      <HYButton
        title={'批量合并'}
        extendStyle={{alignSelf:'center', marginTop: 20}}
        width={Utility.screenWidth - 20}
        enabled={this.state.removeItemEnable}
        onPress={()=>{
          this.multiMerger()
        }}
      />
    </View>
  }

  componentDidMount () {
    // 获取本地存储数据
    this.getStorageData();
  }

  // 存储数据
  async storeDatasToLocal(){
    for (let i = 0; i < storeDatas.length; i++) {
      let storeData = storeDatas[i];
      // 将key字段的值设置成value，并在完成后调用callback函数。如果有任何错误发生，则会传递一个Error对象作为第一个参数。
      // 返回一个Promise对象
      let value = await AsyncStorage.setItem(storeData.key,storeData.value,(error)=>{
        if (!error){
          if (i === storeDatas.length - 1){
            this.getStorageData()
          }
        }else {
          alert('数据存储失败');
        }
      });
    }
  }

  // 清空本地存储数据
  async clearSroreDatas(){
    // 删除全部的AsyncStorage数据，不论来自什么库或调用者。通常不应该调用这个函数——使用removeItem或者multiRemove来清除你自己的key。
    // 返回一个Promise对象
    AsyncStorage.clear((error)=>{
      if (!error){
        // 重新获取本地数据
        this.getStorageData();
      } else {
        alert('清空数据错误');
      }
    });
  }


  // 读取本地存储数据
  async getStorageData(){
    // 清空数据存储器
    this.setState({
      storageData:[],
      storageMessage:''
    })

    // 读取key字段并将结果作为第二个参数传递给callback。如果有任何错误发生，则会传递一个Error对象作为第一个参数。
    // 返回一个Promise对象
    let value = await AsyncStorage.getAllKeys((error,keys)=>{
      if (!error){
        // 查询到本地存储数据
        for (let i = 0; i < keys.length; i++) {
          this.getStorageDataWithKey(keys[i],()=>{
            if (i === keys.length - 1){
              this.reloadUI();
            }
          });
        }

        this.reloadUI();
      } else {
        // 查询错误
        alert('获取本地存储数据失败'+error.message);
      }
    })
  }

  // 获取指定key的本地数据
  async getStorageDataWithKey(key,complete){
    let datas = this.state.storageData;
    let value = await AsyncStorage.getItem(key,(error,result)=>{
      datas.push(
        {
          key:key,
          value:result
        }
      )

      this.setState({
        storageData:datas
      })

      complete();
    })
  }

  reloadUI(){
    this.setState({
      canSaveData:(this.state.storageData.length === 0),
      removeItemEnable:false
    })

    let removeItemEnable = false;

    // 显示本地获取到的数据
    for (let i = 0; i < this.state.storageData.length; i++) {
      let element = this.state.storageData[i];

      if (element.key === '张三'){
        removeItemEnable = true;
      }
      this.setState({
        storageMessage:this.state.storageMessage + '\n' + element.key + ':' + element.value,
        removeItemEnable:removeItemEnable
      })
    }
  }

  // 移除一项
  async removeItem(){
    // 删除一个字段。返回一个Promise对象
    let value = AsyncStorage.removeItem('张三',(error)=>{
      if (!error){
        this.getStorageData();
      } else {
        alert('移除张三失败');
      }
    })
  }

  // 合并新的值到已有的item
  async mergeItem(){
    // 假设已有的值和新的值都是字符串化的JSON，则将两个值合并。返回一个Promise对象。还没有被所有原生实现都支持
    let value = await AsyncStorage.mergeItem('张三',',是一名优秀的军人',(error)=>{
      if (!error){
        this.getStorageData();
      } else {
        alert('合并item失败');
      }
    })
  }

  // 批量删除
  async multiRemove(){
    let value = await AsyncStorage.multiRemove(['张三','李四'],(errors)=>{
      if (!errors){
        // 批量删除成功
        this.getStorageData();
      } else {
        // 批量删除失败
        for (let i = 0; i < errors.length; i++) {
          let error = errors[i];
          alert('批量删除失败'+error.message);
        }
      }
    })
  }

  // 批量修改
  async multiChange(){
    // multiSet和multiMerge都接受一个与multiGet输出值一致的key-value数组的数组。返回一个Promise对象。

    // multiSet([['k1', 'val1'], ['k2', 'val2']], cb);
    let value = await AsyncStorage.multiSet([
      ['张三',',是一名三好学生'],
      ['李四',',是一名优秀的军人hhh']
    ],(errors)=>{
      if (!errors){
        // 批量合并成功
        this.getStorageData();
      } else {
        // 批量合并失败
        for (let i = 0; i < errors.length; i++) {
          let error = errors[i];
          alert('批量修改失败'+error.message);
        }
      }
    })
  }

  // 批量合并
  async multiMerger(){
    // 将多个输入的值和已有的值合并，要求都是字符串化的JSON。返回一个Promise对象。
    //
    // 还没有被所有原生实现都支持
    let value = await AsyncStorage.multiMerger([
      ['张三',',是一名三好学生'],
      ['李四',',是一名优秀的军人hhh']
      ],(errors)=>{
      if (!errors){
        // 批量合并成功
        this.getStorageData();
      } else {
        // 批量合并失败
        for (let i = 0; i < errors.length; i++) {
          let error = errors[i];
          alert('批量合并失败'+error.message);
        }
      }
    })
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    // justifyContent:'center',
    // alignItems:'center'
  },
  innerViewStyle:{
    backgroundColor:'white',
    margin:10,
    height:100,
    padding:8,
    borderRadius:5
  }
})