import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import FontText from '../FontText';

export default class FindFixer extends Component {
   render() {
      return (
         <View>
            <View style={styles.header}>
               <View>
                  <FontText style={{ paddingLeft: 0, fontSize: 17 }}>
                     Xin chào Thắng,
            </FontText>
                  <FontText style={{ fontSize: 23 }}>
                     Chọn loại thiết bị cần sửa chữa
            </FontText>
               </View>
            </View>
         </View>
      )
   }
}

const styles = StyleSheet.create({
	header: {
		height: 75,
		alignItems: 'center',
		justifyContent: 'flex-end',
		backgroundColor: '#f9f9f9',
   }
});

