/* 使用教學
<SureModal
  visible={顯示modal與否}
  onPress={按下按鈕後觸發的function}
  onPressText={按鈕文字}
  Cancel={按下取消後觸發的function}
>
*/
import React from 'react';
import {
  View,
  Modal,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import { icon } from '../image';

const { width } = Dimensions.get('window');

const styles = {
  containerStyle: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: width / 15,
    paddingRight: width / 15,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  cardSectionStyle: {
    padding: 5,
    position: 'relative',
    borderRadius: 15,
    height: 250,
    width: width * 0.8,
    backgroundColor: '#fdfdfd',
    borderColor: '#fff',
  },
  imageStyle: {
    width: 35,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  textStyle: {
    padding: 15,
    fontSize: 16,
    textAlign: 'center',
  },
  checkArea: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnDiv: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 3,
    marginRight: 3,
  },
  sureTextStyle: {
    fontSize: 16,
    textAlign: 'center',
  },
  cancelTextStyle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ED2A67',
  },
};

const SureModal = ({
  children,
  visible,
  onPress,
  onPressText,
  Cancel,
  onRequestClose,
}) => {
  const {
    containerStyle,
    cancelTextStyle,
    checkArea,
    btnDiv,
    sureTextStyle,
    textStyle,
    cardSectionStyle,
    imageStyle,
  } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onRequestClose}
    >
      <View style={containerStyle}>
        <View style={cardSectionStyle}>
          <View style={{ flex: 5 }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Image style={imageStyle} source={icon} />
            </View>
            <View style={{ flex: 2, justifyContent: 'center' }}>
              <Text style={textStyle}>{children}</Text>
            </View>
          </View>
          <View style={checkArea}>
            <TouchableOpacity style={btnDiv} onPress={Cancel}>
              <Text style={cancelTextStyle}>否</Text>
            </TouchableOpacity>
            <TouchableOpacity style={btnDiv} onPress={onPress}>
              <Text style={sureTextStyle}>{onPressText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export { SureModal };
