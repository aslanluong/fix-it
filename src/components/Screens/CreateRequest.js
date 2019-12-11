import React, { Component } from 'react';
import {
   View,
   TextInput,
   KeyboardAvoidingView,
   StyleSheet,
   TouchableOpacity,
   Modal,
   ScrollView,
   Image
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import FontText from '../FontText';
import IconE from 'react-native-vector-icons/EvilIcons';
import NavigationService from '../../services/navigate';
import RNPicker from 'search-modal-picker';
import ToggleSwitch from 'toggle-switch-react';
import DatePicker from 'react-native-date-picker';
import { Button, Icon } from 'react-native-ui-kitten/ui';

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
         deviceType: [
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
         date: new Date(),
         modalCalendar: false
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

   setModalCalendar(visible) {
      this.setState({ modalCalendar: visible });
   }
   render() {
      const today = new Date();
      const next7days = new Date(
         today.getFullYear(),
         today.getMonth(),
         today.getDate() + 7
      );
      return (
         <KeyboardAvoidingView style={styles.createRequestContainer}>
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
            <ScrollView style={{ backgroundColor: '#f0eff4' }}>
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
                        dataSource={this.state.deviceType}
                        // dummyDataSource={this.state.diviceType}
                        defaultValue={false}
                        pickerTitle={'Country Picker'}
                        showSearchBar={true}
                        disablePicker={false}
                        changeAnimation={'none'}
                        searchBarPlaceHolder={'Chọn tên thiết bị...'}
                        showPickerTitle={false}
                        searchBarContainerStyle={styles.searchBarContainerStyle}
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
                        searchBarContainerStyle={styles.searchBarContainerStyle}
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
                        searchBarContainerStyle={styles.searchBarContainerStyle}
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
                        <TouchableOpacity
                           activeOpacity={0.5}
                           onPress={() =>
                              this.setState({
                                 switchOn1: this.state.switchOn1 ? false : true
                              })
                           }>
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
                        </TouchableOpacity>
                        <TouchableOpacity
                           activeOpacity={0.5}
                           onPress={() =>
                              this.setState({
                                 switchOn2: this.state.switchOn2 ? false : true
                              })
                           }>
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
                        </TouchableOpacity>
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
                     <FontText
                        emphasis="bold"
                        style={{
                           fontSize: 16,
                           marginHorizontal: 6,
                           marginTop: 7
                        }}>
                        Ghi chú thêm:
                     </FontText>
                     <TextInput
                        style={{
                           fontFamily: 'lato-regular',
                           fontSize: 16,
                           borderBottomColor: '#ebebeb',
                           borderBottomWidth: 1.5,
                           paddingVertical: 5,
                           marginHorizontal: 6
                        }}
                        placeholder={'Nhập ghi chú...'}></TextInput>
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
                           marginBottom: 5
                        }}>
                        {this.state.avatarSource.map((image, index) => (
                           <View
                              key={index}
                              style={{
                                 borderRadius: 10,
                                 overflow: 'hidden',
                                 margin: 5,
                                 marginTop: 20
                              }}>
                              <Image
                                 style={{
                                    height: 100,
                                    width: 100
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
                     {/* <Input
                        textStyle={{ padding: 0 }}
                        label="Địa điểm"
                        // style={{ backgroundColor: 'red' }}
                        value={'Đại học FPT, khu công nghệ cao quận 9'}
                        icon={style => (
                           <Icon
                              {...style}
                              name="navigation-2"
                              style={{ marginLeft: 0 }}
                           />
                        )}
                        onIconPress={() =>
                           NavigationService.navigate('SelectLocation')
                        }
                     /> */}
                     <TextInput
                        style={{
                           fontFamily: 'lato-regular',
                           fontSize: 16,
                           borderBottomColor: '#ebebeb',
                           borderBottomWidth: 1.5,
                           paddingVertical: 5
                        }}
                        placeholder={
                           'Đại học FPT, khu công nghệ cao quận 9'
                        }></TextInput>
                     <TextInput
                        style={{
                           fontFamily: 'lato-regular',
                           fontSize: 16,
                           borderBottomColor: '#ebebeb',
                           borderBottomWidth: 1.5,
                           paddingVertical: 5
                        }}
                        placeholder={
                           'Ghi chú: Kế bên c.ty dịch vụ tin học HPT...'
                        }></TextInput>
                  </View>
               </View>
               <View style={styles.buttonContainer}>
                  <View style={{ width: '100%', alignItems: 'center' }}>
                     <Button
                        TouchableOpacity
                        onPress={() => NavigationService.navigate('FindFixer')}
                        icon={style => (
                           <Icon
                              {...style}
                              name="paper-plane-outline"
                              style={{ marginLeft: -5 }}
                           />
                        )}
                        status="danger"
                        style={{
                           width: '90%',
                           height: 47,
                           backgroundColor: '#F56258',
                           borderWidth: 0,
                           borderRadius: 12
                        }}>
                        Tìm thợ ngay
                     </Button>
                     <Button
                        TouchableOpacity
                        onPress={() => this.setModalCalendar(true)}
                        icon={style => (
                           <Icon
                              {...style}
                              name="paper-plane-outline"
                              style={{ marginLeft: -5 }}
                           />
                        )}
                        status="danger"
                        textStyle={{ fontFamily: 'lato-regular' }}
                        style={{
                           width: '90%',
                           height: 47,
                           backgroundColor: '#4285F4',
                           borderWidth: 0,
                           borderRadius: 12,
                           marginTop: 20
                        }}>
                        Đặt lịch ngay
                     </Button>
                     <Modal
                        transparent={true}
                        visible={this.state.modalCalendar}
                        onRequestClose={() => {
                           this.setModalCalendar(!this.state.modalCalendar);
                        }}>
                        <View
                           style={{
                              flex: 1,
                              backgroundColor: 'rgba(0,0,0,0.7)',
                              justifyContent: 'center'
                           }}>
                           <View
                              style={{
                                 marginHorizontal: '5%',
                                 backgroundColor: 'white',
                                 borderRadius: 15,
                                 borderColor: '#a9a9a9',
                                 borderWidth: 0.5,
                                 overflow: 'hidden'
                              }}>
                              <View
                                 style={{
                                    padding: 15
                                 }}>
                                 <FontText
                                    emphasis="bold"
                                    style={{
                                       fontSize: 19,
                                       marginBottom: 10,
                                       color: '#F56258'
                                    }}>
                                    Thời gian hẹn:
                                 </FontText>
                                 <FontText
                                    style={{
                                       marginBottom: 20
                                    }}>
                                    Vui lòng chọn thời gian thợ có thể đến để
                                    sửa chữa thiết bị của bạn.
                                 </FontText>
                                 <View style={{ flexDirection: 'row' }}>
                                    <DatePicker
                                       style={{
                                          width: 220,
                                          height: 100
                                       }}
                                       date={this.state.date}
                                       locale="vn"
                                       mode="date"
                                       minimumDate={today}
                                       maximumDate={next7days}
                                       onDateChange={date =>
                                          this.setState({ date })
                                       }
                                    />
                                    <DatePicker
                                       style={{
                                          width: 130,
                                          height: 100
                                       }}
                                       date={this.state.date}
                                       locale="vn"
                                       mode="time"
                                       minuteInterval={15}
                                       onDateChange={date =>
                                          this.setState({ date })
                                       }
                                    />
                                 </View>
                              </View>
                              <View
                                 style={{
                                    width: '100%',
                                    height: 56,
                                    flexDirection: 'row',
                                    borderTopColor: '#c9c9c9',
                                    borderTopWidth: 0.7
                                 }}>
                                 <View
                                    style={{
                                       flex: 1,
                                       borderRightColor: '#c9c9c9',
                                       borderRightWidth: 0.7
                                    }}>
                                    <TouchableOpacity
                                       onPress={() => {
                                          this.setModalCalendar(
                                             !this.state.modalCalendar
                                          );
                                       }}
                                       style={{
                                          flex: 1,
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          backgroundColor: '#e9e9e9'
                                       }}>
                                       <FontText>Hủy</FontText>
                                    </TouchableOpacity>
                                 </View>
                                 <TouchableOpacity
                                    onPress={() => {
                                       this.setModalCalendar(
                                          !this.state.modalCalendar
                                       );
                                       NavigationService.navigate(
                                          'RequestDetails',
                                          {
                                             status: 'Đang đặt lịch'
                                          }
                                       );
                                    }}
                                    style={{
                                       flex: 1,
                                       alignItems: 'center',
                                       justifyContent: 'center',
                                       backgroundColor: '#F56258'
                                    }}>
                                    <FontText style={{ color: 'white' }}>
                                       Đặt lịch
                                    </FontText>
                                 </TouchableOpacity>
                              </View>
                           </View>
                        </View>
                     </Modal>
                  </View>
               </View>
            </ScrollView>
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
      zIndex: 2,
      elevation: 23
   },
   headerText: {
      fontSize: 15,
      color: '#fff'
   },
   inputContainer: {
      backgroundColor: 'white',
      borderColor: '#a9a9a9',
      borderWidth: 0.5,
      borderRadius: 10,
      width: '100%',
      paddingHorizontal: '5%',
      paddingTop: 10,
      paddingBottom: 20,
      marginTop: -12,
      zIndex: 1,

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
   buttonContainer: {
      marginTop: 30,
      marginBottom: 10,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: '15%'
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
      borderRadius: 25,
      marginBottom: 10,

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
   searchBarContainerStyle: {
      marginBottom: 5,
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
      marginHorizontal: 20
   },
   selectLabelTextStyle: {
      fontFamily: 'lato-regular',
      color: '#000',
      width: '97%',
      flexDirection: 'row',
      padding: 10
   },
   placeHolderTextStyle: {
      fontFamily: 'lato-regular',
      color: '#D3D3D3',
      padding: 10,
      textAlign: 'left',
      width: '97%',
      flexDirection: 'row'
   },
   dropDownImageStyle: {
      width: 10,
      height: 10,
      alignSelf: 'center'
   },
   listTextViewStyle: {
      fontFamily: 'lato-regular',
      color: '#000',
      marginVertical: 10,
      marginHorizontal: 20
   },
   pickerStyle: {
      elevation: 3,
      paddingRight: 10,
      width: '100%',
      marginBottom: 0,
      shadowOpacity: 1.0,
      marginVertical: 10,
      shadowOffset: {
         width: 1,
         height: 1
      },
      borderWidth: 0.5,
      borderColor: '#a9a9a9',
      shadowRadius: 10,
      backgroundColor: 'rgba(255,255,255,1)',
      shadowColor: '#d3d3d3',
      borderRadius: 5,
      flexDirection: 'row'
   }
});
