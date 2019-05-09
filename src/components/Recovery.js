import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backStyle: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
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
    const { containerStyle, wrapper, slide, backStyle } = styles;
    return (
      <View style={containerStyle}>
        <TouchableOpacity
          style={backStyle}
          onPress={() => {
            Actions.pop();
          }}
        >
          <Icon
            name="ios-arrow-back"
            backgroundColor="rgba(0,0,0,0)"
            color="#1A71B7"
            size={30}
          />
        </TouchableOpacity>
        <Swiper
          style={wrapper}
          renderPagination={renderPagination}
          showsButtons
          loop={false}
        >
          <View style={slide}>
            <Text style={styles.text}>Test</Text>
          </View>
          <View style={slide}>
            <Text style={styles.text}>Test2</Text>
          </View>
          <View style={slide}>
            <Text style={styles.text}>Test2</Text>
          </View>
        </Swiper>
      </View>
    );
  }
}

export default Recovery;
