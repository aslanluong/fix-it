import React, {Component} from 'react';
import { View, Text } from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import Home from './Tabs/Home';
import History from './Tabs/History';
import Profile from './Tabs/Profile';

export default class Tabs extends Component {
   render() {
      const BottomTab = createAppContainer(
         createMaterialBottomTabNavigator(
            {
               Home: {screen: Home},
               History: {screen: History},
               Profile: {screen: Profile},
            },
            {
               initialRouteName: 'Home',
               activeColor: '#f0edf6',
               inactiveColor: '#3e2465',
               barStyle: {backgroundColor: '#694fad'},
            },
         ),
      );
      return <BottomTab />;
   }
}
