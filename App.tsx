import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Image, Button } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('')
  const [hobby, setHobby] = useState('')
  const [message, setMessage] = useState('Welcome to my app')

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <ScrollView>
        <Text style={styles.header}>My Info Card</Text>
      </ScrollView>
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


