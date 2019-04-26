import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#54D6C3',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  paginationText: { fontSize: 20 },
  barStyle: {
    height: 90,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 }, // 左右不要有陰影
    backgroundColor: '#fff',
  },
};

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.barStyle}>
      <View style={styles.paginationStyle}>
        <Text style={{ color: 'grey' }}>
          <Text style={styles.paginationText}>{index + 1}</Text>/{total}
        </Text>
      </View>
    </View>
  );
};

class Recovery extends Component {
  componentDidMount() {
    console.log('test');
  }

  render() {
    return (
      <Swiper
        style={styles.wrapper}
        renderPagination={renderPagination}
        showsButtons
        loop={false}
      >
        <View style={styles.slide}>
          <Text style={styles.text}>Test</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Test2</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Test2</Text>
        </View>
      </Swiper>
    );
  }
}

export default Recovery;
