
import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, ScrollView, TextInput, Button, Alert } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';
import { bold } from 'ansi-colors';


const value = 'Give us your feedback, Thank you!';

export default class Rate extends Component {
   ratingCompleted(rating) {
      // this.setState({
      //   rating: rating
      // });
   }

   render() {
      return (
         <ScrollView>
            <View style={{
               backgroundColor: '#EEEEEE',
               flex: 1,
               flexDirection: 'column'
            }}>


               <View style={{
                  borderColor: 'white',
                  backgroundColor: 'white',
                  padding: 10,
                  margin: 15,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignContent: 'center',
                  paddingTop: 10,
                  marginBottom: 15,
                  borderWidth: 1,
               }}>
                  <Text style={[styles.titleText, {
                     marginTop: 50, color: '#ff9051',
                     fontSize: 32,
                     fontWeight: 'bold',
                     marginTop: 15,
                     marginBottom: 15,
                  }]}>Rate me, Thank you!</Text>
               </View>


               <View style={{
                  borderColor: 'white',
                  backgroundColor: 'white',
                  padding: 10,
                  margin: 15,
                  marginTop: 0,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignContent: 'center',
                  paddingTop: 0,
                  //marginBottom: 15,
                  borderWidth: 1,
               }}>
                  <Text style={[styles.titleText, { marginTop: 30, color: '#ff9051', fontSize: 24, fontWeight: 'bold' }]}>Please Swipe to Rate</Text>
                  <Rating
                     showRating
                     imageSize={40}
                     ratingTextColor='#ff9051'
                     ratingColor='#ff9051'
                     onFinishRating={this.ratingCompleted}
                     style={{ paddingVertical: 10 }}
                     startingValue={5}
                  />
               </View>


               <View style={{
                  borderColor: 'white',
                  backgroundColor: 'white',
                  padding: 10,
                  margin: 15,
                  marginTop: 0,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignContent: 'center',
                  paddingTop: 0,
                  marginBottom: 15,
                  borderWidth: 1,
                  // borderWidth: 1,
                  // borderColor: 'pink'
               }}>
                  <Text style={{
                     padding: 15,
                     // paddingLeft: 15,
                     // paddingRight: 15,
                     fontSize: 15,
                     color: 'black',
                  }}>
                     I hope to received your comments to improve our services, <Text style={{ color: '#f1c40f', fontWeight: 'bold', fontSize: 25 }}>Thank you!</Text>
                  </Text>
               </View>


               <View style={{
                  flexDirection: 'column',
                  //borderColor: 'red',
                  backgroundColor: '#DDDDDD',
                  padding: 10,
                  margin: 15,
                  marginTop: 0,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignContent: 'center',
                  paddingTop: 0,
                  marginBottom: 15,
                  //borderWidth: 1,
               }}>
                  <View style={{
                     //borderColor: '',
                     backgroundColor: 'white',
                     padding: 10,
                     margin: 10,
                     borderRadius: 5,
                     //borderWidth: 1,
                  }}>
                     <TextInput
                        style={{
                           fontSize: 16,
                           paddingLeft: 15,
                           // borderColor: 'gray', 
                           // borderWidth: 1,
                        }}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                     />

                  </View>

                  <View style={{

                     // borderWidth: 1,
                     // height: '100%'

                  }}>
                     <Button
                        style={{ height: '100%', borderRadius: 2 }}
                        title="FEED BACK"
                        color="#009900"
                        onPress={() => Alert.alert('Thanks for your rating!')}
                     />
                  </View>
               </View>
            </View>
         </ScrollView >
      );
   }

}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white',
   },
   headingContainer: {
      paddingTop: 50,
   },
   titleText: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 5,
      fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : null,
      color: '#27ae60',
   },
   subtitleText: {
      fontSize: 18,
      fontWeight: '400',
      textAlign: 'center',
      fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : null,
      color: '#34495e',
   },
   viewContainer: {
      flex: 1
   },
});