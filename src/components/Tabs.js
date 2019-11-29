import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import IconS from 'react-native-vector-icons/SimpleLineIcons';
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
                     <IconS
                        name="wrench"
                        style={{ color: tintColor, fontSize: 23 }}
                     />
                  )
               }
            },
            History: {
               screen: History,
               navigationOptions: {
                  tabBarLabel: <FontText>Lịch sử</FontText>,
                  tabBarIcon: ({ tintColor }) => (
                     <Icon
                        name="clipboard"
                        style={{ color: tintColor, fontSize: 23 }}
                     />
                  )
               }
            },
            Profile: {
               screen: Profile,
               navigationOptions: {
                  tabBarLabel: <FontText>Tài khoản</FontText>,
                  tabBarIcon: ({ tintColor }) => (
                     <Icon
                        name="user"
                        style={{ color: tintColor, fontSize: 23 }}
                     />
                  )
               }
            }
         },
         {
            initialRouteName: 'Home',
            activeColor: '#eeeeee',
            inactiveColor: 'grey',
            shifting: true,
            lazy: false,
            backBehavior: 'history',
            barStyle: { backgroundColor: '#EA8025' }
         }
      );
      const AppContainer = createAppContainer(TabNavigator);
      return <AppContainer />;
   }
}
