import React, { Component } from 'react';
import {
   View,
   Text,
   KeyboardAvoidingView,
   StyleSheet,
   TouchableOpacity,
   ScrollView
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import FontText from '../FontText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-gesture-handler';

const options = {
   title: 'Chọn hình',
   takePhotoButtonTitle: 'Chụp ảnh mới',
   chooseFromLibraryButtonTitle: 'Chọn ảnh từ album'
};
export default class CreateRequest extends Component {
   constructor(props) {
      super(props);
      this.state = {
         avatarSource: null
      };
   }
   chooseImage = () => {
      ImagePicker.showImagePicker(options, response => {
         if (response.didCancel) {
            console.log('User cancelled image picker');
         } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
         } else {
            let source = { uri: response.uri };
            this.setState({
               avatarSource: source
            });
         }
      });
   };

   render() {
      return (
         <KeyboardAvoidingView style={styles.createRequestContainer}>
            <View style={styles.viewContainer}>
               <View style={styles.headerContainer}>
                  <FontText
                     emphasis="bold"
                     style={{ fontSize: 17, color: '#F56258' }}>
                     Thông báo lỗi / hư hỏng
                  </FontText>
               </View>
               <ScrollView>
                  <View style={styles.locationContainer}>
                     <View style={styles.locationHeaderContainer}>
                        <FontText
                           emphasis="bold"
                           style={styles.loacationHeader}>
                           Vị trí của bạn
                        </FontText>
                     </View>
                     <View style={styles.inputLocationContainer}>
                        <FontText emphasis="bold" style={styles.locationText}>
                           Đại học FPT, khu công nghệ cao quận 9
                        </FontText>
                        <TextInput
                           style={styles.locationNote}
                           placeholder="Ghi chú: Kế bên công ty dịch vụ tin học HPT..."></TextInput>
                     </View>
                  </View>
                  <View style={styles.locationContainer}>
                     <View style={styles.locationHeaderContainer}>
                        <FontText
                           emphasis="bold"
                           style={styles.loacationHeader}>
                           Thiết bị cần sửa
                        </FontText>
                     </View>
                     <View style={styles.inputLocationContainer}>
                        <TextInput
                           style={styles.deviceType}
                           placeholder="Tủ lạnh, máy lạnh, bếp, ống nước..."></TextInput>
                        <FontText emphasis="bold" style={styles.locationText}>
                           Chi tiết :
                        </FontText>
                        <TextInput
                           style={styles.detailErr}
                           placeholder="Chi tiết: TV không lên màn hình..."></TextInput>
                     </View>
                  </View>
                  <View style={styles.buttonContainer}>
                     <View style={{ width: '100%', alignItems: 'center' }}>
                        <TouchableOpacity
                           style={styles.button}
                           onPress={this.chooseImage}>
                           <Icon
                              name="cloud-upload"
                              style={{ fontSize: 25, color: '#F56258' }}></Icon>
                           <FontText
                              emphasis="bold"
                              style={{ fontSize: 16, color: '#F56258' }}>
                              Tải ảnh lên
                           </FontText>
                        </TouchableOpacity>
                     </View>
                     <View style={{ width: '100%', alignItems: 'center' }}>
                        <TouchableOpacity
                           style={[styles.button, { marginVertical: 20 }]}>
                           <Icon
                              name="camera"
                              style={{ fontSize: 25, color: '#F56258' }}></Icon>
                           <FontText
                              emphasis="bold"
                              style={{
                                 fontSize: 16,
                                 color: '#F56258',
                                 borderColor: '#F56258'
                              }}>
                              Chụp ảnh
                           </FontText>
                        </TouchableOpacity>
                     </View>

                     <View style={{ width: '100%', alignItems: 'center' }}>
                        <TouchableOpacity
                           style={[
                              styles.button,
                              {
                                 backgroundColor: '#3ddc84',
                                 width: '70%',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 borderColor: '#fff'
                              }
                           ]}>
                           <FontText
                              emphasis="bold"
                              style={{
                                 fontSize: 17,
                                 color: '#fff',
                                 borderColor: '#fff'
                              }}>
                              Gửi yêu cầu
                           </FontText>
                        </TouchableOpacity>
                     </View>
                  </View>
               </ScrollView>
            </View>
         </KeyboardAvoidingView>
      );
   }
}

const styles = StyleSheet.create({
   createRequestContainer: {
      flex: 1
   },
   viewContainer: { flex: 1 },
   headerContainer: {
      height: 56,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomColor: '#c9c9c9',
      borderBottomWidth: 0.5
   },
   locationContainer: {
      paddingHorizontal: '5%',
      marginTop: 20
   },
   locationHeaderContainer: {
      width: '39%',
      alignItems: 'center',
      backgroundColor: '#F56258',
      borderRadius: 10,
      zIndex: 2,
      marginLeft: '3%'
   },
   loacationHeader: {
      fontSize: 16,
      color: '#fff'
   },
   inputLocationContainer: {
      borderColor: 'black',
      borderWidth: 1.5,
      borderRadius: 10,
      paddingHorizontal: '5%',
      paddingTop: 20,
      marginTop: -10,
      zIndex: 1
   },
   locationNote: {
      fontSize: 16,
      borderBottomColor: '#ebebeb',
      borderBottomWidth: 1.5,
      padding: 0,
      marginVertical: 20
   },
   locationText: {
      fontSize: 16
      // color: '#F56258'
   },
   deviceType: {
      fontSize: 16,
      borderBottomColor: '#ebebeb',
      borderBottomWidth: 1.5,
      padding: 0,
      marginBottom: 10
   },
   detailErr: {
      fontSize: 16,
      borderBottomColor: '#ebebeb',
      borderBottomWidth: 1.5,
      padding: 0,
      marginTop: 10,
      marginBottom: 20
   },
   buttonContainer: {
      marginTop: 20
   },
   button: {
      width: '40%',
      borderColor: '#F56258',
      borderWidth: 1,
      flexDirection: 'row',
      height: 45,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: '6%',
      borderRadius: 25
   }
});
