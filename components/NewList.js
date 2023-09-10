import { StatusBar } from 'expo-status-bar';
import SafeAreaView from 'react-native-safe-area-view';
import React, {useState,useEffect} from 'react';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, Text, TextInput, View,TouchableOpacity,Image,Button ,ScrollView, Platform} from 'react-native';
import MapView, { Marker } from 'react-native-maps'
// import MapView, Marker from 'react-native-maps';
import * as Location from 'expo-location'
export default  function NewList({status, navigation: { navigate } }) {
  function componentDidMount()
  {
    return 'aa' ;
  }
    let [image1,setImage1]=useState(null)
    let [image2,setImage2]=useState(null)
    let [location,setLocation]=useState({
      latitude: 12.33,
      longitude: 12.44,
      latitudeDelta: 1.92,
      longitudeDelta: 1.991,

    });
    let [latitude,setLatitude]=useState(null)
    let [longitude,setLongitude]=useState(null)
    const getCameraLocationPermission = async() =>{
      if (Platform.OS !='web')
      {
        await ImagePicker.requestCameraPermissionsAsync();
        let {status}=await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          return;
        }
        let location = await Location.getCurrentPositionAsync({});

        setLocation({
          latitude:location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        })
        setLatitude(location.coords.latitude)
        setLongitude(location.coords.longitude)
        check()
      }
     
    }
 function check()
 {
  console.log("ccccccc",location)
 }
    useEffect( ()=>{
      getCameraLocationPermission();
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
    function onRegionChange()
    {
      setLocation(location)
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
    <View style={{paddingHorizontal:10,...styles.container}}>
    <Text style={{marginLeft:10,marginTop:10,fontWeight:"700",fontSize:16}}>Upload Images</Text>
    <View style={styles.imageConatiner}>
          { 
          image1?
          <View style={{alignItems:"center"}}>
            <Image style={{width:100,height:"90%",marginTop:20,borderRadius:20}} source={{uri:image1}}/>
            <Text onPress={()=>setImage1(null)} style={{color:"red"}}> Remove</Text>
          </View>
          :
            <TouchableOpacity onPress={()=>imagePicker1()} style={{width:100,height:"90%",backgroundColor:"#ACFF88",alignItems:"center",justifyContent:"center",borderRadius:10}}>
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
            <TouchableOpacity  onPress={()=>imagePicker2()} style={{width:100,height:"90%",backgroundColor:"#ACFF88",alignItems:"center",borderRadius:10,justifyContent:"center"}}>
              <Image  style={styles.uploadImage} source={require("../assets/upload.png")} />
            </TouchableOpacity>
          }
    </View>
    <ScrollView>
    <View style={styles.textContainer}> 
          <Text style={{paddingVertical:10,fontWeight:"700",fontSize:16}}>Title</Text>
          <TextInput style={styles.textInput}/>
          <Text style={{paddingVertical:10,fontWeight:"700",fontSize:16}}>Description </Text>
          <TextInput style={styles.textInput} placeholder='1 pack of Biscuits.. exp:10/28 '/>
          <Text style={{paddingVertical:10,fontWeight:"700",fontSize:16}}>Quantity</Text>
         <View style={styles.quantityContainer}>
            <Text style={styles.quantity}>1</Text>
            <Text style={styles.quantity}>2</Text>
            <Text  style={styles.quantity}>3</Text>
            <Text  style={styles.quantity}>4</Text>
            <Text  style={styles.quantity}>5</Text>
         </View>
         <TextInput style={styles.textInput} placeholder='Others'/>
         <Text style={{paddingVertical:10,fontWeight:"700",fontSize:16}}>Pickup Time</Text>
          <TextInput style={styles.textInput} placeholder='eg . Today at 4 pm'/>
          <Text style={{paddingVertical:10,fontWeight:"700",fontSize:16}}>Select your listing location</Text>
          <View style={styles.MapView}>
              <MapView  zoomEnabled={true} onRegionChange={onRegionChange} region={location} style={{width:"100%",height:"100%"}}>
              <Marker draggable
                coordinate={location}
                onDragEnd={(e) => {setLocation( e.nativeEvent.coordinate )}}
              />
                </MapView>
          </View>
          <TouchableOpacity style={styles.submitButton}><Text style={{fontSize:16,textAlign:"center",fontWeight:700}} >Submit</Text></TouchableOpacity>
    </View>
    </ScrollView>
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
  },
  textContainer:{
    flex:1,
     borderWidth: 1, 
     borderTopColor:"black",
     borderLeftColor:'transparent',
     borderRightColor:'transparent',
     borderLeftColor:'transparent',
     borderBottomColor:'transparent',
     marginTop:10,
     paddingTop:10,
    marginBottom:30,
    position:"relative",
  },
  textInput:{
    padding:10,
    width:"90%",
    borderWidth: 1, 
    alignSelf:"center",
    borderRadius:10,
    borderColor:"gray",
  },
  quantityContainer:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginBottom:15
  },
  quantity:{
    paddingVertical:5,
    paddingHorizontal:25,
    color:"black",
    backgroundColor:"#80ff80",
    fontSize:16,
    borderRadius:20,
    fontWeight:"700"
  },
  MapView:{
    width:"100%",
    height:200,
    marginBottom:30
  },
  submitButton:{
    width:"100%",
    paddingVertical:10,
    backgroundColor:"#ACFF88",
    borderRadius:10,
    marginBottom:5,
    textAlign:"center",
    
    // position:"absolute",
    // bottom:1
  }
});
