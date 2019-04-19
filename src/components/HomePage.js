import React, { Component } from 'react';
import { View, Text } from 'react-native';

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
};

class HomePage extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>Hiiiii</Text>
      </View>
    );
  }
}

export default HomePage;
