import React from 'react';
import {Text, AppRegistry, View, Image} from 'react-native';

const Estilos = {
  principal: {
    paddingTop: 40
  },

  imagem: {
    justifyContent: 'flex-end',
    padding: 5
  }
};

const App = () => {
  const {principal, imagem} = Estilos;

  return (

    <View style={principal, imagem}>

      <Image source={require('./imgs/uvas.png')}>
        <Text>Legenda para a foto</Text>
      </Image>

    </View>

  );

};

AppRegistry.registerComponent('reactEstiloso', () => App);
