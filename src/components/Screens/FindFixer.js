import React, { Component } from 'react';
import {
   Text,
   StyleSheet,
   View,
   ImageBackground,
   Image,
   TouchableOpacity
} from 'react-native';
import BouncingPreloader from 'react-native-bouncing-preloader';
import FontText from '../FontText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconE from 'react-native-vector-icons/Entypo';
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
   state = { found: false };
   componentDidMount() {
      setTimeout(() => this.setState({ found: true }), 5000);
   }
   render() {
      return (
         <View style={styles.container}>
            <View style={styles.detailsContainer}>
               <View style={styles.details}>
                  <View
                     style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center'
                     }}>
                     <View style={{ flex: 1 }}>
                        <Icon
                           name="map-marker"
                           style={{ fontSize: 20, color: '#fd7e14' }}
                        />
                     </View>
                     <View style={{ flex: 9 }}>
                        <FontText emphasis="medium">Nơi sửa chữa</FontText>
                        <Text
                           numberOfLines={1}
                           style={{ fontFamily: 'lato-light' }}>
                           Đại học FPT, khu Công Nghệ Cao, quận 9, TP.HCM
                        </Text>
                     </View>
                  </View>
               </View>
               <View
                  style={{
                     flex: 1,
                     flexDirection: 'row',
                     justifyContent: 'center',
                     alignItems: 'center',
                     paddingVertical: 15,
                     borderBottomColor: '#e9e9e9',
                     borderBottomWidth: 1
                  }}>
                  {/* <Image
                        source={require('../../../assets/images/air-conditioner.png')}
                        style={{ width: 30, height: 30, marginRight: 15 }}
                     /> */}
                  <FontText emphasis="bold">Điều hoà phòng</FontText>
               </View>
               <View style={styles.details}>
                  <View style={{ flex: 1 }}>
                     <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                           <FontText emphasis="medium">Thiết bị</FontText>
                        </View>
                        <View style={{ flex: 5 }}>
                           <FontText emphasis="light">Máy lạnh</FontText>
                        </View>
                     </View>
                     <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                           <FontText emphasis="medium">Mô tả sự cố</FontText>
                        </View>
                        <View style={{ flex: 5 }}>
                           <FontText emphasis="light">
                              Không điều chỉnh được nhiệt độ
                           </FontText>
                        </View>
                     </View>
                  </View>
               </View>
               <View style={styles.details}>
                  <View style={{ flex: 1 }}>
                     <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                           <FontText emphasis="medium">Lưu ý cho thợ</FontText>
                        </View>
                        <View style={{ flex: 5 }}>
                           <FontText emphasis="light">
                              Gọi trước khi tới khoảng 10p
                           </FontText>
                        </View>
                     </View>
                     <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                           <FontText emphasis="medium">Tiền tip</FontText>
                        </View>
                        <View style={{ flex: 5 }}>
                           <FontText emphasis="light">50.000đ</FontText>
                        </View>
                     </View>
                  </View>
               </View>
            </View>
            <ImageBackground
               source={{ uri: 'https://i.imgur.com/EIxVoYr.png' }}
               style={{
                  width: '100%',
                  flex: 1
               }}>
               <View
                  style={{
                     flex: 1,
                     width: '100%',
                     justifyContent: 'center',
                     alignItems: 'center',
                     backgroundColor: 'rgba(255,255,255,0.2)'
                  }}>
                  {this.state.found == false ? (
                     <View
                        style={{
                           alignItems: 'center',
                           zIndex: 1
                        }}>
                        <FontText emphasis="medium" style={styles.titleText}>
                           Đang tìm kiếm thợ...
                        </FontText>
                        <View style={styles.searchingSpace} />
                        <View style={{ zIndex: 1 }}>
                           <BouncingPreloader
                              icons={icons}
                              leftDistance={-250}
                              rightDistance={-250}
                              speed={2300}
                              size={75}
                           />
                        </View>
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
                  ) : (
                     <View style={styles.foundContainer}>
                        <View
                           style={{
                              width: 130,
                              height: 130,
                              borderRadius: 65,
                              marginTop: -65,
                              backgroundColor: '#F56258',
                              overflow: 'hidden',
                              borderWidth: 4,
                              borderColor: 'white'
                           }}>
                           <Image
                              style={{ width: 122, height: 122, marginTop: 15 }}
                              source={{
                                 uri:
                                    'https://www.pngrepo.com/png/17468/170/avatar.png'
                              }}
                           />
                        </View>
                        <FontText>Đã tìm thấy thợ!</FontText>

                        <View
                           style={{
                              flexDirection: 'row',
                              alignItems: 'center'
                           }}>
                           <FontText
                              emphasis="bold"
                              style={{
                                 fontSize: 25,
                                 justifyContent: 'center'
                              }}>
                              Bùi Văn Khánh{' '}
                           </FontText>
                           <Icon
                              name="shield-check"
                              style={{ fontSize: 25, color: '#3ddc84' }}
                           />
                        </View>
                        <FontText>Chuyên môn: Sửa điều hoà phòng</FontText>
                        <View style={{ flexDirection: 'row' }}>
                           <Icon name="star" style={styles.starIcon} />
                           <Icon name="star" style={styles.starIcon} />
                           <Icon name="star" style={styles.starIcon} />
                           <Icon name="star" style={styles.starIcon} />
                           <Icon name="star-half" style={styles.starIcon} />
                        </View>
                        <FontText style={{ fontSize: 16 }}>
                           097 123 4567
                        </FontText>
                        <TouchableOpacity
                           style={{
                              width: '40%',
                              backgroundColor: '#F56258',
                              borderRadius: 10,
                              marginVertical: 10,
                              paddingVertical: 12,
                              paddingHorizontal: 25,
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              alignItems: 'center'
                           }}>
                           <FontText>Tiếp tục</FontText>
                           <Icon
                              name="chevron-double-right"
                              style={{ fontSize: 17 }}
                           />
                        </TouchableOpacity>
                        <IconE
                           name="triangle-down"
                           style={{
                              fontSize: 100,
                              color: '#FFF',
                              marginTop: -30
                           }}
                        />
                     </View>
                  )}
               </View>
            </ImageBackground>
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
      paddingHorizontal: '5%',
      flexDirection: 'row',
      borderBottomColor: '#e9e9e9',
      borderBottomWidth: 1
   },
   titleText: {
      fontSize: 25,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 15,
      backgroundColor: 'white'
   },
   searchingSpace: {
      height: 300
   },
   cancelContainer: {
      marginTop: -33,
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
   },
   foundContainer: {
      width: '80%',
      height: 270,
      backgroundColor: 'white',
      borderRadius: 30,
      alignItems: 'center',
      zIndex: 4,

      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 11
      },
      shadowOpacity: 0.57,
      shadowRadius: 15.19,

      elevation: 23
   },
   starIcon: {
      fontSize: 29,
      color: '#ff9501'
   }
});
