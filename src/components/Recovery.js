import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import { No2of2, No3of1, No4of2 } from '../image';

const { width } = Dimensions.get('window');

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
    textAlign: 'center',
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

const recoveryData = {
  firstPracticeTitle: '孟德爾森練習\nstep1-3、共10次',
  firstPracticeText1: '將您的手指放在喉結上',
  firstPracticeText2: '做一個吞嚥的動作，並感受您的喉結上下移動',
  firstPracticeText3:
    '再吞嚥一次，用您的手向上推擠喉嚨的肌肉，讓喉結在上方停留三秒',
};

class Recovery extends Component {
  componentDidMount() {
    console.log('test');
  }

  renderPagination = (index, total, context) => {
    const { barStyle, paginationStyle, paginationText, contextStyle } = styles;
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
  };

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
          ref={swiper => {
            this.swiper = swiper;
          }}
        >
          <View style={slide}>
            <Text style={text}>{recoveryData.firstPracticeTitle}</Text>
          </View>
          <View style={slide}>
            <View>
              <Image style={image} source={No2of2} />
              {this.renderPagination(1, 3, recoveryData.firstPracticeText1)}
            </View>
          </View>
          <View style={slide}>
            <View>
              <Image style={image} source={No3of1} />
              {this.renderPagination(2, 3, recoveryData.firstPracticeText2)}
            </View>
          </View>
          <View style={slide}>
            <View>
              <Image style={image} source={No4of2} />
              {this.renderPagination(3, 3, recoveryData.firstPracticeText3)}
            </View>
          </View>
          <View style={slide}>
            <Text
              style={text}
              onPress={() => {
                this.swiper.scrollBy(-4, false);
              }}
            >
              請重複10次！
            </Text>
          </View>
        </Swiper>
        {this.renderPagination}
      </View>
    );
  }
}

export default Recovery;
