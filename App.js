import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View,Image,PermissionsAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomSheetModal , BottomSheetModalProvider,BottomSheetBackdrop} from "@gorhom/bottom-sheet"
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import NewList from './components/NewList';
import Login from './components/Login';
import { useRef,useCallback } from 'react';
import ListAItem from './components/ListAItem';

export default function App() {



// gradients :#D6FFDE #ACFF88
// Font Black Mango    = Medium

  function StackNavigator()
  {
      const Stack = createStackNavigator();
      return(
          <Stack.Navigator
          initialRouteName='StackHome'
          screenOptions={{ headerShown: false }}
        >
              <Stack.Screen name="Login" component={Login} />

              <Stack.Screen name="ListAItem" component={ListAItem} />
              <Stack.Screen  name="StackHome" component={StackNewList} navigation={navigator }/>
          </Stack.Navigator>
      )
  }
  
  function StackNewList()
  {
      const Stack = createStackNavigator();
      return(
          <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{ headerShown: false }}
        >
              <Stack.Screen name="NewList" component={NewList} />
              <Stack.Screen  name="Home" component={BottomTabs} navigation={navigator }/>
            
          </Stack.Navigator>
      )
  }
  
  function BottomTabs({ navigation })
  {
      const Tab= createBottomTabNavigator();
      const bottomSheetRef= useRef(null);
      const snapPoints=["30%"];
  
      function handelAddButton()
      {
          bottomSheetRef.current?.present();
      }
  
      function handleAddNewItem(status)
      {
        console.log(status);
        bottomSheetRef.current?.close();
        navigation.navigate('NewList',{status:status,navigation:navigation});
      }
      const renderBackdrop = useCallback(
          (props) => (
            <BottomSheetBackdrop
              {...props}
              appearsOnIndex={1}
              animatedIndex={{
                value: 1,
              }}
            />
          ),
          []
        )
  
      return(
      <BottomSheetModalProvider>
      <Tab.Navigator backBehavior= 'history'  screenOptions={{
          tabBarStyle: { height: 70,paddingBottom:15,paddingTop:5 }, tabBarLabelStyle: {
           fontSize: 16,
         },tabBarActiveTintColor:"green",tabBarLabelPosition:"below-icon"
         }}>
           <Tab.Screen name ="Dashboard" component={Dashboard}  options={{
             tabBarLabel: 'Home',
             tabBarIcon: ({ color, size }) => (
               <MaterialCommunityIcons name="home" color={color} size={size} />
             ),
             headerStyle: {
              backgroundColor: '#ACFF88',
            },
           }} />
              <Tab.Screen name ="NewList" component={StackNewList} options={({ navigation }) => ({
             tabBarButton: (props) => (
               <TouchableOpacity onPress={() => handelAddButton()}>
                 <Image source={require("./assets/add.png")}  resizeMode='contain' style={{width:90,height:100, top:-50}}/>
               </TouchableOpacity>
             ),
   
           })} />
           <Tab.Screen name ="Profile" component={Profile}  options={{
             tabBarLabel: 'Profile',
             tabBarIcon: ({ color, size }) => (
               <MaterialCommunityIcons name="account-circle-outline" color={color} size={size} />
             ),
           }}/>
         {/* <Tab.Screen name="Add a Item" component={StackScreens} tabBarVisible= "false"/> */}
         </Tab.Navigator>
         <BottomSheetModal detached={true}  bottomInset={25}  ref={bottomSheetRef} snapPoints={["30%"]} backdropComponent={renderBackdrop}
     backgroundStyle={{...styles.bottomSheet}}>
        <TouchableOpacity style={styles.selectBtn} onPress={()=>handleAddNewItem("free")}>
          <View style={{height:"100%",flexDirection:"row",alignItems:"center"}}>
            <Image source={require("./assets/freefood.png")} style={{width:30,height:30,marginLeft:30,marginRight:10}}/>
            <View style={{flexDirection:"column",}}>
                <Text style={{fontWeight:700,...styles.txt}}>Free </Text>
                <Text style={styles.txt}>Give away free Food/Vegetables/Fruits </Text>
              </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectBtn}  onPress={()=>handleAddNewItem("sell")}>
        <View style={{height:"100%",flexDirection:"row",alignItems:"center"}} >
            <Image source={require("./assets/sellfood.png")} style={{width:30,height:30,marginLeft:30,marginRight:10}}/>
            <View>
                <Text style={{fontWeight:700,...styles.txt}}>Sell</Text>
                <Text style={styles.txt}>Sell Food/Vegetables/Fruits </Text>
              </View>
          </View>
        </TouchableOpacity>
  
      </BottomSheetModal>
         </BottomSheetModalProvider>
      )
  
  }
  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
      <StackNavigator/>
      </NavigationContainer>
    </GestureHandlerRootView>

  )



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSheet:{
    borderRadius:20,
    backgroundColor:"#66cf61",
    alignContent:"center",
    paddingVertical:"auto",
    marginHorizontal:9
  },
  txt:{
    display:"flex",
    textAlignVertical:"center",
},
  selectBtn:{
    margin:10,
    width:"90%",
    height:60,
    borderColor:"black",
    backgroundColor:'white',
    shadowColor: 'green',
    shadowOffset: {width: -10, height: 4},
    shadowOpacity: 0.2,
    elevation:10,
    shadowRadius: 3,
    alignSelf:"center",
    borderRadius:20,

  }

});


