import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import HomePage from './HomePage';
import Recovery from './Recovery';
import RankingList from './RankingList';
import PersonalInformation from './PersonalInformation';
import Start from './Start';

class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" initial>
          <Scene key="start" component={Start} initial hideNavBar />
          <Scene key="homePage" component={HomePage} hideNavBar />
          <Scene key="recovery" component={Recovery} hideNavBar />
          <Scene key="rankingList" component={RankingList} hideNavBar />
          <Scene
            key="personalInformation"
            component={PersonalInformation}
            hideNavBar
          />
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
