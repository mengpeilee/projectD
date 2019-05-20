import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import { Button } from 'react-native-paper';
import SureModal from './SureModal';
import {
  No1of1,
  No1of2,
  No1of3,
  No2of1,
  No2of2,
  No2of3,
  No3of1,
  No3of2,
  No3of3,
  No4of1,
  No4of2,
  No4of3,
  No5of1,
  No5of2,
  No5of3,
  No1gif,
  No2gif,
  No3gif,
  No4gif,
  No5gif,
} from '../image';

const { width } = Dimensions.get('window');

const brandColor = '#54D6C3'; // 藍綠色
const secondColor = '#1A71B7'; // 藍色

const styles = {
  pageHeader: {
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: secondColor,
    left: -35,
    alignSelf: 'center',
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backStyle: {
    left: 0,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: brandColor,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  endText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    maxWidth: width,
    resizeMode: 'contain',
  },
  gifImage: {
    flex: 3,
    maxWidth: width,
    resizeMode: 'contain',
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  paginationText: { fontSize: 20 },
  contentView: { padding: 10 },
  contextStyle: {
    fontSize: 25,
    textAlign: 'left',
  },
  barStyle: {
    height: 230,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 }, // 左右不要有陰影
    backgroundColor: '#fff',
  },
};

const recoveryData = [
  {
    title: '孟德爾森練習\nstep1-3、共10次',
    first: '將您的手指放在喉結上',
    second: '做一個吞嚥的動作，並感受您的喉結上下移動',
    third: '再吞嚥一次，用您的手向上推擠喉嚨的肌肉，讓喉結在上方停留三秒',
    endTitle: '完成10次後\n請點擊按鈕前往下一個練習',
    buttonText: '下一個練習',
    firstImage: No1of1,
    secondImage: No1of2,
    thirdImage: No1of3,
    gif: No1gif,
  },
  {
    title: '下巴伸展練習\nstep1-3、共10次',
    first: '將您的頭向後傾，盡可能地張開嘴，越大越好，維持這樣的姿勢達五秒鐘',
    second: '當您將頭後傾停留之時，將您的下巴向前延伸如圖所示',
    third:
      '維持頭後傾的姿勢，將您的下巴向上往鼻子移動試圖要將嘴巴閉起，此時您應該可以感受到脖子前面的部分正在伸展，這樣的姿勢維持五秒鐘',
    endTitle: '完成10次後\n請點擊按鈕前往下一個練習',
    buttonText: '下一個練習',
    firstImage: No2of1,
    secondImage: No2of2,
    thirdImage: No2of3,
    gif: No2gif,
  },
  {
    title: '聲門上吞嚥練習\nstep1-3、共10次',
    first: '由鼻子吸氣然後憋住這口氣',
    second: '繼續憋氣，接著吞一口口水',
    third: '用一個咳嗽或清喉嚨的動作來吐氣，然後再做一次吞嚥的動作',
    endTitle: '完成10次後\n請點擊按鈕前往下一個練習',
    buttonText: '下一個練習',
    firstImage: No3of1,
    secondImage: No3of2,
    thirdImage: No3of3,
    gif: No3gif,
  },
  {
    title: '出力吞嚥\nstep1-3、共10次',
    first: '將您的舌頭向上顎盡可能地用力頂住',
    second:
      '舌頭位於同樣位置時，盡可能地用喉嚨的力量用力吞一口口水，使用喉嚨的肌肉用力擠壓',
    third: '吞嚥後即可放鬆',
    endTitle: '完成10次後\n請點擊按鈕前往下一個練習',
    buttonText: '下一個練習',
    firstImage: No4of1,
    secondImage: No4of2,
    thirdImage: No4of3,
    gif: No4gif,
  },
  {
    title: '馬沙可夫練習\nstep1-3、共10次',
    first: '將您的舌頭伸出在嘴唇或牙齒之間',
    second: '維持舌頭的姿勢，然後嘗試吞一口口水',
    third: '吞嚥後即可放鬆',
    endTitle: '完成10次後\n請點擊按鈕完成練習',
    buttonText: '結算分數',
    firstImage: No5of1,
    secondImage: No5of2,
    thirdImage: No5of3,
    gif: No5gif,
  },
];

class Recovery extends Component {
  state = {
    practiceNum: 1,
    swiperData: recoveryData[0],
    showModal: false,
  };

  componentDidMount() {
    console.log('test');
  }

  renderPagination = (index, total, context) => {
    const {
      barStyle,
      paginationStyle,
      paginationText,
      contextStyle,
      contentView,
    } = styles;
    return (
      <View style={barStyle}>
        <View style={contentView}>
          <Text style={contextStyle}>{context}</Text>
        </View>
        <View style={paginationStyle}>
          <Text style={{ color: 'grey' }}>
            <Text style={paginationText}>{index}</Text>/{total}
          </Text>
        </View>
      </View>
    );
  };

  render() {
    const {
      pageHeader,
      pageTitle,
      titleWrapper,
      containerStyle,
      wrapper,
      slide,
      backStyle,
      text,
      image,
      gifImage,
      endText,
    } = styles;
    const { practiceNum, swiperData, showModal } = this.state;
    return (
      <View style={containerStyle}>
        <SureModal
          visible={showModal}
          onPress={() => {
            this.setState({
              showModal: false,
              swiperData: recoveryData[0],
              practiceNum: 1,
            });
          }}
          onPressText="再來一次吧"
          Cancel={() => {
            this.setState({ showModal: false });
            Actions.pop();
          }}
          cancelText="明天繼續"
        >
          今天很棒！辛苦了!
        </SureModal>
        <View style={pageHeader}>
          <TouchableOpacity
            style={backStyle}
            onPress={() => {
              Actions.pop();
            }}
          >
            <Icon
              name="ios-arrow-back"
              backgroundColor="rgba(0,0,0,0)"
              color={secondColor}
              size={30}
            />
          </TouchableOpacity>
          <View style={titleWrapper}>
            <Text style={pageTitle}>吞嚥復健</Text>
          </View>
        </View>
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
            <Text style={text}>{swiperData.title}</Text>
          </View>
          <View style={slide}>
            <View>
              <Image style={image} source={swiperData.firstImage} />
              {this.renderPagination(1, 3, swiperData.first)}
            </View>
          </View>
          <View style={slide}>
            <View>
              <Image style={image} source={swiperData.secondImage} />
              {this.renderPagination(2, 3, swiperData.second)}
            </View>
          </View>
          <View style={slide}>
            <View>
              <Image style={image} source={swiperData.thirdImage} />
              {this.renderPagination(3, 3, swiperData.third)}
            </View>
          </View>
          <View style={slide}>
            <Image style={gifImage} source={swiperData.gif} />
            <View style={{ flex: 1 }}>
              <Text style={endText}>{swiperData.endTitle}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Button
                mode="contained"
                color={secondColor}
                contentStyle={{ padding: 20, fontSize: 30 }}
                onPress={() => {
                  if (practiceNum === 5) {
                    this.setState({ showModal: true });
                  } else {
                    this.setState({
                      swiperData: recoveryData[practiceNum],
                      practiceNum: practiceNum + 1,
                    });
                  }
                  this.swiper.scrollBy(-4, false);
                }}
              >
                {swiperData.buttonText}
              </Button>
            </View>
          </View>
        </Swiper>
      </View>
    );
  }
}

export default Recovery;
