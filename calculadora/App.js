
import React, {useState} from 'react';
import {SafeAreaView, Stylesheet, View, Text, TouchableHighlight, TextInput} from 'react-native';

export default function App(){
  const [valor, setValor]=useState(0)
  return (
    <SafeAreaView style={estilos.conteiner}>
      <Text>Calculadora de Churrasco</Text>
      <Text>Valores de referência</Text>
      <Text>Proteína: Homens (300g) Mulheres (200g) Crianças (200g)</Text>
      <Text>Carboidrato: Homens (130g) Mulheres (115g) Crianças (100g)</Text>
      <Text>Salada: Homens (50g) Mulheres (50g) Crianças (20g)</Text>
      <Text>Cerveja: Homens (1,5l) Mulheres (1,5l) Crianças (0ml)</Text>
      <Text>Refrigerante: Homens (0,5l) Mulheres (0.5l) Crianças (0,5l)</Text>
      <Text>Cálculo 1 - Proteína</Text>
      <Text>Quantidade de Homens</Text>
      <TextInput
      style={estilos.display}
      value= {String(valor)}></TextInput>
      <Text>Quantidade de Mulheres</Text>
      <TextInput
      style={estilos.display}
      value= {String(valor)}></TextInput>
      <Text>Quantidade de Crianças</Text>
      <TextInput
      style={estilos.display}
      value= {String(valor)}></TextInput>
      <Text>Cálculo 2 - Carboidrato</Text>
      <Text>Quantidade de Homens</Text>
      <TextInput
      style={estilos.display}
      value= {String(valor)}></TextInput>
      <Text>Quantidade de Mulheres</Text>
      <TextInput
      style={estilos.display}
      value= {String(valor)}></TextInput>
      <Text>Quantidade de Crianças</Text>
      <TextInput
      style={estilos.display}
      value= {String(valor)}></TextInput>
      <Text>Cálculo 3 - Salada</Text>
      <Text>Quantidade de Homens</Text>
      <TextInput
      style={estilos.display}
      value= {String(valor)}></TextInput>
      <Text>Quantidade de Mulheres</Text>
      <TextInput
      style={estilos.display}
      value= {String(valor)}></TextInput>
      <Text>Quantidade de Crianças</Text>
      <TextInput
      style={estilos.display}
      value= {String(valor)}></TextInput>
      <Text>Cálculo 4 - Cerveja</Text>
      <Text>Quantidade de Homens</Text>
      <TextInput
      style={estilos.display}
      value= {String(valor)}></TextInput>
      <Text>Quantidade de Mulheres</Text>
      <TextInput
      style={estilos.display}
      value= {String(valor)}></TextInput>
      <Text>Cálculo 5 - Refrigerante</Text>
      <Text>Quantidade de Homens</Text>
      <TextInput
      style={estilos.display}
      value= {String(valor)}></TextInput>
      <Text>Quantidade de Mulheres</Text>
      <TextInput
      style={estilos.display}
      value= {String(valor)}></TextInput>
      <Text>Quantidade de Crianças</Text>
      <TextInput
      style={estilos.display}
      value= {String(valor)}></TextInput>
      

    </SafeAreaView>
  );
};

const estilos = Stylesheet.create({

  conteiner:{
    padding:20
  },

  display: {
  borderWidth:1,
  borderRadius:10,
  padding:10
  }

});

