import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import FontText from './FontText';

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
                  tabBarLabel: <FontText>Sửa chữa</FontText>,
                  tabBarIcon: ({ tintColor }) => (
                     <IconM
                        name="hammer"
                        style={{ color: tintColor, fontSize: 20, marginTop: 3 }}
                     />
                  ),
               },
            },
            History: {
               screen: History,
               navigationOptions: {
                  tabBarLabel: <FontText>History</FontText>,
                  tabBarIcon: ({ tintColor }) => (
                     <Icon
                        name="clipboard"
                        style={{ color: tintColor, fontSize: 20, marginTop: 3 }}
                     />
                  ),
               },
            },
            Profile: {
               screen: Profile,
               navigationOptions: {
                  tabBarLabel: <FontText>Profile</FontText>,
                  tabBarIcon: ({ tintColor }) => (
                     <Icon
                        name="user"
                        style={{ color: tintColor, fontSize: 20, marginTop: 3 }}
                     />
                  ),
               },
            },
         },
         {
            initialRouteName: 'Home',
            activeColor: '#eeeeee',
            inactiveColor: '#cccccc',
            shifting: true,
            lazy: false,
            barStyle: { backgroundColor: '#EA8025' },
         },
      );
      const AppContainer = createAppContainer(TabNavigator);
      return <AppContainer />;
   }
}