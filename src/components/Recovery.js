import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import { No2of2, No3of1, No4of2 } from '../image';

const { width, height } = Dimensions.get('window');

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
  image: {
    flex: 1,
    maxWidth: width,
    resizeMode: 'contain',
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  paginationText: { fontSize: 20 },
  contextStyle: {
    fontSize: 20,
    textAlign: 'left',
  },
  barStyle: {
    height: 150,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 }, // 左右不要有陰影
    backgroundColor: '#fff',
  },
};

class Recovery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: '',
      index: 0,
      total: 0,
    };
  }

  componentDidMount() {
    console.log('test');
  }

  renderPagination() {
    const { barStyle, paginationStyle, paginationText, contextStyle } = styles;
    const { context, index, total } = this.state;
    return (
      <View style={barStyle}>
        <Text style={contextStyle}>{context}</Text>
        <View style={paginationStyle}>
          <Text style={{ color: 'grey' }}>
            <Text style={paginationText}>{index}</Text>/{total}
          </Text>
        </View>
      </View>
    );
  }

  render() {
    const { containerStyle, wrapper, slide, backStyle, text, image } = styles;
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
          // renderPagination={this.pagination}
          showsButtons
          loop={false}
        >
          <View style={slide}>
            <View>
              <Image style={image} source={No2of2} />
              {this.renderPagination()}
            </View>
          </View>
          <View style={slide}>
            <View>
              <Image style={image} source={No3of1} />
              {this.renderPagination()}
            </View>
          </View>
          <View style={slide}>
            <View>
              <Image style={image} source={No3of1} />
              {this.renderPagination()}
            </View>
          </View>
          <View style={slide}>
            <Text style={text}>恭喜完成！</Text>
          </View>
        </Swiper>
        {this.renderPagination}
      </View>
    );
  }
}

export default Recovery;
