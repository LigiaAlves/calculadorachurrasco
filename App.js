

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
      <Text>Calculadora de Churrasco</Text> 
      <Text>Valores de referência</Text>
      <Text>Proteína: Homens (300g) Mulheres (200g) Crianças (200g)</Text>
      <Text>Carboidrato: Homens (130g) Mulheres (115g) Crianças (100g)</Text>
      <Text>Salada: Homens (50g) Mulheres (50g) Crianças (20g)</Text>
      <Text>Cerveja: Homens (1,5l) Mulheres (1,5l) Crianças (0ml)</Text>
      <Text>Refrigerante: Homens (0,5l) Mulheres (0.5l) Crianças (0,5l)</Text>

      <Text>Cálculos</Text> 

      <Text>Quantidade de Homens, Mulheres ou Crianças</Text>
      <TextInput
      style={estilos.display}
      value= {String(valor1)}
      onChangeText={(texto) => {setValor1 (texto)}}></TextInput>

      <Text>Informe o valor de referência</Text>
      <TextInput
      style={estilos.display}
      value= {String(valor2)}
      onChangeText={(texto) => {setValor2 (texto)}}></TextInput>

      <TouchableHighlight
      style={estilos.btn}
      onPress={()=>multiplica()}>
          <Text>MULTIPLICAR</Text>
      </TouchableHighlight>

      <Text>Resultado</Text>
      <TextInput
      style={estilos.display}
      value= {String(resultado)}
      onChangeText={(texto) => {setResultado (texto)}}></TextInput>

    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({

  conteiner:{
    padding:20
  },

  display: {
  borderWidth:1,
  borderRadius:10,
  padding:10
  },

  btn:{
      backgroundColor:'#aaa',
      padding:20,
  },

  txtBtn:{

  }

});

