import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';

<<<<<<< HEAD

import Rate from './src/Rate';



export default class App extends Component {
  render() {
    return (
      <Rate/>
    )
  }
}
=======
import Tabs from './src/components/Tabs';
//import Main from './src/components/TimeLines/TineLine'
import Main from './src/components/Rating/Rating'

// const RootStack = createStackNavigator(
//    {
//       Tabs: {
//          screen: Tabs,
//          navigationOptions: {
//             header: null,
//             gesturesEnabled: false,
//          },
//          //  },
//          //  Dashboard: {
//          //     screen: Dashboard,
//          //     navigationOptions: {
//          //        header: null,
//          //        gesturesEnabled: false
//          //     }
//          //  },
//       },
//    },
//    {
//       initialRouteName: 'Tabs',
//    },
// );
// const AppContainer = createAppContainer(RootStack);
// export default class App extends Component {
//    render() {
//       return (
//          <AppContainer
//             ref={nav => {
//                this.navigator = nav;
//             }}
//          />
//       );
//    }
// }
export default Main
>>>>>>> 69a3b106a36e98ffa7c86b3255b2b1328e3147d9
