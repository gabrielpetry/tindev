import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import { KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text} from 'react-native'

import api from '../services/api'

import logo from '../assets/logo.png'


export default function login({ navigation }) {
  const [user, setUser] = useState('')

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(user => {
        if(user) {
          navigation.navigate('Main', { user })
        }
      })
  }, [])

  async function handleLogin() {
    const response = await api.post('/devs', {
      username: user
    })

    const { _id } = response.data

    await AsyncStorage.setItem('user', _id)

    navigation.navigate('Main', { user: _id })
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      enable={Platform.OS === 'ios'}
    >
      <Image source={logo}></Image>

      <TextInput
        placeholder='Digite seu usuário do github'
        placeholderTextColor='#999'
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
        value={user}
        onChangeText={setUser}
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#df4723',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    marginTop: 10
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16
  }
})
