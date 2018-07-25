import React from 'react';
import {Text, AppRegistry, View, Button} from 'react-native';

const Estilos = {
  principal: {
    paddingTop: 40
  }
};

const App = () => {
  const {principal} = Estilos;

  return (
    <View style={principal}>
      <Button
          title="Clique aqui"
          color="#841584"
          accessibilityLabel="Clique para abrir as notícias"
          onPress={botaoPressionado}/>
    </View>
  );

};

const botaoPressionado = () => {
  alert('Botão pressionado');
};

AppRegistry.registerComponent('reactEstiloso', () => App);
