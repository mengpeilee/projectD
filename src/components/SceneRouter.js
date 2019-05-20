import React, { Component } from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import HomePage from './HomePage';
import Recovery from './Recovery';
import RankingList from './RankingList';
import PersonalInformation from './PersonalInformation';
import Start from './Start';

class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Stack hideNavBar>
          <Scene key="root" initial>
            <Scene key="start" component={Start} initial hideNavBar />
          </Scene>
          <Scene key="main" hideNavBar>
            <Scene key="homePage" component={HomePage} initial hideNavBar />
            <Scene key="recovery" component={Recovery} hideNavBar />
            <Scene key="rankingList" component={RankingList} hideNavBar />
            <Scene
              key="personalInformation"
              component={PersonalInformation}
              hideNavBar
            />
          </Scene>
        </Stack>
      </Router>
    );
  }
}

export default RouterComponent;
