import React, { Component } from 'react'
import Tabs from './src/components/Tabs'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const RootStack = createStackNavigator(
  {
     Tabs: {
        screen: Tabs,
        navigationOptions: {
           header: null,
           gesturesEnabled: false
        }
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
     initialRouteName: "Tabs"
  }
);
const AppContainer = createAppContainer(RootStack);

export class App extends Component {
  render() {
    return (
      <AppContainer
        ref={nav => {
          this.navigator = nav;
        }}
      />
    )
  }
}

export default App
