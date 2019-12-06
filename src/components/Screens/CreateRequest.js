import React, { Component } from 'react';
import {
   View,
   Text,
   KeyboardAvoidingView,
   StyleSheet,
   TouchableOpacity,
   ScrollView,
   Image
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import FontText from '../FontText';
import IconE from 'react-native-vector-icons/EvilIcons';
import { TextInput } from 'react-native-gesture-handler';
import NavigationService from '../../services/navigate';

const options = {
   title: 'Chọn hình',
   takePhotoButtonTitle: 'Chụp ảnh mới',
   chooseFromLibraryButtonTitle: 'Chọn ảnh từ album'
};
export default class CreateRequest extends Component {
   constructor(props) {
      super(props);
      this.state = {
         avatarSource: []
      };
   }
   chooseImage = () => {
      ImagePicker.showImagePicker(options, response => {
         if (response.didCancel) {
            console.log('User cancelled image picker');
         } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
         } else {
            let source = response.uri;
            let arr = this.state.avatarSource;
            let count = arr.push(source);
            this.setState({
               avatarSource: arr
            });
            console.log(arr);
         }
      });
   };

   render() {
      return (
         <KeyboardAvoidingView style={styles.createRequestContainer}>
            <View style={styles.viewContainer}>
               <View style={styles.titleContainer}>
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
                     <FontText emphasis="medium" style={{ fontSize: 17 }}>
                        Thông báo lỗi/hư hỏng
                     </FontText>
                  </View>
                  <FontText
                     emphasis="medium"
                     style={{ fontSize: 13, color: '#ff9501' }}>
                     {'      '}
                  </FontText>
               </View>
               <ScrollView>
                  <View style={styles.formContainer}>
                     <View style={styles.headerContainer}>
                        <FontText emphasis="medium" style={styles.headerText}>
                           Thiết bị cần sửa
                        </FontText>
                     </View>
                     <View style={styles.inputContainer}>
                        <TextInput
                           style={styles.deviceType}
                           placeholder="Tủ lạnh, máy lạnh, bếp, ống nước..."></TextInput>
                        <FontText emphasis="bold" style={styles.locationText}>
                           Mô tả hiện trạng thiết bị:
                        </FontText>
                        <TextInput
                           multiline={true}
                           maxLength={200}
                           style={styles.detailErr}
                           placeholder="Chi tiết: TV không lên màn hình..."></TextInput>
                     </View>
                  </View>
                  <View style={styles.formContainer}>
                     <View style={styles.headerContainer}>
                        <FontText emphasis="medium" style={styles.headerText}>
                           Hình ảnh thiết bị
                        </FontText>
                     </View>
                     <View style={styles.inputContainer}>
                        <View
                           style={{
                              width: '100%',
                              flexDirection: 'row',
                              justifyContent: 'space-evenly',
                              flexWrap: 'wrap',
                              marginBottom: 10
                           }}>
                           {this.state.avatarSource.map((image, index) => (
                              <View
                                 key={index}
                                 style={{
                                    height: 100,
                                    width: 100,
                                    borderRadius: 10,
                                    overflow: 'hidden',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: 5
                                 }}>
                                 <Image
                                    style={{
                                       height: 100,
                                       width: 100
                                       // marginHorizontal: 5
                                    }}
                                    source={{ uri: image }}
                                 />
                              </View>
                           ))}
                           <TouchableOpacity
                              style={{
                                 height: 100,
                                 width: 100,
                                 borderWidth: 1,
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 opacity: 0.3,
                                 marginTop: 5,
                                 borderRadius: 10
                              }}
                              onPress={this.chooseImage}>
                              <Image
                                 source={{
                                    uri:
                                       'https://img.icons8.com/small/64/000000/add-camera.png'
                                 }}
                                 style={{
                                    height: 60,
                                    width: 60
                                    // marginHorizontal: 5
                                 }}
                              />
                           </TouchableOpacity>
                        </View>
                     </View>
                  </View>
                  <View style={styles.formContainer}>
                     <View style={styles.headerContainer}>
                        <FontText emphasis="medium" style={styles.headerText}>
                           Vị trí của bạn
                        </FontText>
                     </View>
                     <View style={styles.inputContainer}>
                        <FontText emphasis="bold" style={styles.locationText}>
                           Đại học FPT, khu công nghệ cao quận 9
                        </FontText>
                        <TextInput
                           style={styles.locationNote}
                           placeholder="Ghi chú: Kế bên công ty dịch vụ tin học HPT..."></TextInput>
                     </View>
                  </View>
                  <View style={styles.buttonContainer}>
                     {/* <View style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}>
                <TouchableOpacity style={styles.button}
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
              </View> */}
                     <View style={{ width: '100%', alignItems: 'center' }}>
                        <TouchableOpacity
                           onPress={() =>
                              NavigationService.navigate('FindFixer')
                           }
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
   titleContainer: {
      height: 56,
      paddingHorizontal: '5%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomColor: '#c9c9c9',
      borderBottomWidth: 0.5
   },
   formContainer: {
      paddingHorizontal: '5%',
      marginTop: 20
   },
   headerContainer: {
      width: '40%',
      alignItems: 'center',
      backgroundColor: '#F56258',
      borderRadius: 15,
      zIndex: 2,
      marginLeft: 15
   },
   headerText: {
      fontSize: 15,
      color: '#fff'
   },
   inputContainer: {
      borderColor: 'black',
      borderWidth: 1.5,
      borderRadius: 10,
      paddingHorizontal: '5%',
      paddingTop: 20,
      marginTop: -12,
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
