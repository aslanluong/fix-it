import React, { Component } from 'react'
import {
   View,
   StyleSheet,
   Image,
} from 'react-native';
import FontText from '../FontText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class HeaderInfo extends Component {
   render() {
      return (
         <View style={styles.detailsContainerHeader}>
            <View style={styles.detailsHeader}>
               <View style={{ flex: 1, justifyContent: 'center' }}>
                  <FontText style={{ fontSize: 19 }}>
                     Hi, Thắng Lương Thành
                     </FontText>
                  <FontText style={{ fontSize: 13 }}>
                     <Icon name="map-marker" />
                     Quận 9, HCM
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
                     style={{ width: 70, height: 70 }}
                     source={{
                        uri:
                           'https://www.pngrepo.com/png/17468/170/avatar.png'
                     }}
                  />
               </View>
            </View>
            {/* <View style={styles.details}>
               <View style={{ flex: 1 }}>
                  <FontText emphasis="medium">Thiết bị</FontText>
                  <FontText emphasis="light">Máy lạnh</FontText>
               </View>
               <View style={{ flex: 2 }}>
                  <FontText emphasis="medium">Mô tả sự cố</FontText>
                  <FontText emphasis="light">Ngăn dưới không lạnh</FontText>
               </View>
            </View> */}
         </View>
      )
   }
}

const styles = StyleSheet.create({
   detailsContainerHeader: {
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
   detailsHeader: {
      paddingVertical: 10,
      paddingHorizontal: '10%',
      flexDirection: 'row',
      borderBottomColor: '#e9e9e9',
      borderBottomWidth: 1
   },
});
