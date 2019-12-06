import React, { Component } from 'react';
// import NavigationService from './NavigationService';
import { AppRegistry, Text, View, Button } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import {StackNavigator} from 'react-navigation-stack'
import { white } from 'ansi-colors';
import { from } from 'rxjs';
import { NavigationEvents } from 'react-navigation';



class ChooseBank extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeText = this.onChangeText.bind(this);

    this.codeRef = this.updateRef.bind(this, 'code');
    this.nameRef = this.updateRef.bind(this, 'name');
    this.bankCodeRef = this.updateRef.bind(this, 'bankCode');
    this.sampleRef = this.updateRef.bind(this, 'sample');
    this.amoutRef = this.updateRef.bind(this, 'amout');

    this.state = {
      sample: 'TPBank',
      bankCode: '',
      amout: 0,

    };
  }

  onChangeText(text) {
    ['bankCode', 'sample', 'amout']
      .map((name) => ({ name, ref: this[name] }))
      .filter(({ ref }) => ref && ref.isFocused())
      .forEach(({ name, ref }) => {
        this.setState({ [name]: text });
      });
  }

  updateRef(name, ref) {
    this[name] = ref;
  }

  render() {
    let { amout, bankCode, sample } = this.state;

    let textStyle = [
      styles.text,
      styles[amout],
    ];
    console.log(this.props.navigation);

    return (


      <View
        style={styles.screen}
        style={{ backgroundColor: 'white', flex: 1, width: '100%' }}>
        <Text style={{
          fontSize: 40,
          borderColor: 'red',
          paddingTop: 50,
          paddingLeft: 40,
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
          height: '26%'
        }}>CHUYỂN TIỀN</Text>
        <View
          style={styles.container}

        >
          <Dropdown
            ref={this.sampleRef}
            value={sample}
            onChangeText={this.onChangeText}
            label='Chọn ngân hàng'
            data={sampleData}
          />
          <TextField
            ref={this.bankCodeRef}
            value={bankCode}
            onChangeText={this.onChangeText}
            label='Tài khoản ngân hàng'

          />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Dropdown
                ref={this.amoutRef}
                value={amout}
                onChangeText={this.onChangeText}
                label='Số tiền'
                data={amoutData}
              />
            </View>

            <View style={{
              width: 50,
              marginLeft: 8,
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginBottom: 10
            }}>
              <Text>VND</Text>
            </View>
          </View>


        </View>

        <View style={[styles.container, styles.textContainer]}>
          <Text
            style={textStyle}
            style={{ fontSize: 20, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}
            multiline={true}
          >{a + amout + b + c + sample + ' ' + bankCode}</Text>
        </View>
        <View>
          <Button
          onPress={() => this.props.navigation.navigate('LoginBank')}
            title="Xác nhận"
            style={{ fontSize: 24, width: '40%' }}
                                    
          />
        </View>
      </View>
    );
  }
}
const a = 'Nạp '
const b = ' VND '
const c = 'vào tài khoản '


const styles = {
  screen: {
    flex: 1,
    padding: 4,
    paddingTop: 56,
    backgroundColor: '#E8EAF6',
  },

  container: {
    marginHorizontal: 4,
    marginVertical: 8,
    paddingHorizontal: 8,
  },


  text: {
    textAlign: 'center',
  },

  textContainer: {
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 16,
    elevation: 1,
    shadowRadius: 1,
    shadowOpacity: 0.3,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
};

const sampleData = [
  { value: 'TPBank', label: 'TPBank' },
  { value: 'VietcomBank', label: 'VietcomBank' },
  { value: 'TechcomBank', label: 'TechcomBank' },
  { value: 'BIDV', label: 'BIDV' },
  { value: 'AgriBank', label: 'AgriBank' },
  { value: 'ViettinBank', label: 'ViettinBank' },

]

const amoutData = [
  { value: 100000, label: '100.000' },
  { value: 200000, label: '200.000' },
  { value: 500000, label: '500.000' },
  { value: 1000000, label: '1.000.000' },
  { value: 2000000, label: '2.000.000' },
  { value: 3000000, label: '3.000.000' },
  { value: 5000000, label: '5.000.000' },

];


export default ChooseBank


