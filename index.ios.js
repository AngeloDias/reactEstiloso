import React from 'react';
import {Text, AppRegistry, View, Image} from 'react-native';

const Estilos = {
  principal: {
    paddingTop: 40
  }
};

const App = () => {
  const {principal} = Estilos;

  return (
    <View style={principal}>

      <Image
        source={ {uri: 'https://facebook.github.io/react/logo-og.png'} }
        style={{width: 300, height: 300}} />

    </View>
  );

};

AppRegistry.registerComponent('reactEstiloso', () => App);
