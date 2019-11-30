import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import nav from './src/services/navigate'
import Tabs from './src/components/Tabs';
import FindFixer from './src/components/FindFixer';

const RootStack = createStackNavigator(
   {
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
      FindFixer: {
         screen: FindFixer,
         navigationOptions: {
            header: null,
            gesturesEnabled: false,
         }
      },
      // FoldView: {
      //    screen: ExampleList,
      //    navigationOptions: {
      //       header: null,
      //       gesturesEnabled: false,
      //    }
      // },
   },
   {
      initialRouteName: 'Tabs',
   },
);
const AppContainer = createAppContainer(RootStack);
export default class App extends Component {
   render() {
      return (
         <AppContainer
            ref={navigatorRef => {
               nav.setTopLevelNavigator(navigatorRef);
            }}
         />
      );
   }
}
