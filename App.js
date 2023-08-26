import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import NewList from './components/NewList';

export default function App() {
  const Tab= createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator backBehavior= 'history'  screenOptions={{
       tabBarStyle: { height: 70,paddingBottom:15,paddingTop:5 }, tabBarLabelStyle: {
        fontSize: 14,
      },tabBarActiveTintColor:"green",tabBarLabelPosition:"below-icon"
      }}>
        <Tab.Screen name ="Dashboard" component={Dashboard}  options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
           <Tab.Screen name ="NewList" component={NewList} options={{
          tabBarLabel: 'Sell',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name ="Profile" component={Profile}  options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle-outline" color={color} size={size} />
          ),
        }}/>
     
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
