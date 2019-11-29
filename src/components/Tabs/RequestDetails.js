import React, { Component } from 'react';
import {
   Text,
   View,
   SafeAreaView,
   StyleSheet,
   ScrollView,
   Image,
   TouchableOpacity
} from 'react-native';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import Timeline from 'react-native-timeline-flatlist';
import FontText from '../FontText';
import NavigationService from '../../services/navigate';

export default class RequestDetails extends Component {
   constructor() {
      super();
      this.timeline = [
         { time: '09:00', description: 'Yêu cầu sửa chữa mới được tạo' },
         { time: '09:05', description: 'Thợ xác nhận yêu cầu' },
         { time: '09:10', description: 'Thợ đang trên đường đến' },
         { time: '09:30', description: 'Thợ đến nơi' },
         { time: '10:25', description: 'Sửa xong/Xác nhận hoàn thành' }
      ];
   }
   render() {
      return (
         <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.headerContainer}>
               <TouchableOpacity
                  style={{
                     width: 35,
                     height: 35,
                     justifyContent: 'center'
                  }}
                  onPress={() => NavigationService.navigate('Tabs')}>
                  <IconE name="close" style={{ fontSize: 25 }} />
               </TouchableOpacity>
               <View style={{ alignItems: 'center' }}>
                  <FontText emphasis="bold" style={{ fontSize: 13 }}>
                     Yêu cầu sửa chữa #FICRAA001
                  </FontText>
                  <FontText style={{ fontSize: 12 }}>16:00 27/10/2019</FontText>
               </View>
               <FontText
                  emphasis="medium"
                  style={{ fontSize: 13, color: '#ff9501' }}>
                  Hỗ trợ
               </FontText>
            </View>
            <ScrollView style={styles.bodyContainer}>
               <View style={styles.statusContainer}>
                  <FontText
                     emphasis="bold"
                     style={{
                        fontSize: 18,
                        color: '#3ddc84',
                        marginBottom: 10
                     }}>
                     Đã hoàn thành
                  </FontText>
                  <FontText emphasis="light">
                     Quá trình sửa chữa thiết bị của bạn đã hoàn tất. Thiết bị
                     của bạn đã được khắc phục sự cố rồi đấy!
                  </FontText>
               </View>
               <View style={styles.feedbackContainer}>
                  <FontText
                     emphasis="bold"
                     style={{ fontSize: 18, marginBottom: 10 }}>
                     Cảm ơn bạn đã sử dụng dịch vụ!
                  </FontText>
                  <FontText emphasis="light" style={{ marginBottom: 5 }}>
                     Đánh giá của bạn sẽ giúp chúng tôi tiếp tục cải thiện dịch
                     vụ tốt hơn.
                  </FontText>
                  <View style={{ flexDirection: 'row' }}>
                     <IconM name="star" style={styles.starIcon} />
                     <IconM name="star" style={styles.starIcon} />
                     <IconM name="star" style={styles.starIcon} />
                     <IconM name="star" style={styles.starIcon} />
                     <IconM name="star" style={styles.starIcon} />
                  </View>
               </View>
               <View>
                  <FontText
                     emphasis="bold"
                     style={{
                        marginHorizontal: '5%',
                        marginTop: 10,
                        fontSize: 15
                     }}>
                     Trạng thái yêu cầu sửa chữa
                  </FontText>
                  <View style={styles.timelineContainer}>
                     <Timeline
                        style={{ paddingLeft: 5 }}
                        data={this.timeline}
                        circleColor="#ff9501"
                        circleSize={10}
                        lineColor="#ff9501"
                        lineWidth={4}
                        showTime={false}
                        renderDetail={rowData => (
                           <View
                              style={{
                                 height: 30,
                                 width: '95%',
                                 marginTop: -14,
                                 flexDirection: 'row',
                                 justifyContent: 'space-between'
                              }}>
                              <FontText style={{ fontSize: 13 }}>
                                 {rowData.description}
                              </FontText>
                              <FontText style={{ fontSize: 13 }}>
                                 {rowData.time}
                              </FontText>
                           </View>
                        )}
                     />
                  </View>
               </View>
               <View>
                  <FontText
                     emphasis="bold"
                     style={{
                        marginHorizontal: '5%',
                        marginTop: 10,
                        fontSize: 15
                     }}>
                     Chi phí
                  </FontText>
                  <View style={styles.feeContainer}>
                     <View style={styles.feeRow}>
                        <FontText>Phí sữa chữa (công)</FontText>
                        <FontText>150.000đ</FontText>
                     </View>
                     <View style={styles.feeRow}>
                        <FontText style={{ paddingLeft: 25 }}>
                           1 - Máy lạnh
                        </FontText>
                     </View>
                     <View
                        style={{
                           borderBottomWidth: 0.5,
                           borderColor: '#c9c9c9',
                           marginBottom: 15
                        }}
                     />
                     <View style={styles.feeRow}>
                        <FontText>Phụ phí mua thêm thiết bị</FontText>
                        <FontText>15.000đ</FontText>
                     </View>
                     <View
                        style={{
                           borderBottomWidth: 0.5,
                           borderColor: '#c9c9c9',
                           marginBottom: 15
                        }}
                     />
                     <View style={styles.feeRow}>
                        <FontText>Tổng cộng</FontText>
                        <FontText>165.000đ</FontText>
                     </View>
                  </View>
                  <View>
                     <FontText
                        emphasis="bold"
                        style={{
                           marginHorizontal: '5%',
                           marginTop: 10,
                           fontSize: 15
                        }}>
                        Thợ sửa chữa
                     </FontText>
                     <View style={styles.fixerContainer}>
                        <View style={styles.fixerRow}>
                           <View style={{ flex: 1, alignItems: 'center' }}>
                              <View
                                 style={{
                                    width: 25,
                                    height: 25,
                                    paddingTop: 3,
                                    borderRadius: 12.5,
                                    overflow: 'hidden',
                                    backgroundColor: '#3ddc84'
                                 }}>
                                 <Image
                                    style={{ width: 25, height: 25 }}
                                    source={{
                                       uri:
                                          'https://www.pngrepo.com/png/17468/170/avatar.png'
                                    }}
                                 />
                              </View>
                           </View>
                           <View style={{ flex: 7 }}>
                              <FontText>Thắng Lương Thành</FontText>
                           </View>
                        </View>
                        <View
                           style={{
                              borderBottomWidth: 0.5,
                              borderColor: '#c9c9c9',
                              marginVertical: 15
                           }}
                        />
                        <View style={styles.fixerRow}>
                           <View style={{ flex: 1, alignItems: 'center' }}>
                              <IconM
                                 name="phone"
                                 style={{ fontSize: 20, color: '#ff9501' }}
                              />
                           </View>
                           <View style={{ flex: 7 }}>
                              <FontText>091 113 9999</FontText>
                           </View>
                        </View>
                        <View
                           style={{
                              borderBottomWidth: 0.5,
                              borderColor: '#c9c9c9',
                              marginVertical: 15
                           }}
                        />
                        <View style={styles.fixerRow}>
                           <View style={{ flex: 1, alignItems: 'center' }}>
                              <IconM
                                 name="map-marker-outline"
                                 style={{ fontSize: 20, color: '#ff9501' }}
                              />
                           </View>
                           <View style={{ flex: 7 }}>
                              <Text
                                 style={{ fontFamily: 'lato-regular' }}
                                 numberOfLines={1}
                                 ellipsizeMode="tail">
                                 Lô T2-4 đường D1, Khu Công Nghệ Cao, HCM
                              </Text>
                           </View>
                        </View>
                     </View>
                  </View>
               </View>
            </ScrollView>
         </SafeAreaView>
      );
   }
}

