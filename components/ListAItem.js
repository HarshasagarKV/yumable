import { StatusBar } from 'expo-status-bar';
import SafeAreaView from 'react-native-safe-area-view';
import React, {useState} from 'react';
// import {Text, TextInput, View} from 'react-native';
import { StyleSheet, Text, TextInput, View ,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ListAItem({ navigation: { navigate } }) {
    const [text, setText] = useState('');

    function handle()
    {
     navigate('Dashboard')
    }

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity onPress={()=>handle()}>
      <Image source={require("../assets/goback.png")} style={{width:30,height:40,marginTop:50,marginLeft:10}} />
      </TouchableOpacity>
    <View style={styles.container}>
      <Text>List a Item </Text>
      
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
