import React from 'react';
import {Text, AppRegistry, View} from 'react-native';

const Estilos = {
  principal: {
    backgroundColor: 'cornflowerblue',
    flex: 1 // vai preencher o espaço na proporção que é passada, no caso 1:1
    // height: 300,
    // justifyContent: 'space-around',
    // alignItems: 'stretch',
    // flexDirection: 'row'
  },

  topo: {
    // fontSize: 40,
    backgroundColor: 'brown',
    flex: 2 // 2:7 porque divide espaço com os outros elementos, a partir do valor passado para cada, dentro do principal
    // paddingTop: 15,
    // color: '#fff',
    // fontStyle: 'italic',
    // fontWeight: 'bold' // ou valores entre 100 e 900
    // textAlign: 'center'
    // textDecorationLine: 'underline line-through'
    // height: 60,
    // width: 60
  },

  conteudo: {
    // fontSize: 40,
    backgroundColor: 'yellowgreen',
    flex: 4
    // height: 60,
    // width: 60
  },

  rodape: {
    // fontSize: 40,
    backgroundColor: 'orangered',
    flex: 1
    // height: 60,
    // width: 60
  }
};

const App = () => {
  const {topo, principal, conteudo, rodape} = Estilos;

  return (
    <View style={principal}>
      <Text style={topo}>Topo</Text>
      <Text style={conteudo}>Conteúdo</Text>
      <Text style={rodape}>Rodapé</Text>
    </View>
  );
};

AppRegistry.registerComponent('reactEstiloso', () => App);
