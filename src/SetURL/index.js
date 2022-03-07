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

  const [NomeServidor, setNome] = useState('');
  const [BaseURL, setBaseURL] = useState('');
  const [BaseIMAGE, setBaseIMAGE] = useState('');

  const [cadastroSettings, setSettings] = useState(undefined);

  async function handleAsyncStorage() {
    //armazenar valor no cache

    const storeSettings = async () => {

      setSettings ({
        'nome': NomeServidor,
        'BaseURL': BaseURL,
        'BaseImagem': BaseIMAGE
      })
      AsyncStorage.getItem('@Settings')
        .then((data) => {
          console.log(data);
          const SettingsArray = data == 'fistState' ? [] : JSON.parse(settings);
          SettingsArray.push(cadastroSettings);
          AsyncStorage.setItem('@Settings', JSON.stringify(SettingsArray));
        });
    }
    storeSettings();
  }

  // const getSettings = async () => {
  //   try {
  //     const getSettings = await AsyncStorage.getItem('@Settings')
  //     console.log(getSettings)
  //     if (getSettings !== null) {
  //       // let parsedSettings = JSON.parse(getSettings);
  //       console.log(getSettings, '<----')
  //       return getSettings
  //     }
  //   } catch (e) {
  //     console.log(`erro ao setar as settings previas ${e}`)
  //   }
  // }
  
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
            value={NomeServidor}
            onChangeText={setNome}
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
          <TouchableOpacity onPress={handleAsyncStorage} style={styles.button}>
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