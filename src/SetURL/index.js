import React, { useState, useEffect } from 'react';
import { View, Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

import logo from '../../assets/logo.png';
import { parse } from '@babel/core';

export function SetURL() {
  // useEffect(() => {
  //   AsyncStorage.getItem('user').then(user => {
  //     if (user) {
  //       navigation.navigate('ListUrls');
  //     }
  //   })
  // }, []);

  const [nameUrl, setNameUrl] = useState('');
  const [BaseURL, setBaseURL] = useState('');
  const [BaseIMAGE, setBaseIMAGE] = useState('');


  // useEffect(() => {
  //   setSettings ({
  //     'nome': nameUrl,
  //     'BaseURL': BaseURL,
  //     'BaseImagem': BaseIMAGE
  //   })
  // },[nameUrl, BaseURL, BaseIMAGE])


  async function handleAsyncStorage() {
    //armazenar valor no cache
    let newUrlEntrie = {
      nome: nameUrl,
      BaseURL: BaseURL,
      BaseImagem: BaseIMAGE
    }
      await AsyncStorage.getItem('@Settings')
        .then((data) => {
          const SettingsArray = data == 'fistState' ? [] : JSON.parse(data);
          SettingsArray.push(newUrlEntrie);
          AsyncStorage.setItem('@Settings', JSON.stringify(SettingsArray));
        })
        .then(() => getSettings())
  }


  const getSettings = async () => {
    try {
      const getSettings = await AsyncStorage.getItem('@Settings')
      console.log(getSettings, 'atualizado')
      // if (getSettings !== null) {
      //   // let parsedSettings = JSON.parse(getSettings);
      //   console.log(getSettings, '<----')
      // return getSettings
      // }
    } catch (e) {
      console.log(`erro ao setar as settings previas ${e}`)
    }
  }

  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
      <View>
        <Image source={logo} />
        <View style={styles.form}>
          <Text style={styles.label}>Nome do Servidor *</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome do Servidor"
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            value={nameUrl}
            onChangeText={setNameUrl}
          />
          <Text style={styles.label}>Sua URL *</Text>
          <TextInput
            style={styles.input}
            placeholder="Sua URL"
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            value={BaseURL}
            onChangeText={setBaseURL}
          />
          <Text style={styles.label}>Sua ImagemURL *</Text>
          <TextInput
            style={styles.input}
            placeholder="URL da sua Imagem"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            value={BaseIMAGE}
            onChangeText={setBaseIMAGE}
          />
          <TouchableOpacity onPress={() => handleAsyncStorage()} style={styles.button}>
            <Text style={styles.buttonText}>Salvar Credenciais</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },

  button: {
    height: 42,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});