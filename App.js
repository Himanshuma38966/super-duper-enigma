import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';



// You can import from local files
import MainScreen from './Screen/MainScreen';
import Domastic from './Screen/DomesticScreen';
import Wild from './Screen/WildScreen';
import Old from  './Screen/OldScreen'
import Water from './Screen/WaterScreen'
export default class App extends React.Component {
  render() {
    return (
     
        <AppContainer/>
     
    );
  }
}

var AppNavigator = createSwitchNavigator({
  Main: MainScreen,
  Domastic: Domastic,
  Wild:Wild,
  Old:Old,
  Water:Water
}); 

const AppContainer = createAppContainer(AppNavigator);
