import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import { logo, NYMULogo } from '../image';

const brandColor = '#54D6C3'; // 藍綠色
const secondColor = '#1A71B7'; // 藍色
const lightColor = '#FFCC33'; // 黃色

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  // header
  header: {
    backgroundColor: secondColor,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logoImg: {
    width: 50,
    height: 50,
  },
  NYMULogoImg: {
    width: 55,
    height: 55,
  },
  headerTextArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubTitle: {
    fontSize: 20,
    color: '#fff',
  },
  // panel
  panel: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 120,
    paddingTop: 10,
    paddingBottom: 10,
  },
  panelLabel: { fontSize: 18 },
  panelNumber: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  panelEveryday: {
    alignItems: 'center',
    flex: 1,
  },
  panelTotal: {
    borderColor: secondColor,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    alignItems: 'center',
    flex: 1,
  },
  panelScore: {
    alignItems: 'center',
    flex: 1,
  },
  // functionSection
  functionSection: {
    paddingTop: 15,
    paddingBottom: 15,
    padding: 10,
    height: 120,
    flex: 1,
  },
  functionCard: {
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  iconArea: {
    alignItems: 'center',
    flex: 1,
  },
  titleArea: { flex: 2 },
  rehabilitationIcon: { backgroundColor: brandColor },
  rankingListIcon: { backgroundColor: secondColor },
  personalInformationIcon: { backgroundColor: lightColor },
  cardTitle: { fontSize: 30 },
};

class HomePage extends Component {
  componentDidMount() {
    console.log('test');
  }

  render() {
    const {
      container,
      header,
      logoImg,
      NYMULogoImg,
      headerTextArea,
      headerTitle,
      headerSubTitle,
      panel,
      panelEveryday,
      panelLabel,
      panelNumber,
      panelTotal,
      panelScore,
      functionSection,
      functionCard,
      iconArea,
      rehabilitationIcon,
      titleArea,
      cardTitle,
      rankingListIcon,
      personalInformationIcon,
    } = styles;

    return (
      <View style={container}>
        <View style={header}>
          <Image style={logoImg} source={logo} />
          <View style={headerTextArea}>
            <Text style={headerTitle}>Project D</Text>
            <Text style={headerSubTitle}>頭頸癌吞嚥復健app</Text>
          </View>
          <Image style={NYMULogoImg} source={NYMULogo} />
        </View>
        <View style={panel}>
          <View style={panelEveryday}>
            <Text style={panelLabel}>每天次數</Text>
            <Text style={panelNumber}>5</Text>
          </View>
          <View style={panelTotal}>
            <Text style={panelLabel}>總次數</Text>
            <Text style={panelNumber}>45</Text>
          </View>
          <View style={panelScore}>
            <Text style={panelLabel}>競賽分數</Text>
            <Text style={panelNumber}>70</Text>
          </View>
        </View>
        <View style={functionSection}>
          <TouchableOpacity
            onPress={() => {
              Actions.recovery();
            }}
            style={functionCard}
          >
            <View style={iconArea}>
              <Avatar.Icon
                size={65}
                icon="accessibility"
                color="#fff"
                style={rehabilitationIcon}
              />
            </View>
            <View style={titleArea}>
              <Text style={cardTitle}>吞嚥復健</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Actions.rankingList();
            }}
            style={functionCard}
          >
            <View style={iconArea}>
              <Avatar.Icon size={65} icon="equalizer" style={rankingListIcon} />
            </View>
            <View style={titleArea}>
              <Text style={cardTitle}>競賽排名</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Actions.personalInformation();
            }}
            style={functionCard}
          >
            <View style={iconArea}>
              <Avatar.Icon
                size={65}
                icon="person"
                color="#fff"
                style={personalInformationIcon}
              />
            </View>
            <View style={titleArea}>
              <Text style={cardTitle}>個人資訊</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HomePage;
