import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Image, Button } from 'react-native';
import { useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [name, setName] = useState('')
  const [hobby, setHobby] = useState('')
  const [message, setMessage] = useState('Welcome to my app')
  const [color, setColor] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

      <Image source={require('./assets/profile.png')} style={styles.image} />

        <Text style={styles.header}>Welcome to My Profile</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor={'white'}
          value={name}
          onChangeText={setName}
        />

        <TextInput style={styles.input}
          placeholder="Enter your hobby"
          placeholderTextColor={'white'}
          value={hobby}
          onChangeText={setHobby}
        />

        <TextInput style={styles.input}
          placeholder="Enter your favourite color"
          placeholderTextColor={'white'}
          value={color}
          onChangeText={setColor}
        />

        <Button title="Show Greeting" onPress={() => setMessage(`Hello ${name}, ${message}, enjoy ${hobby}`)} />

        <View style={styles.card}>
          <Text style={styles.cardText}>Hello, {name}</Text>
          <Text style={styles.cardText}>Your hobby is {hobby}</Text>
        </View>

        <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.onlineImage} />

        <Text style={styles.extra}>More Info</Text>
        <Text style={styles.extra}>More Info</Text>
        <Text style={styles.extra}>More Info</Text>
        <Text style={styles.extra}>More Info</Text>
        <Text style={styles.extra}>More Info</Text>

        


      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021945',
    padding: 20
  },
  header: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    borderWidth: 3,
    borderColor: '#fff',
    color: 'white',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  card: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 75,
    marginBottom: 20
  },
  onlineImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10
  },
  extra: {
    fontSize: 16,
    color: 'white',
    marginVertical: 5
  }
});

