import { StatusBar } from 'expo-status-bar';
import SafeAreaView from 'react-native-safe-area-view';
import React, {useState} from 'react';
// import {Text, TextInput, View} from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Profile() {
    const [text, setText] = useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <Text>Profile page</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
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
