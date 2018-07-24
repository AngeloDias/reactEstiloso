import React from 'react';
import {Text, AppRegistry, View} from 'react-native';

const Estilos = {
  conteudo1: {
    fontSize: 40,
    backgroundColor: '#08509B',
    // paddingTop: 15,
    // color: '#fff',
    // fontStyle: 'italic',
    // fontWeight: 'bold' // ou valores entre 100 e 900
    // textAlign: 'center'
    // textDecorationLine: 'underline line-through'
    height: 60,
    width: 60
  },

  conteudo2: {
    fontSize: 40,
    backgroundColor: '#2A48FA',
    height: 60,
    width: 60
  },

  principal: {
    backgroundColor: 'skyblue',
    height: 300,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    flexDirection: 'row'
  }
};

const App = () => {
  const {conteudo1, principal} = Estilos;

  return (
    <View style={principal}>
      <Text style={conteudo1}>A</Text>
      <Text style={conteudo2}>B</Text>
      <Text style={conteudo1}>C</Text>
    </View>
  );
};

AppRegistry.registerComponent('reactEstiloso', () => App);
