import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
 
export default class DotTimeLine extends Component {
  constructor() {
    super();
    this.data = [
      {
        time: '09:00',
        title: 'Đã nhận',
      //   circleColor: 'orange',
      //   lineColor: '#009688',
      },
      {
        time: '10:45',
        title: 'Đang trên đường tới',

      },
      {
        time: '14:00',
        title: 'Đang tiến hành sửa chữa',
        //lineColor: 'white',
      },
      {
        time: '16:30',
        title: 'Đã hoàn thành',
        //circleColor: 'white',
        //lineColor: 'white',
      }, 
    ];
  }
 
  render() {
    //'rgb(45,156,219)'
    return (
      <View style={styles.container}>
        <Text
          style={{
            padding: 16,
            fontSize: 32,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          TimeLine
        </Text>
        <Timeline
          style={styles.list}
          data={this.data}
          circleSize={12}
          circleColor="rgb(255,149,1)"
          lineColor="rgb(255,149,1)"
          timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
          timeStyle={{
            textAlign: 'center',
            backgroundColor: 'white',
            color: 'black',
            padding: 5,
            borderRadius: 13,
          }}
          descriptionStyle={{ color: 'gray' }}
          options={{
            style: { paddingTop: 5 },
          }}
          innerCircle={'dot'}
          detailContainerStyle={20}
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
  },
});