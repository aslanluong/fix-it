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
import RNPicker from 'search-modal-picker';
import ToggleSwitch from 'toggle-switch-react';

const options = {
   title: 'Chọn hình',
   takePhotoButtonTitle: 'Chụp ảnh mới',
   chooseFromLibraryButtonTitle: 'Chọn ảnh từ album'
};
export default class CreateRequest extends Component {
   constructor(props) {
      super(props);
      this.state = {
         avatarSource: [],
         brand: [
            {
               id: 1,
               name: 'Sony'
            },
            {
               id: 2,
               name: 'Panasonic'
            },
            {
               id: 3,
               name: 'Samsung'
            },
            {
               id: 4,
               name: 'Hewlett Packard'
            },
            {
               id: 5,
               name: 'Foxconn'
            },
            {
               id: 6,
               name: 'IBM'
            },
            {
               id: 7,
               name: 'HP'
            },
            {
               id: 8,
               name: 'Hitachi'
            },
            {
               id: 9,
               name: 'Toshiba'
            },
            {
               id: 10,
               name: 'LG Electronics'
            }
         ],
         diviceType: [
            {
               id: 1,
               name: 'TV'
            },
            {
               id: 2,
               name: 'Tủ lạnh'
            },
            {
               id: 3,
               name: 'Máy tính bàn'
            },
            {
               id: 4,
               name: 'Loa'
            },
            {
               id: 5,
               name: 'Máy tính bảng'
            },
            {
               id: 6,
               name: 'Laptop'
            },
            {
               id: 7,
               name: 'Máy nghe nhạc'
            }
         ],
         detailError: [
            {
               id: 1,
               name: 'TV không lên màn hình'
            },
            {
               id: 2,
               name: 'TV không nghe tiếng'
            },
            {
               id: 3,
               name: 'TV không bấm được nút vật lý'
            },
            {
               id: 4,
               name: 'TV bị nhòe màn hình'
            },
            {
               id: 5,
               name: 'TV bị bể màn hình'
            },
            {
               id: 6,
               name: 'TV lên tiếng nhưng không lên màn hình'
            }
         ],
         placeHolderText: 'Chọn hãng thiết bị',
         selectedText: '',
         switchOn1: false,
         switchOn2: false,
         switchOn3: false
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
   _selectedValue(index, item) {
      this.setState({ selectedText: item.name });
   }
   _selectedBrand(index, item) {
      this.setState({ selectedTextBrand: item.name });
   }
   _selectedDetailErr(index, item) {
      this.setState({ selectedTextDetail: item.name });
   }

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
                        <FontText emphasis="bold" style={styles.locationText}>
                           Tên thiết bị:
                        </FontText>

                        <RNPicker
                           dataSource={this.state.diviceType}
                           // dummyDataSource={this.state.diviceType}
                           defaultValue={false}
                           pickerTitle={'Country Picker'}
                           showSearchBar={true}
                           disablePicker={false}
                           changeAnimation={'none'}
                           searchBarPlaceHolder={'Chọn tên thiết bị...'}
                           showPickerTitle={false}
                           searchBarContainerStyle={
                              styles.searchBarContainerStyle
                           }
                           pickerStyle={styles.pickerStyle}
                           pickerItemTextStyle={styles.listTextViewStyle}
                           selectedLabel={this.state.selectedText}
                           placeHolderLabel={'Tên thiết bị cần sửa'}
                           selectLabelTextStyle={styles.selectLabelTextStyle}
                           placeHolderTextStyle={styles.placeHolderTextStyle}
                           dropDownImageStyle={styles.dropDownImageStyle}
                           // dropDownImage={require("./res/ic_drop_down.png")}
                           selectedValue={(index, item) =>
                              this._selectedValue(index, item)
                           }
                        />
                        <FontText emphasis="bold" style={styles.locationText}>
                           Hãng sản xuất:
                        </FontText>
                        <RNPicker
                           dataSource={this.state.brand}
                           // dummyDataSource={this.state.brand}
                           defaultValue={false}
                           pickerTitle={'Country Picker'}
                           showSearchBar={true}
                           disablePicker={false}
                           changeAnimation={'none'}
                           searchBarPlaceHolder={'Chọn hãng sản xuất...'}
                           showPickerTitle={false}
                           searchBarContainerStyle={
                              styles.searchBarContainerStyle
                           }
                           pickerStyle={styles.pickerStyle}
                           pickerItemTextStyle={styles.listTextViewStyle}
                           selectedLabel={this.state.selectedTextBrand}
                           placeHolderLabel={'Hãng sản xuất'}
                           selectLabelTextStyle={styles.selectLabelTextStyle}
                           placeHolderTextStyle={styles.placeHolderTextStyle}
                           dropDownImageStyle={styles.dropDownImageStyle}
                           // dropDownImage={require("./res/ic_drop_down.png")}
                           selectedValue={(index, item) =>
                              this._selectedBrand(index, item)
                           }
                        />
                        <FontText emphasis="bold" style={styles.locationText}>
                           Mô tả hiện trạng thiết bị:
                        </FontText>
                        <RNPicker
                           dataSource={this.state.detailError}
                           // dummyDataSource={this.state.brand}
                           defaultValue={false}
                           pickerTitle={'Country Picker'}
                           showSearchBar={true}
                           disablePicker={false}
                           changeAnimation={'none'}
                           searchBarPlaceHolder={
                              'Chọn mô tả hiện trạng thiết bị...'
                           }
                           showPickerTitle={false}
                           searchBarContainerStyle={
                              styles.searchBarContainerStyle
                           }
                           pickerStyle={styles.pickerStyle}
                           pickerItemTextStyle={styles.listTextViewStyle}
                           selectedLabel={this.state.selectedTextDetail}
                           placeHolderLabel={'Mô tả hiện trạng thiết bị'}
                           selectLabelTextStyle={styles.selectLabelTextStyle}
                           placeHolderTextStyle={styles.placeHolderTextStyle}
                           dropDownImageStyle={styles.dropDownImageStyle}
                           // dropDownImage={require("./res/ic_drop_down.png")}
                           selectedValue={(index, item) =>
                              this._selectedDetailErr(index, item)
                           }
                        />
                     </View>
                  </View>
                  <View style={styles.formContainer}>
                     <View style={styles.headerContainer}>
                        <FontText emphasis="medium" style={styles.headerText}>
                           Yêu cầu thêm về thợ
                        </FontText>
                     </View>
                     <View
                        style={[
                           styles.inputContainer,
                           { paddingHorizontal: '3%' }
                        ]}>
                        <View style={{ paddingVertical: 5 }}>
                           <ToggleSwitch
                              isOn={this.state.switchOn1}
                              onColor="#f4511e"
                              offColor="gray"
                              label={<FontText>Thợ có bằng cấp</FontText>}
                              labelStyle={{
                                 color: 'black',
                                 fontSize: 16
                              }}
                              size="medium"
                              onToggle={isOn =>
                                 this.setState({ switchOn1: isOn })
                              }
                           />
                           <ToggleSwitch
                              isOn={this.state.switchOn2}
                              onColor="#f4511e"
                              offColor="gray"
                              label={
                                 <FontText>Thợ có lượt đánh giá cao</FontText>
                              }
                              labelStyle={{ color: 'black', fontSize: 16 }}
                              size="medium"
                              onToggle={isOn =>
                                 this.setState({ switchOn2: isOn })
                              }
                           />
                        </View>

                        <FontText
                           emphasis="italic"
                           style={[
                              {
                                 marginTop: 5,
                                 fontSize: 13,
                                 color: '#F56258'
                              }
                           ]}>
                           *Lưu ý: Sẽ mất thêm thời gian tìm thợ khi chọn những
                           tiêu chí này
                        </FontText>
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
                                    margin: 5,
                                    marginTop: 20
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
                                 marginTop: 20,
                                 marginHorizontal: 5,
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
      alignItems: 'center',
      marginTop: 20
   },
   headerContainer: {
      width: '50%',
      alignItems: 'center',

      backgroundColor: '#F56258',
      borderRadius: 15,
      zIndex: 2
   },
   headerText: {
      fontSize: 15,
      color: '#fff'
   },
   inputContainer: {
      borderColor: 'black',
      borderWidth: 1.5,
      borderRadius: 10,
      width: '100%',
      paddingHorizontal: '5%',
      paddingTop: 10,
      marginTop: -12,
      zIndex: 1,
      paddingBottom: 10
   },
   locationNote: {
      fontSize: 16,
      borderBottomColor: '#ebebeb',
      borderBottomWidth: 1.5,
      marginVertical: 20
   },
   locationText: {
      fontSize: 16,
      marginTop: 10,
      marginBottom: -7
      // color: '#F56258'
   },
   deviceType: {
      fontSize: 16,
      borderBottomColor: '#ebebeb',
      borderBottomWidth: 1.5,
      marginBottom: 10
   },
   detailErr: {
      fontSize: 16,
      borderBottomColor: '#ebebeb',
      borderBottomWidth: 1.5,
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
   },
   searchBarContainerStyle: {
      marginBottom: 10,
      flexDirection: 'row',
      height: 40,
      shadowOpacity: 1.0,
      shadowRadius: 5,
      shadowOffset: {
         width: 1,
         height: 1
      },
      backgroundColor: 'rgba(255,255,255,1)',
      shadowColor: '#d3d3d3',
      borderRadius: 10,
      elevation: 3,
      marginHorizontal: 10
   },

   selectLabelTextStyle: {
      color: '#000',
      textAlign: 'left',
      width: '99%',
      padding: 10,
      flexDirection: 'row'
   },
   placeHolderTextStyle: {
      color: '#D3D3D3',
      padding: 10,
      textAlign: 'left',
      width: '97%',
      flexDirection: 'row'
   },
   dropDownImageStyle: {
      // marginLeft: 10,
      width: 10,
      height: 10,
      alignSelf: 'center'
   },
   listTextViewStyle: {
      color: '#000',
      marginVertical: 10,
      flex: 0.9,
      marginLeft: 20,
      marginHorizontal: 10,
      textAlign: 'left'
   },
   pickerStyle: {
      elevation: 3,
      paddingRight: 10,
      width: '100%',
      marginBottom: 2,
      shadowOpacity: 1.0,
      marginVertical: 10,
      shadowOffset: {
         width: 1,
         height: 1
      },
      borderWidth: 1,
      shadowRadius: 10,
      backgroundColor: 'rgba(255,255,255,1)',
      shadowColor: '#d3d3d3',
      borderRadius: 5,
      flexDirection: 'row'
   }
});
