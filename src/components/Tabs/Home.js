import React, { Component } from 'react';
import {
   View,
   StyleSheet,
   Image,
   TouchableNativeFeedback,
   TouchableOpacity,
   TouchableHighlight,
   ScrollView,
   Dimensions,
   SafeAreaView
} from 'react-native';
import FontText from '../FontText';

import NavigationService from '../../services/navigate';
import { APP_CONST } from '../../../app.const';
import HeaderInfo from '../Screens/HeaderInfo';

export default class Home extends Component {
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
         <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.index}>
               <HeaderInfo />
               <ScrollView
                  horizontal={
                     this.state.orientation === 'landscape' ? true : false
                  }>
                  <View style={styles.menu}>
                     <View style={styles.itemContainer}>
                        <TouchableNativeFeedback
                           onPress={() =>
                              NavigationService.navigate('CreateRequest')
                           }>
                           <View style={styles.item}>
                              <Image
                                 style={styles.image}
                                 source={APP_CONST.TV_ICON}
                              />
                              <FontText>Thiết bị giải trí</FontText>
                           </View>
                        </TouchableNativeFeedback>
                     </View>
                     <View style={styles.itemContainer}>
                        <TouchableNativeFeedback
                           onPress={() =>
                              NavigationService.navigate('CreateRequest')
                           }>
                           <View style={styles.item}>
                              <Image
                                 style={styles.image}
                                 source={APP_CONST.LAMP_ICON}
                              />
                              <FontText>Thiết bị chiếu sáng</FontText>
                           </View>
                        </TouchableNativeFeedback>
                     </View>
                     <View style={styles.itemContainer}>
                        <TouchableNativeFeedback
                           onPress={() =>
                              NavigationService.navigate('CreateRequest')
                           }>
                           <View style={styles.item}>
                              <Image
                                 style={styles.image}
                                 source={APP_CONST.WASHING_MACHINE_ICON}
                              />
                              <FontText>Thiết bị giặt ủi</FontText>
                           </View>
                        </TouchableNativeFeedback>
                     </View>
                     <View style={styles.itemContainer}>
                        <TouchableNativeFeedback
                           onPress={() =>
                              NavigationService.navigate('CreateRequest')
                           }>
                           <View style={styles.item}>
                              <Image
                                 style={styles.image}
                                 source={APP_CONST.CUTLERY_ICON}
                              />
                              <FontText>Thiết bị nhà bếp</FontText>
                           </View>
                        </TouchableNativeFeedback>
                     </View>
                     <View style={styles.itemContainer}>
                        <TouchableNativeFeedback
                           onPress={() =>
                              NavigationService.navigate('CreateRequest')
                           }>
                           <View style={styles.item}>
                              <Image
                                 style={styles.image}
                                 source={APP_CONST.AIR_CONDITIONER_ICON}
                              />
                              <FontText>Điều hoà phòng</FontText>
                           </View>
                        </TouchableNativeFeedback>
                     </View>
                     <View style={styles.itemContainer}>
                        <TouchableNativeFeedback
                           onPress={() =>
                              NavigationService.navigate('CreateRequest')
                           }>
                           <View style={styles.item}>
                              <Image
                                 style={styles.image}
                                 source={APP_CONST.FAUCET_ICON}
                              />
                              <FontText>Hệ thống nước</FontText>
                           </View>
                        </TouchableNativeFeedback>
                     </View>
                  </View>
               </ScrollView>
            </View>
         </SafeAreaView>
      );
   }
}

const styles = StyleSheet.create({
   choice: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      paddingHorizontal: '8%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.9)'
   },
   index: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      elevation: 0
   },
   header: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      backgroundColor: '#f0eff4'
   },
   menu: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingTop: 10,
      justifyContent: 'space-evenly',
      paddingHorizontal: 25,
      backgroundColor: '#f0eff4'
   },
   itemContainer: {
      width: 155,
      height: 190,
      borderRadius: 20,
      overflow: 'hidden',
      marginHorizontal: 5,
      marginBottom: 18,

      // shadow
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 11
      },
      shadowOpacity: 0.57,
      shadowRadius: 15.19,

      elevation: 23
   },
   item: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
   },
   image: {
      width: 80,
      height: 80,
      marginBottom: 15
   },
   container: {
      flexDirection: 'row'
   },
   detailsContainer: {
      flex: 1,
      justifyContent: 'center',
      marginLeft: 24
   },
   option: {
      width: 155,
      height: 190,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
   }
});
