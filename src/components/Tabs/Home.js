import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          backgroundColor: 'pink',
        }}>
        <View style={styles.item}>
          <Image
            style={{width: 90, height: 90, marginBottom: 10}}
            source={require('../../../assets/light-bulb.png')}
          />
          <Text>Sửa đồ điện</Text>
        </View>
        <View style={styles.item}>
          <Text>Sửa nội thất</Text>
        </View>
        <View style={styles.item}>
          <Text>Sửa hệ thống nước</Text>
        </View>
        <View style={styles.item}>
          <Text>Sửa gas</Text>
        </View>
        <View style={styles.item}>
          <Text>Sửa</Text>
        </View>
        <View style={styles.item}>
          <Text>Sửa</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: '42.5%',
    height: '30%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
});
