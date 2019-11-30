import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Tabs from './src/components/Tabs';

import Login from './src/components/Screens/Login';
import LoginForPhoneNumber from './src/components/Screens/LoginForPhoneNumber';
import Verification from './src/components/Screens/Verification';
import CreateRequest from './src/components/Screens/CreateRequest';


const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    LoginForPhoneNumber: {
      screen: LoginForPhoneNumber,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    Verification: {
      screen: Verification,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    CreateRequest: {
      screen: CreateRequest,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    Tabs: {
      screen: Tabs,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
      
      
      //  },
      //  Dashboard: {
      //     screen: Dashboard,
      //     navigationOptions: {
      //        header: null,
      //        gesturesEnabled: false
      //     }
      //  },
    },
  },
  {
    initialRouteName: 'CreateRequest',
  },
);
const AppContainer = createAppContainer(RootStack);
export default class App extends Component {
  render() {
    return (
      <AppContainer
        ref={nav => {
          this.navigator = nav;
        }}
      />
    );
  }
}
