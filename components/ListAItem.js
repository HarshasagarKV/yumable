import { StatusBar } from 'expo-status-bar';
import SafeAreaView from 'react-native-safe-area-view';
import React, {useState} from 'react';
// import {Text, TextInput, View} from 'react-native';
import { StyleSheet, Text, TextInput, View ,Image, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps'

export default function ListAItem({ route, navigation }) {
    const [text, setText] = useState('');
  let SelectedItem=route.params.selectedItem;
  function handle()
    {
      navigation.navigate('Dashboard')
    }

  return (
    <SafeAreaView style={{ flex: 1 }}>

        <TouchableOpacity onPress={()=>handle()}>
      <Image source={require("../assets/goback.png")} style={{width:30,height:40,marginTop:50,marginLeft:10}} />
      </TouchableOpacity>
      <ScrollView style={{width:"100%"}}>
    <View style={styles.container}>
      <Text style={styles.name}>{SelectedItem.name}</Text>

           <Image style={{width:"100%",height:200,resizeMode: "contain"}} source={SelectedItem.image}/>
    
      <Text style={{fontSize:16,fontWeight:700,paddingVertical:10}}>Description</Text>
      <Text style={styles.description}>{SelectedItem.description}</Text>
      <View style={styles.quantityConatiner}>
        <Text style={{fontSize:16,fontWeight:700,width:150}}>Quantity </Text>
        <Text style={{fontSize:15,textAlign:"center",verticalAlign:"middle"}}>{SelectedItem.quantity}</Text>
      </View>
      <View style={styles.quantityConatiner}>
        <Text style={{fontSize:16,fontWeight:700,width:150}}>Pickup Time </Text>
        <Text style={{fontSize:15,textAlign:"center",verticalAlign:"middle"}}>{SelectedItem.pickUpTime}</Text>
      </View>
      <View style={styles.priceContainer}>
        {
          SelectedItem.priceStatus=='Free' ?
            <View style={styles.free}>
              <Text style={{fontSize:16,fontWeight:600}} >This Product us Absolutely Free</Text>
            </View>
            :
            <View style={styles.freeContainer}>
              <Text  style={{fontSize:16,fontWeight:700,width:150}}>Price</Text>
              <Text style={{fontSize:17}}>Rs {SelectedItem.price}</Text>
              <Text style={{textDecorationLine:"line-through",paddingLeft:10,fontSize:17,color:"red"}}>Rs {SelectedItem.actualPrice}</Text>
            </View>
        }
      </View>
      <View style={{width:"100%",height:200,marginBottom:30}}>
             <MapView  zoomEnabled={true}  region={SelectedItem.location} style={{width:"100%",height:"100%"}}>
              <Marker draggable
                coordinate={SelectedItem.location}
                
              />
              </MapView>
      </View>
        <View style={{width:"100%",marginBottom:20 }}> 
      <TouchableOpacity style={{padding:10,width:"100%",  backgroundColor: "#57D657",borderRadius:10}}>
        <Text style={{textAlign:"center",verticalAlign:"middle",width:"100%",fontSize:18,fontWeight:700}}>I'm Interested</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
   </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding:10,
    width:"100%"
  },
  imageContainer:{
    width:"90%",
    height:300
  },
  name:{
    fontSize:16,
    paddingBottom:10
  },
  description:{
    lineHeight:25
  },
  quantityConatiner:{
    flexDirection:"row",

    paddingVertical:10,
    justifyContent:"space-between"
  },
  freeContainer:{
    flexDirection:"row",
    width:"30%",
    justifyContent:"space-between"
  },
  priceContainer:{
    width:"100%",
    marginVertical:10
  },
  free:{
    width:"100%",
    backgroundColor:"#ACFF88",
    padding:10,
    borderRadius:10,
    fontWeight:700
  }
});
