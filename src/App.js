import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import SceneRouter from './components/SceneRouter';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <SceneRouter />
      </View>
    );
  }
}

export default App;
