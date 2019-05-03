import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import HomePage from './HomePage';
import Recovery from './Recovery';

class RouterComponent extends Component {
  render() {
    return (
      <Router backAndroidHandler={() => true}>
        <Scene key="root" initial>
          <Scene key="homePage" component={HomePage} hideNavBar initial />
          <Scene key="recovery" component={Recovery} />
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
