

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, TouchableHighlight, TextInput} from 'react-native';

export default function App(){
  const [valor1, setValor1]=useState(0)
  const [valor2, setValor2]=useState(0)
  const [resultado, setResultado]=useState(0)

  const multiplica = () =>{
      setResultado (parseInt(valor1)* parseInt(valor2))
  }

  //Informações de Referência
  return (
    <SafeAreaView style={estilos.conteiner}>
      <h1 style={{color:'#191970'}}>Calculadora de Churrasco</h1>

      <Text style={{fontSize:20, color:'#2e8b57'}}>Valores de referência</Text>
      <Text style={{fontSize:15}}>Proteína: Homens (300g) Mulheres (200g) Crianças (200g)</Text>
      <Text style={{fontSize:15}}>Carboidrato: Homens (130g) Mulheres (115g) Crianças (100g)</Text>
      <Text style={{fontSize:15}}>Salada: Homens (50g) Mulheres (50g) Crianças (20g)</Text>
      <Text style={{fontSize:15}}>Cerveja: Homens (1,5l) Mulheres (1,5l) Crianças (0ml)</Text>
      <Text style={{fontSize:15}}>Refrigerante: Homens (0,5l) Mulheres (0.5l) Crianças (0,5l)</Text>

      <Text style={{padding: 10, fontSize:20, color:'#2e8b57'}}>Cálculos</Text> 

      <Text style={{fontSize:15, padding: 10}}>Quantidade de Homens, Mulheres ou Crianças</Text>
      <TextInput
      style={estilos.display}
      value= {String(valor1)}
      onChangeText={(texto) => {setValor1 (texto)}}></TextInput>

      <Text style={{fontSize:15, padding: 10}}>Informe o valor de referência</Text>
      <TextInput
      style={estilos.display}
      value= {String(valor2)}
      onChangeText={(texto) => {setValor2 (texto)}}></TextInput>

      <TouchableHighlight
      style={estilos.btn}
      onPress={()=>multiplica()}>
          <Text style={{color:'#f5f5f5'}}>MULTIPLICAR</Text>
      </TouchableHighlight>

      <Text style={{fontSize:15, padding: 2}}>Resultado</Text>
      <TextInput
      style={estilos.display}
      value= {String(resultado)}
      onChangeText={(texto) => {setResultado (texto)}}></TextInput>

    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({

  conteiner: {
    padding:20,
    textAlign:'center',
    width: 500,
    backgroundColor: '#f5f5f5',

  },

  display: {
  borderWidth:1,
  borderRadius:10,
  padding:10,
  textAlign:'center',
  fontSize: 30,
  
  },


  btn:{
      backgroundColor:'#5f9ea0',
      padding:20,
      borderRadius:20,
      margin: 20,
      fontSize: 15,
  },

  txtBtn:{
    padding: 10,
  }

});