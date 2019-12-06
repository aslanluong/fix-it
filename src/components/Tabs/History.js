import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import HistoryRow from './HistoryRow';
import { APP_CONST } from '../../../app.const';
import { TouchableOpacity } from 'react-native';

const list = [
   {
      typeSource: APP_CONST.TV_ICON,
      itemName: 'Tivi 40 inch',
      status: 'Đã huỷ',
      time: '18:11 01/10/2019',
      feedback: '',
      fee: ''
   },
   {
      typeSource: APP_CONST.LAMP_ICON,
      itemName: 'Đèn trần lớn',
      status: 'Đã hoàn thành',
      time: '13:17 01/11/2019',
      feedback: 4,
      fee: '350.000đ'
   },
   {
      typeSource: APP_CONST.WASHING_MACHINE_ICON,
      itemName: 'Tủ lạnh 30 lít',
      status: 'Đã hoàn thành',
      time: '09:31 07/11/2019',
      feedback: 5,
      fee: '500.000đ'
   },
   {
      typeSource: APP_CONST.CUTLERY_ICON,
      itemName: 'Bếp điện',
      status: 'Đã hoàn thành',
      time: '16:23 09/10/2019',
      feedback: 3,
      fee: '100.000đ'
   },
   {
      typeSource: APP_CONST.AIR_CONDITIONER_ICON,
      itemName: 'Máy lạnh',
      status: 'Đang thực hiện',
      time: '14:11 05/10/2019',
      feedback: '',
      fee: ''
   },
   {
      typeSource: APP_CONST.FAUCET_ICON,
      itemName: 'Vòi sen',
      status: 'Đã hoàn thành',
      time: '16:00 27/10/2019',
      feedback: 5,
      fee: '70.000đ'
   }
];
const shuffleArray = array => {
   let i = array.length - 1;
   for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
   }
   return array;
};
export default class History extends Component {
   render() {
      const randomList = shuffleArray(list);
      return (
         <SafeAreaView style={styles.container}>
            <FlatList
               contentContainerStyle={{ alignItems: 'center' }}
               data={randomList}
               renderItem={({ item }) => (
                  <HistoryRow
                     typeSource={item.typeSource}
                     itemName={item.itemName}
                     status={item.status}
                     time={item.time}
                     feedback={item.feedback}
                     fee={item.fee}
                  />
               )}
               keyExtractor={index => index.toString()}
            />
         </SafeAreaView>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#f0eff4'
   }
});
