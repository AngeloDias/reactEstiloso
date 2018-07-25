import React from 'react';
import {Text, AppRegistry, View, TouchableOpacity} from 'react-native';

const Estilos = {
  principal: {
    paddingTop: 40
  },

  botao: {
    backgroundColor: '#48BBEC',
    padding: 10,
    borderColor: '#1d8eb8',
    borderWidth: 3,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4
  },

  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
};

const App = () => {
  const {principal, botao, textoBotao} = Estilos;

  return (
    <View style={principal}>
      <TouchableOpacity style={botao}>
        <Text style={textoBotao}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );

};

AppRegistry.registerComponent('reactEstiloso', () => App);
