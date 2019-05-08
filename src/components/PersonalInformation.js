import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';

const brandColor = '#54D6C3'; // 藍綠色
const secondColor = '#1A71B7'; // 藍色
const lightColor = '#FFCC33'; // 黃色

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  infoRow: {
    minHeight: 90,
    paddingTop: 10,
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
};

class PersonalInformation extends Component {
  render() {
    const { containerStyle, infoRow, title, content } = styles;
    return (
      <ScrollView style={containerStyle}>
        <View style={infoRow}>
          <Text style={title}>暱稱</Text>
          <Text style={content}>王大哥</Text>
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
    );
  }
}

export default PersonalInformation;
