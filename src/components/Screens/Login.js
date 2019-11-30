import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions
} from 'react-native';
import FontText from '../FontText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ImageBackground source={require('../../../assets/images/login-background.jpg')}
        style={styles.imageBachground}>
        {/* <View
        style={styles.cointainer}
        behavior="padding"
        enabled
      > */}

        <KeyboardAvoidingView style={styles.loginCointainer}>
          {/* <View style={styles.formContainer}>
            <View style={styles.usernameContainer}>
              <Icon name="account" style={{ fontSize: 20, paddingHorizontal: 15, }} />
              <TextInput
                style={styles.input}
                placeholder="Tài khoản"
                onChangeText={(content) => this.setState({ username: content })}
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                blurOnSubmit={false}
              />
            </View>

            <View style={styles.passwordContainer}>
              <Icon name="lock-open" style={{ fontSize: 20, paddingHorizontal: 15 }} />
              <TextInput
                style={styles.input}
                placeholder="Mật khẩu"
                secureTextEntry
                onChangeText={(content) => this.setState({ password: content })}
                ref={input => {
                  this.passwordInput = input;
                }}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.loginButton}>
                <FontText style={styles.loginButtonText}>Đăng nhập</FontText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.signUpButton}>
                <FontText style={styles.signUpButtonText}>Đăng ký</FontText>
              </TouchableOpacity>
            </View>

          </View> */}
          <View>
            <Image source={{ uri: 'https://www.clipartwiki.com/clipimg/full/146-1460660_handyman-clipart-hardware-store-mr-fix-it-logo.png' }}
              style={{ width: 175, height: 160, marginBottom: '10%' }} />
          </View>
          <View style={styles.forgotPassworButtonContainer}>
            <TouchableOpacity style={styles.forgotPasswordButton}>
              <Image source={{ uri: 'https://img.icons8.com/plasticine/40/000000/sms.png' }}
                style={{ width: 35, height: 35, marginHorizontal: '4%' }} />
              <FontText style={styles.loginGoogleText}>Đăng nhập bằng số điện thoại</FontText>
              <Icon name='arrow-right' style={{ fontSize: 20, marginLeft: '5%' }} />
            </TouchableOpacity>
          </View>
          <View style={styles.googleButtonContainer}>
            <TouchableOpacity style={styles.loginGoogleButton}>
              <Image source={{ uri: 'https://img.icons8.com/plasticine/100/000000/google-logo.png' }}
                style={{ width: 30, height: 30, marginRight: '11%' }} />
              <FontText style={styles.loginGoogleText}>Đăng nhập bằng Google</FontText>
              <Icon name='arrow-right' style={{ fontSize: 20, marginLeft: '11%' }} />
            </TouchableOpacity>
          </View>
          <View style={styles.forgotPassworButtonContainer}>
            <TouchableOpacity style={styles.forgotPasswordButton}>
              <Image source={{ uri: 'https://img.icons8.com/office/40/000000/facebook-new.png' }}
                style={{ width: 28, height: 28, marginRight: '8%', marginLeft: '5%' }} />
              <FontText style={styles.loginGoogleText}>Đăng nhập bằng Facebook</FontText>
              <Icon name='arrow-right' style={{ fontSize: 20, marginLeft: '8%' }} />
            </TouchableOpacity>
          </View>

        </KeyboardAvoidingView>
        {/* </View> */}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  slogan: {
    marginBottom: 30
  },
  imageBachground: {
    width: '100%',
    height: Dimensions.get('screen').height,
    backgroundColor: 'blue',
  },
  loginCointainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    padding: 27,
    backgroundColor: 'rgba(255,255,255,0.5)',

    paddingTop: '15%'
  },
  // input: {
  //   alignSelf: 'stretch',
  //   height: 47,
  //   fontSize: 16
  // paddingHorizontal: 10,

  // }, loginButton: {
  //   width: '35%',
  //   // backgroundColor: "#ff9501",
  //   backgroundColor: '#ff9501',
  //   marginVertical: 15,
  //   paddingVertical: 10,
  //   borderRadius: 25,
  //   marginHorizontal: 25,
  //   borderColor: 'white',
  //   borderWidth: 1

  // },
  // signUpButton: {
  //   width: '35%',
  //   paddingVertical: 10,
  //   borderRadius: 25,
  //   marginHorizontal: 25,
  //   marginVertical: 15,
  //   backgroundColor: 'white',
  //   borderColor: '#ff9501',
  //   borderWidth: 1

  // },
  // loginButtonText: {
  //   fontSize: 16,
  //   textAlign: 'center',
  //   color: 'white'
  // },
  // signUpButtonText: {
  //   fontSize: 16,
  //   textAlign: 'center',
  //   color: '#ff9501'
  // },
  // formContainer: {
  //   width: '100%',


  // },
  // usernameContainer: {
  //   marginVertical: 10,
  //   flexDirection: 'row',
  //   borderColor: 'black',
  //   borderBottomWidth: 2,
  //   alignItems: 'center',

  // },
  // passwordContainer: {
  //   flexDirection: 'row',
  //   borderColor: 'black',
  //   borderBottomWidth: 2,
  //   alignItems: 'center'
  // },
  // buttonContainer: {
  //   flexDirection: 'row',
  //   marginVertical: 20
  // },
  googleButtonContainer: {
    alignItems: 'center',
    width: '100%'
  },
  loginGoogleButton: {
    backgroundColor: "#fff",
    width: '90%',
    borderWidth: 1,
    borderColor: '#F56258',
    height: 47,
    alignItems: 'center',
    borderRadius: 25,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  loginGoogleText: {
    fontSize: 16,

  },
  forgotPassworButtonContainer: {
    marginVertical: 20,
    alignItems: 'center',
    width: '100%',

  },
  forgotPasswordButton: {
    backgroundColor: "#fff",
    width: '90%',
    borderWidth: 1,
    borderColor: '#F56258',
    height: 47,
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',

  },


})