const styles = StyleSheet.create({
   headerContainer: {
      height: 56,
      alignItems: 'center',
      paddingHorizontal: '5%',
      justifyContent: 'space-between',
      flexDirection: 'row',
      borderBottomWidth: 0.5
   },
   bodyContainer: {
      backgroundColor: '#f0eff4',
      flex: 1
   },
   statusContainer: {
      backgroundColor: 'white',
      borderWidth: 0.5,
      borderColor: '#c9c9c9',
      borderRadius: 10,
      marginHorizontal: '5%',
      marginTop: 10,
      padding: 15
   },
   feedbackContainer: {
      backgroundColor: 'white',
      borderWidth: 0.5,
      borderColor: '#c9c9c9',
      borderRadius: 10,
      marginHorizontal: '5%',
      marginTop: 10,
      padding: 15
   },
   starIcon: {
      fontSize: 29,
      color: '#ff9501'
   },
   timelineContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 215,
      backgroundColor: 'white',
      borderWidth: 0.5,
      borderColor: '#c9c9c9',
      borderRadius: 10,
      marginHorizontal: '5%',
      marginTop: 5,
      paddingTop: 30,
      flexDirection: 'row'
   },
   feeContainer: {
      justifyContent: 'center',
      backgroundColor: 'white',
      borderWidth: 0.5,
      borderColor: '#c9c9c9',
      borderRadius: 10,
      marginHorizontal: '5%',
      marginTop: 5,
      padding: 15
   },
   feeRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10
   },
   fixerContainer: {
      justifyContent: 'center',
      backgroundColor: 'white',
      borderWidth: 0.5,
      borderColor: '#c9c9c9',
      borderRadius: 10,
      marginHorizontal: '5%',
      marginTop: 5,
      marginBottom: 10,
      padding: 15
   },
   fixerRow: {
      flexDirection: 'row'
   }
});
