import React, { Component } from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import HomePage from './HomePage';

class RouterComponent extends Component {
  render() {
    return (
      <Router backAndroidHandler={() => true}>
        <Stack duration={0}>
          <Scene key="root" initial>
            <Scene key="homePage" component={HomePage} hideNavBar initial />
          </Scene>
        </Stack>
      </Router>
    );
  }
}

export default RouterComponent;
