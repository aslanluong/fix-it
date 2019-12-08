import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//import { createStackNavigator } from 'react-navigation-stack';
import ChooseBank from './src/TopUp/ChooseBank';
import LoginBank from './src/TopUp/LoginBank';
import ConfirmOTP from './src/TopUp/ConfirmOTP';
import Rate from './src/Rate'
import AccumulatePoint from './src/AccumulatePoint';
import { from } from 'rxjs';
//import NavigationService from './src/TopUp/NavigationService';


const TopLevelNavigator = createStackNavigator({
  ChooseBank: { screen: ChooseBank },
  LoginBank: { screen: LoginBank },
  ConfirmOTP: { screen: ConfirmOTP },
  Rate: {screen:Rate}
});

const AppContainer = createAppContainer(TopLevelNavigator);

export default class App extends React.Component {
  // ...

  render() {
    return (
      <AccumulatePoint/>
      // <ChooseBank/>
      //<AppContainer />
      // <AppContainer
      //   ref={navigatorRef => {
      //     NavigationService.setTopLevelNavigator(navigatorRef);
      //   }}
      // />
    );
  }
}
