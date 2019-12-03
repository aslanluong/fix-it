import React, { Component } from 'react';
import {
   View,
   StyleSheet,
   Image,
   TouchableNativeFeedback,
   ScrollView,
   Dimensions,
   SafeAreaView
} from 'react-native';
import FontText from '../FontText';
import NavigationService from '../../services/navigate';
import { APP_CONST } from '../../../app.const';

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
         <SafeAreaView>
            <View style={styles.header}>
               <View>
                  <FontText style={{ paddingLeft: 0, fontSize: 17 }}>
                     Xin chào Thắng,
                  </FontText>
                  <FontText style={{ fontSize: 23 }}>
                     Chọn loại thiết bị cần sửa chữa
                  </FontText>
               </View>
            </View>
            <ScrollView
               horizontal={
                  this.state.orientation === 'landscape' ? true : false
               }>
               <View style={styles.menu}>
                  <View style={styles.itemContainer}>
                     <TouchableNativeFeedback
                        onPress={() =>
                           NavigationService.navigate('CreateRequest', {
                              type: 'TV'
                           })
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
                     <TouchableNativeFeedback>
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
                     <TouchableNativeFeedback>
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
                     <TouchableNativeFeedback>
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
                     <TouchableNativeFeedback>
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
                     <TouchableNativeFeedback>
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
         </SafeAreaView>
      );
   }
}

const styles = StyleSheet.create({
   header: {
      height: 75,
      alignItems: 'center',
      justifyContent: 'flex-end',
      backgroundColor: '#f0eff4'
   },
   menu: {
      paddingTop: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      paddingHorizontal: 25,
      paddingBottom: 55,
      backgroundColor: '#f0eff4'
   },
   itemContainer: {
      width: 155,
      height: 190,
      borderRadius: 20,
      overflow: 'hidden',
      marginHorizontal: 5,
      marginBottom: 20,

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
      flexDirection: 'row',
   },
   detailsContainer: {
      flex: 1,
      justifyContent: 'center',
      marginLeft: 24,
   },
});
