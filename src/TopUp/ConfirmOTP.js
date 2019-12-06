import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class ConfirmOTP extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
   }

   render() {
      return (
         <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
               <TextInput
                  style={{ fontSize: 28 }}
               />
            </View>

            <View style={{
               width: 50,
               marginLeft: 8,
               alignItems: 'center',
               justifyContent: 'flex-end',
               marginBottom: 10
            }}>
               <Button
                  onPress={() => this.props.navigation.navigate('Rate')}
                  title="Xác nhận"
                  style={{ fontSize: 24, width: '40%' }}

               />
            </View>
         </View>
      );
   }
}
