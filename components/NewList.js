import { StatusBar } from 'expo-status-bar';
import SafeAreaView from 'react-native-safe-area-view';
import React, {useState,useEffect} from 'react';
import * as ImagePicker from 'expo-image-picker';
import constants from 'expo-constants'
import { StyleSheet, Text, TextInput, View,TouchableOpacity,Image,Button ,PermissionsAndroid, Platform} from 'react-native';
// const ImagePicker = require('react-native-image-picker');
export default  function NewList({status, navigation: { navigate } }) {

    let [image1,setImage1]=useState(null)
    let [image2,setImage2]=useState(null)
    const doSomething = async() =>{
      if (Platform.OS !='web')
      {
        await ImagePicker.requestCameraPermissionsAsync();
      }
      }
    useEffect( ()=>{
      doSomething();
    },[])

    const imagePicker1 =async()=>{
      let result = await ImagePicker.launchCameraAsync()
      if(!result.cancelled)
      {
        setImage1(result.assets[0].uri)
      }
    }
    const imagePicker2 =async()=>{
      let result = await ImagePicker.launchCameraAsync()
      if(!result.cancelled)
      {
        setImage2(result.assets[0].uri)
      }
    }

    function handle()
    {
     navigate('Dashboard')
    }
    console.log(status)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity onPress={()=>handle()}>
      <Image source={require("../assets/goback.png")} style={{width:30,height:40,marginTop:50,marginLeft:10}} />
      </TouchableOpacity>
    <View style={styles.container}>
    <Text style={{marginLeft:10,marginTop:10}}>Upload Images</Text>
    <View style={styles.imageConatiner}>
          { 
          image1?
          <View style={{alignItems:"center"}}>
            <Image style={{width:100,height:"90%",marginTop:20,borderRadius:20}} source={{uri:image1}}/>
            <Text onPress={()=>setImage1(null)} style={{color:"red"}}> Remove</Text>
          </View>
          :
            <TouchableOpacity onPress={()=>imagePicker1()} style={{width:100,height:"90%",backgroundColor:"#c2d6d6",alignItems:"center",justifyContent:"center",borderRadius:10}}>
              <Image style={styles.uploadImage} source={require("../assets/upload.png")}  />
            </TouchableOpacity>
          }
          {
            image2?
            <View  style={{alignItems:"center"}}>
              <Image style={{width:100,height:"90%",marginTop:20,borderRadius:20}} source={{uri:image2}}/>
              <Text onPress={()=>setImage2(null)} style={{color:"red"}}> Remove</Text>
            </View>
            :
            <TouchableOpacity  onPress={()=>imagePicker2()} style={{width:100,height:"90%",backgroundColor:"#c2d6d6",alignItems:"center",borderRadius:10,justifyContent:"center"}}>
              <Image  style={styles.uploadImage} source={require("../assets/upload.png")} />
            </TouchableOpacity>
          }
    </View>
        <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    // width:"100%",
    // height:"100%"
  },
  uploadImage:{
    width:50,
    height:50
  },
  imageConatiner:{
    width:"70%",
    height:"15%",
    alignSelf:"center",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    verticalAlign:"middle"
  }
});
