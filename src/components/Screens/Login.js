import React, { Component } from 'react';
import {
   StyleSheet,
   View,
   Image,
   TouchableOpacity,
   ImageBackground,
   Dimensions
} from 'react-native';
import FontText from '../FontText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationService from '../../services/navigate';

export default class Login extends Component {
   constructor() {
      super();

      const isPortrait = () => {
         const dim = Dimensions.get('screen');
         return dim.height >= dim.width;
      };

      this.state = {
         orientation: isPortrait() ? 'portrait' : 'landscape'
      };
      // Event Listener for orientation changes
      Dimensions.addEventListener('change', () => {
         this.setState({
            orientation: isPortrait() ? 'portrait' : 'landscape'
         });
      });
   }

   render() {
      return (
         <ImageBackground
            source={require('../../../assets/images/login-background.jpg')}
            style={styles.containerBackground}>
            <View style={styles.container}>
               <View style={styles.logoCointainer}>
                  <Image
                     source={{
                        uri:
                           'https://www.clipartwiki.com/clipimg/full/146-1460660_handyman-clipart-hardware-store-mr-fix-it-logo.png'
                     }}
                     style={{
                        width: 175,
                        height: 175,
                        marginBottom:
                           this.state.orientation == 'landscape' ? 0 : 50
                     }}
                  />
               </View>
               <View style={styles.buttonContainer}>
                  <TouchableOpacity
                     style={styles.button}
                     onPress={() => NavigationService.navigate('LoginByPhone')}>
                     <Image
                        source={{
                           uri:
                              'https://img.icons8.com/plasticine/40/000000/sms.png'
                        }}
                        style={{
                           width: 35,
                           height: 35
                        }}
                     />
                     <FontText style={styles.titleText}>
                        Đăng nhập bằng số điện thoại
                     </FontText>
                     <Icon name="arrow-right" style={{ fontSize: 20 }} />
                  </TouchableOpacity>
               </View>
               <View style={styles.buttonContainer}>
                  <TouchableOpacity
                     style={styles.button}
                     onPress={() =>
                        NavigationService.navigate('Tabs', { type: 'Login' })
                     }>
                     <Image
                        source={{
                           uri:
                              'https://img.icons8.com/plasticine/100/000000/google-logo.png'
                        }}
                        style={{ width: 30, height: 30 }}
                     />
                     <FontText style={styles.titleText}>
                        Đăng nhập bằng Google
                     </FontText>
                     <Icon name="arrow-right" style={{ fontSize: 20 }} />
                  </TouchableOpacity>
               </View>
               <View style={styles.buttonContainer}>
                  <TouchableOpacity
                     style={styles.button}
                     onPress={() => NavigationService.navigate('Tabs')}>
                     <Image
                        source={{
                           uri:
                              'https://img.icons8.com/office/40/000000/facebook-new.png'
                        }}
                        style={{
                           width: 28,
                           height: 28
                        }}
                     />
                     <FontText style={styles.titleText}>
                        Đăng nhập bằng Facebook
                     </FontText>
                     <Icon name="arrow-right" style={{ fontSize: 20 }} />
                  </TouchableOpacity>
               </View>
            </View>
         </ImageBackground>
      );
   }
}

const styles = StyleSheet.create({
   containerBackground: {
      flex: 1,
      backgroundColor: 'blue'
   },
   container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(255,255,255,0.5)'
   },
   slogan: {
      marginBottom: 30
   },
   logoCointainer: {
      alignItems: 'center'
   },
   buttonContainer: {
      marginVertical: 10,
      alignItems: 'center',
      paddingHorizontal: '10%'
   },
   titleText: {
      fontSize: 16
   },
   button: {
      backgroundColor: '#fff',
      width: '100%',
      paddingHorizontal: '5%',
      borderWidth: 1,
      borderColor: '#F56258',
      height: 47,
      alignItems: 'center',
      borderRadius: 25,
      flexDirection: 'row',
      justifyContent: 'space-between'
   }
});
