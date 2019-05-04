import React, { Component } from 'react';
import { View, Text } from 'react-native';

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#FFF',
  },
};

class RankingList extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>this is rankingList page</Text>
      </View>
    );
  }
}

export default RankingList;
