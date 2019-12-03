import React, { Component } from 'react';
import {
   Text,
   StyleSheet,
   View,
   TouchableOpacity,
   TouchableHighlight,
   Image
} from 'react-native';
import BouncingPreloader from 'react-native-bouncing-preloader';
import FontText from '../FontText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Swipeable from 'react-native-swipeable';
import NavigationService from '../../services/navigate';

const icons = [
   require('../../../assets/images/groove-joint-pliers.png'),
   require('../../../assets/images/hand-saw.png'),
   require('../../../assets/images/long-pliers.png'),
   require('../../../assets/images/pipe-wrench.png'),
   require('../../../assets/images/screwdriver.png'),
   require('../../../assets/images/pliers.png')
];

export default class FindFixer extends Component {
   render() {
      return (
         <View style={styles.container}>
            <View style={styles.detailsContainer}>
               <View style={styles.details}>
                  <View style={{ flex: 1, justifyContent: 'center' }}>
                     <FontText style={{ fontSize: 19 }}>
                        Thắng Lương Thành
                     </FontText>
                     <FontText style={{ fontSize: 13 }}>
                        <Icon name="map-marker" />
                        quận 9, HCM
                     </FontText>
                  </View>
                  <View
                     style={{
                        width: 70,
                        height: 70,
                        paddingTop: 10,
                        borderRadius: 35,
                        overflow: 'hidden',
                        backgroundColor: '#3ddc84'
                     }}>
                     <Image
                        style={{ width: 80, height: 80 }}
                        source={{
                           uri:
                              'https://www.pngrepo.com/png/17468/170/avatar.png'
                        }}
                     />
                  </View>
               </View>
               <View style={styles.details}>
                  <View style={{ flex: 1 }}>
                     <FontText emphasis="medium">Thiết bị</FontText>
                     <FontText emphasis="light">Máy lạnh</FontText>
                  </View>
                  <View style={{ flex: 2 }}>
                     <FontText emphasis="medium">Mô tả sự cố</FontText>
                     <FontText emphasis="light">Ngăn dưới không lạnh</FontText>
                  </View>
               </View>
            </View>
            <FontText emphasis="medium" style={styles.titleText}>
               Đang tìm kiếm thợ...
            </FontText>
            <View style={styles.searchingSpace} />
            <View style={{ zIndex: 1 }}>
               <BouncingPreloader
                  icons={icons}
                  leftDistance={-250}
                  rightDistance={-250}
                  speed={2500}
                  size={75}
               />
            </View>
            <View
               style={{
                  marginTop: -70,
                  borderTopWidth: 3,
                  width: '50%',
                  height: 130,
                  backgroundColor: 'white',
                  zIndex: 2
               }}
            />
            <View style={styles.cancelContainer}>
               <Swipeable
                  rightActionActivationDistance={200}
                  rightContent={<View />}
                  onRightActionActivate={() =>
                     NavigationService.navigate('CreateRequest')
                  }>
                  <View style={styles.cancelButton}>
                     <FontText style={styles.cancelText}>
                        Trượt qua trái để huỷ
                     </FontText>
                  </View>
               </Swipeable>
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff'
   },
   detailsContainer: {
      width: '100%',
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 11
      },
      shadowOpacity: 0.57,
      shadowRadius: 15.19,

      elevation: 23
   },
   details: {
      paddingVertical: 10,
      paddingHorizontal: '10%',
      flexDirection: 'row',
      borderBottomColor: '#e9e9e9',
      borderBottomWidth: 1
   },
   titleText: {
      marginTop: '10%',
      fontSize: 25
   },
   searchingSpace: {
      height: 300
   },
   cancelContainer: {
      width: '70%',
      alignItems: 'center',
      overflow: 'hidden',
      backgroundColor: 'white',
      borderColor: '#e9e9e9',
      borderWidth: 1,
      borderRadius: 10,

      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 11
      },
      shadowOpacity: 0.57,
      shadowRadius: 15.19,

      elevation: 23
   },
   cancelButton: {
      width: '100%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F56258',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white'
   },
   cancelText: {
      fontSize: 17,
      color: 'white'
   }
});
