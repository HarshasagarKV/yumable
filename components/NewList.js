import { StatusBar } from 'expo-status-bar';
import SafeAreaView from 'react-native-safe-area-view';
import React, {useState} from 'react';
// import {Text, TextInput, View} from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function NewList() {
    const [text, setText] = useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <Text>New list</Text>
      
      {/* <StatusBar style="auto" /> */}
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
