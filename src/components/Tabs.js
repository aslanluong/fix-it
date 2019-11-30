import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import FontText from './FontText';
import { MultiBarToggle, MultiBar } from 'react-native-multibar'
import Home from './Tabs/Home';
import History from './Tabs/History';
import Profile from './Tabs/Profile';

export default class Tabs extends Component {
    render() {
        const TabsNavigator = createBottomTabNavigator({
            Home: {
                screen: Home,
                navigationOptions: () => ({
                    tabBarIcon: ({ tintColor }) => (
                        <Icon
                            name="bookmark"
                            color={tintColor}
                            size={24}
                        />
                    ),
                })
            },
            History: {
                screen: History,
                navigationOptions: () => ({
                    tabBarIcon: ({ tintColor }) => (
                        <Icon
                            name="heart"
                            color={tintColor}
                            size={24}
                        />
                    ),
                })
            },
            MultiBar: {
                screen: () => null,
                navigationOptions: ({ navigation }) => ({
                    tabBarIcon: () => (
                        <MultiBarToggle
                            size={18}
                            navigation={navigation}
                            toggleSize={65}
                            routes={[
                                {
                                    routeName: 'Home',
                                    color: '#FF8360',
                                    icon: (
                                        <Icon
                                            name="heart"
                                            color="#333333"
                                            size={15}
                                        />
                                    )
                                },
                                {
                                    routeName: 'Home',
                                    color: '#E8E288',
                                    icon: (
                                        <Icon
                                            name="heart"
                                            color="#333333"
                                            size={15}
                                        />
                                    )
                                },
                                {
                                    routeName: 'Home',
                                    color: '#7DCE82',
                                    icon: (
                                        <Icon
                                            name="heart"
                                            color="#333333"
                                            size={15}
                                        />
                                    )
                                },
                            ]}
                            icon={(
                                <Icon
                                    name="plus"
                                    color="#FFFFFF"
                                    size={30}
                                />
                            )}
                        />
                    ),
                }),
                params: {
                    navigationDisabled: true
                }
            },
            NoName: {
                screen: Home,
                navigationOptions: () => ({
                    tabBarIcon: ({ tintColor }) => (
                        <Icon
                            name="lock"
                            color={tintColor}
                            size={24}
                        />
                    )
                })
            },
            Profile: {
                screen: Profile,
                navigationOptions: () => ({
                    tabBarIcon: ({ tintColor }) => (
                        <Icon
                            name="user"
                            color={tintColor}
                            size={24}
                        />
                    )
                })
            }
        }, {
            tabBarComponent: MultiBar,
            tabBarOptions: {
                showLabel: false,
                activeTintColor: '#F8F8F8',
                inactiveTintColor: '#586589',
                style: {
                    backgroundColor: '#171F33'
                },
                tabStyle: {},
            }
        });
        const AppContainer = createAppContainer(TabsNavigator);
        return <AppContainer />;
    }
}
