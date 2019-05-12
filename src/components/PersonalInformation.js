import React, { Component } from 'react';
import {
  Keyboard,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

const brandColor = '#54D6C3'; // 藍綠色
const secondColor = '#1A71B7'; // 藍色
const lightColor = '#FFCC33'; // 黃色

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  backStyle: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoRow: {
    minHeight: 90,
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    borderColor: brandColor,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: secondColor,
  },
  content: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#565656',
  },
  contentEditing: {
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  nickNameRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
};

class PersonalInformation extends Component {
  state = { isEdited: false, nickName: '王大哥' };

  componentDidMount() {
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidHideListener.remove();
  }

  keyboardDidHide = () => {
    this.setState({ isEdited: false });
  };

  render() {
    const {
      containerStyle,
      infoRow,
      title,
      content,
      contentEditing,
      nickNameRow,
      backStyle,
    } = styles;
    const { isEdited } = this.state;
    return (
      <View style={containerStyle}>
        <TouchableOpacity
          style={backStyle}
          onPress={() => {
            Actions.pop();
          }}
        >
          <Icon2
            name="ios-arrow-back"
            backgroundColor="rgba(0,0,0,0)"
            color={secondColor}
            size={30}
          />
        </TouchableOpacity>
        <ScrollView>
          <View style={infoRow}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ isEdited: true });
              }}
              style={nickNameRow}
            >
              <View>
                <Text style={title}>暱稱</Text>
                {!isEdited && (
                  <Text style={content}>{this.state.nickName}</Text>
                )}
                {isEdited && (
                  <TextInput
                    style={contentEditing}
                    autoFocus
                    returnKeyType="send"
                    onChangeText={text => this.setState({ nickName: text })}
                    onSubmitEditing={() => {
                      this.setState({ isEdited: false });
                    }}
                  >
                    {this.state.nickName}
                  </TextInput>
                )}
              </View>

              <Icon name="edit" size={35} color={lightColor} />
            </TouchableOpacity>
          </View>
          <View style={infoRow}>
            <Text style={title}>姓名</Text>
            <Text style={content}>王正雄</Text>
          </View>
          <View style={infoRow}>
            <Text style={title}>年齡</Text>
            <Text style={content}>57</Text>
          </View>
          <View style={infoRow}>
            <Text style={title}>性別</Text>
            <Text style={content}>男</Text>
          </View>
          <View style={infoRow}>
            <Text style={title}>診斷</Text>
            <Text style={content}>口腔癌</Text>
          </View>
          <View style={infoRow}>
            <Text style={title}>有無手術</Text>
            <Text style={content}>有</Text>
          </View>
          <View style={infoRow}>
            <Text style={title}>有無放療</Text>
            <Text style={content}>無</Text>
          </View>
          <View style={infoRow}>
            <Text style={title}>有無化療</Text>
            <Text style={content}>有</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default PersonalInformation;
