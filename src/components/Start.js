import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  TextInput,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { logo, NYMULogo } from '../image';

const secondColor = '#1A71B7'; // 藍色

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    height: 50,
    justifyContent: 'center',
  },
  headerStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: secondColor,
    alignSelf: 'center',
  },
  inputContainer: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center',
  },
  inputStyle: {
    flex: 1,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 20,
    ...Platform.select({
      ios: { fontFamily: 'PingFang TC' },
      android: {
        fontFamily: 'sans-serif',
        paddingBottom: 8,
      },
    }),
  },
  topArea: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inputArea: {
    flex: 5,
    justifyContent: 'flex-start',
  },
  inputDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#fbfbfb',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 3,
    marginBottom: 5,
    height: 45,
  },
  imageStyle: {
    width: 100,
    height: 100,
    paddingHorizontal: 80,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  button: {
    paddingTop: 20,
    alignSelf: 'flex-end',
  },
  loginBtn: {
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    minWidth: 100,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: secondColor,
    backgroundColor: secondColor,
  },
  loginTextStyle: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center',
  },
};

class Start extends Component {
  state = {
    idText: '',
    nameText: '',
  };

  inputText = () => {
    const { idText, nameText } = this.state;
    const {
      topArea,
      imageStyle,
      inputDiv,
      inputStyle,
      button,
      loginBtn,
      loginTextStyle,
      inputContainer,
      inputArea,
    } = styles;
    return (
      <View style={inputContainer}>
        <View style={topArea}>
          <Image style={imageStyle} source={logo} />
          <Image style={imageStyle} source={NYMULogo} />
        </View>
        <View style={inputArea}>
          <View style={inputDiv}>
            <TextInput
              placeholder="請輸入身分證字號"
              placeholderTextColor="#ccc"
              autoCorrect={false}
              style={inputStyle}
              value={idText}
              autoCapitalize="none"
              onChangeText={text => this.setState({ idText: text })}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={inputDiv}>
            <TextInput
              placeholder="請取一個屬於你的暱稱"
              placeholderTextColor="#ccc"
              autoCorrect={false}
              style={inputStyle}
              value={nameText}
              autoCapitalize="none"
              onChangeText={text => this.setState({ nameText: text })}
              underlineColorAndroid="transparent"
              returnKeyType="done"
              onSubmitEditing={() => {
                Actions.reset('main');
              }}
            />
          </View>
          <View style={button}>
            <TouchableOpacity
              onPress={() => {
                Actions.reset('main');
              }}
              style={loginBtn}
            >
              <Text style={loginTextStyle}>登入</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  renderHeader = () => {
    const { headerContainer, headerStyle } = styles;
    return (
      <View style={headerContainer}>
        <Text style={headerStyle}>頭頸癌吞嚥復健APP</Text>
      </View>
    );
  };

  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        {this.renderHeader()}
        {this.inputText()}
      </View>
    );
  }
}

export default Start;
