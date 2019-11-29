import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';

export default class BasicTimeLine extends Component {
   constructor() {
      super();
      this.data = [
         {
            time: '09:00',
            title: 'Fixer đã tiếp nhận yêu cầu',


         },
         {
            time: '10:45',
            title: 'Fixer đang trên đường tới',
         },
         {
            time: '12:00',
            title: 'Fixer đã tới nơi thực hiện yêu cầu',

         },
         {
            time: '14:00',
            title: 'Fixer đang thực hiện yêu cầu',

         },
         {
            time: '16:30',
            title: 'Hoàn thành',
         },
      ];
   }

   render() {
      return (
         <View style={styles.container}>
            <Text
               style={{

                  padding: 16,
                  fontSize: 20,
                  textAlign: 'center',
                  fontWeight: 'bold',
               }}>
               Fixer Timeline
        </Text>
            <Timeline
               style={{ flex: 1 }} data={this.data}
               circleSize={20}
               circleColor='#ff9051'
               lineColor='#ff9051'
               timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
               timeStyle={{ textAlign: 'center', backgroundColor: '#ff9051', color: 'white', padding: 5, borderRadius: 13 }}
               descriptionStyle={{ color: 'gray' }}
               options={{
                  style: { paddingTop: 25 }
               }}
            />
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 16,
      backgroundColor: 'white',
   },
});
