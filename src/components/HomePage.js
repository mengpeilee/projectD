import React, { Component } from 'react';
import { Button } from 'react-native-paper';

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
};

class HomePage extends Component {
  render() {
    return (
      <Button
        icon="add-a-photo"
        mode="contained"
        onPress={() => console.log('Pressed')}
      >
        Press me
      </Button>
    );
  }
}

export default HomePage;
