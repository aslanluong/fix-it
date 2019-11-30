import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Tabs from './src/components/Tabs';
import FindFixer from './src/components/FindFixer';
import RequestDetails from './src/components/Tabs/RequestDetails';
import NavigationService from './src/services/navigate';
import ProfileDetails from './src/components/Tabs/ProfileDetails';
import ProfileEditor from './src/components/Tabs/ProfileEditor';

const RootStack = createStackNavigator(
   {
      Tabs: {
         screen: Tabs,
         navigationOptions: {
            header: null,
            gesturesEnabled: false
         }
      },
      RequestDetails: {
         screen: RequestDetails,
         navigationOptions: {
            header: null,
            gesturesEnabled: false
         }
      },
      ProfileDetails: {
         screen: ProfileDetails,
         navigationOptions: {
            header: null,
            gesturesEnabled: false
         }
      },
      ProfileEditor: {
         screen: ProfileEditor,
         navigationOptions: {
            header: null,
            gesturesEnabled: false
         }
      },
      //  },
      //  Dashboard: {
      //     screen: Dashboard,
      //     navigationOptions: {
      //        header: null,
      //        gesturesEnabled: false
      //     }
      //  },
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
);
const AppContainer = createAppContainer(RootStack);
export default class App extends Component {
   render() {
      return (
         <AppContainer
            ref={navigatorRef => {
               NavigationService.setTopLevelNavigator(navigatorRef);
            }}
         />
      );
   }
}
