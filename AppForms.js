import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
 
export default function AppForms({navigation}) {

  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState('');

  function mudancaDescricao(descricao){
    setDescricao(descricao);
  }

  function mudancaQuantidade(quantidade){
    setQuantidade(quantidade);
  }

  function pressionarBotao(){
    console.log({id: new Date().getTime(), descricao, quantidade})
    navigation.navigate("AppList")
  }
  return(
    <View>
      <TextInput 
        style={styles.input}
        onChangeText={mudancaDescricao}
        placeholder="O que está faltando em casa?"
        clearButtonMode='always'></TextInput>

      <TextInput 
          style={styles.input}
          onChangeText={mudancaQuantidade}
          placeholder="Digite a quantidade"
          keyboardType={'numeric'}
          clearButtonMode='always'>
        </TextInput>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D93600',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  inputContainer: {
    flex: 1,
    marginTop: 30,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});