import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import HomePage from './HomePage';
import Recovery from './Recovery';
import RankingList from './RankingList';
import PersonalInformation from './PersonalInformation';

class RouterComponent extends Component {
  render() {
    return (
      <Router backAndroidHandler={() => true}>
        <Scene key="root" initial>
          <Scene key="homePage" component={HomePage} initial hideNavBar />
          <Scene key="recovery" component={Recovery} hideNavBar />
          <Scene key="rankingList" component={RankingList} hideNavBar />
          <Scene key="personalInformation" component={PersonalInformation} />
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
