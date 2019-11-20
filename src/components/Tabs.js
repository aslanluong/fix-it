import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Home from './Tabs/Home';
import History from './Tabs/History';
import Profile from './Tabs/Profile';

export default class Tabs extends Component {
  render() {
    const TabNavigator = createMaterialBottomTabNavigator(
      {
        Home: {
          screen: Home,
          navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
               <Icon name="home" style={{ color: tintColor, fontSize: 20, marginTop: 3 }} />
            )
          },
        },
        History: {
          screen: History,
          navigationOptions: {
            tabBarLabel: 'History',
            tabBarIcon: ({ tintColor }) => (
               <Icon name="clipboard" style={{ color: tintColor, fontSize: 20, marginTop: 3 }} />
            )
          },
        },
        Profile: {
          screen: Profile,
          navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => (
               <Icon name="user" style={{ color: tintColor, fontSize: 20, marginTop: 3 }} />
            )
          },
        },
      },
      {
        initialRouteName: 'Home',
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        shifting: true,
        barStyle: {backgroundColor: '#694fad'},
      },
    );
    const AppContainer = createAppContainer(TabNavigator);
    return <AppContainer/>;
  }
}
