import React, { Component } from 'react';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
};

class Recovery extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.tagBarStyle} />
      </View>
    );
  }
}

export default Recovery;
