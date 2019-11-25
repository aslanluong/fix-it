import React from 'react'
import { Text } from 'react-native'
export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
    };

    render() {
        return (
            <>
                <Text>Hello</Text>
            </>
        )
    }
}