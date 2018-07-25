import React from 'react';
import {Text, AppRegistry, View, Image, TouchableOpacity, Alert} from 'react-native';

const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 20
  },

  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }

};

const App = () => {
  const {principal, botao, textoBotao} = Estilos;

  return (

    <View style={principal}>
      <Image source={ require('./imgs/logo.png') } />

      <TouchableOpacity style={botao}
          onPress={gerarNovaFrase}>

        <Text style={textoBotao}>Nova frase</Text>
      </TouchableOpacity>

    </View>

  );

};

const gerarNovaFrase = () => {
  var numeroRandom = Math.floor(Math.random() * 5);

  var frases = Array();
  frases[0] = 'Ora et labora';
  frases[1] = 'Vamo que vamo!';
  frases[2] = 'Simbora!';
  frases[3] = 'Let\'s go!';
  frases[4] = 'Levanta daí, sacode a poeira e põe-se a caminhar.';

  Alert.alert(frases[numeroRandom]);
}

AppRegistry.registerComponent('reactEstiloso', () => App);
