import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';

export default class AccumulatePoint extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
   }

   render() {
      return (
         <ScrollView>
            <View style={{
               flex: 1,
               backgroundColor:'#ff9051',
               //backgroundColor: '##EEEEEE'
            }}>
               <View style={{
                  flexDirection: 'column',

               }}>
                  {/* <Image style={styles.imageStyle}
                  source={require('../assets/images/gold-card.jpg')}
                  > */}
                  <View style={{
                     backgroundColor: 'white',


                     height: 150,
                     borderRadius: 5,
                     margin: 5,
                     marginLeft: 10,
                     marginRight: 10

                  }}>
                     <Text style={{
                        alignItems: 'baseline',
                        fontWeight: 'bold',
                        fontSize: 28,
                        paddingTop: 70,
                        padding: 12

                     }}>
                        Nguyễn Ngọc Bắc Nam

                     <Text style={{

                           fontWeight: 'bold',
                           fontSize: 16,
                           fontStyle: 'italic',
                           color: 'gold'
                           // paddingTop:80,
                        }}>        Thành viên vàng</Text>
                     </Text>
                  </View>
                  {/* </Image> */}






                  <View style={{
                     backgroundColor: 'white',
                     borderRadius: 5,
                     margin: 5,
                     marginLeft: 10,
                     marginRight: 10

                  }}>
                     <View style={{
                        backgroundColor: 'white',

                        height: 80,
                        borderRadius: 5,
                        margin: 5,
                        marginLeft: 10,
                        marginRight: 10,
                        flexDirection: 'row',
                     }}>
                        <View style={{
                           borderWidth: 1,
                           borderTopWidth: 0,
                           borderLeftWidth: 0,
                           borderBottomWidth: 0,
                           marginRight: 0,
                           margin: 10,
                           flex: 1,
                        }}>
                           <Text style={{
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: 18,
                              fontWeight: 'bold',
                              padding: 15,
                              paddingLeft: 22
                           }} >204 <Text style={{
                              fontSize: 18,
                              fontWeight: 'bold',
                              color: 'gold'
                           }}>Points</Text> </Text>
                        </View>

                        <View style={{
                           borderWidth: 1,
                           borderTopWidth: 0,
                           borderRightWidth: 0,
                           borderBottomWidth: 0,
                           margin: 10,
                           marginLeft: 0,
                           flex: 1
                        }}>
                           <Text style={{
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: 18,
                              fontWeight: 'bold',
                              padding: 15,
                              paddingLeft: 52
                           }} >Ưu đãi </Text>
                        </View>


                     </View>


                     <TouchableOpacity>


                        <View style={{
                           backgroundColor: 'white',
                           borderWidth: 1,
                           height: 50,
                           borderRadius: 5,
                           margin: 5,
                           marginLeft: 10,
                           marginRight: 10,
                           flexDirection: 'row',

                        }}>
                           <View style={{
                              borderWidth: 1,
                              borderTopWidth: 0,
                              borderLeftWidth: 0,
                              borderBottomWidth: 0,
                              marginRight: 0,
                              margin: 10,
                              flex: 1
                           }}>
                              <Text style={{
                                 fontSize: 16,
                                 color: 'black'
                              }} >
                                 Lịch sử BEAN thường
                           </Text>
                           </View>


                           <View style={{
                              backgroundColor: 'red',
                              //borderColor:'red',
                              borderWidth: 1,
                              borderTopWidth: 0,
                              borderLeftWidth: 0,
                              borderBottomWidth: 0,
                              marginLeft: 0,
                              margin: 10,
                              width: 50,
                              // flex:1
                           }}>

                           </View>

                        </View>
                     </TouchableOpacity>


                     <TouchableOpacity>


                        <View style={{
                           backgroundColor: 'white',
                           borderWidth: 1,
                           height: 50,
                           borderRadius: 5,
                           margin: 5,
                           marginLeft: 10,
                           marginRight: 10,
                           flexDirection: 'row',

                        }}>
                           <View style={{
                              borderWidth: 1,
                              borderTopWidth: 0,
                              borderLeftWidth: 0,
                              borderBottomWidth: 0,
                              marginRight: 0,
                              margin: 10,
                              flex: 1
                           }}>
                              <Text style={{
                                 fontSize: 16,
                                 color: 'black'
                              }} >
                                 Tìm hiểu chương trình
                           </Text>
                           </View>


                           <View style={{
                              backgroundColor: 'red',
                              //borderColor:'red',
                              borderWidth: 1,
                              borderTopWidth: 0,
                              borderLeftWidth: 0,
                              borderBottomWidth: 0,
                              marginLeft: 0,
                              margin: 10,
                              width: 50,
                              // flex:1
                           }}>

                           </View>

                        </View>
                     </TouchableOpacity>

                  </View>
                  <View style={{
                     backgroundColor: 'white',

                     height: 100,
                     borderRadius: 5,
                     margin: 5,
                     marginLeft: 10,
                     marginRight: 10

                  }}>
                     <Text style={{
                        paddingTop: 10,
                        paddingLeft: 10,
                        fontSize: 18,
                        fontWeight: 'bold',
                     }}>
                        Bạn đang là thành viên vàng!
                  </Text>
                     <Text style={{
                        padding: 10,
                        fontSize: 16,

                     }}>
                        Bạn cần tích lũy thêm 100 points trước ngày 01/02/2020 để giữ hạng vàng
                  </Text>
                  </View>




                  <View style={{
                     backgroundColor: '#AAAAAA',
                     //backgroundColor:'#ff9051',
                     flexDirection: 'row',
                     height: 70,
                     borderRadius: 5,
                     margin: 5,
                     marginLeft: 10,
                     marginRight: 10

                  }}>
                     <View style={{
                        width: '14%',
                        backgroundColor: 'red',
                        margin: 10
                     }}>

                     </View>
                     <View style={{
                        width: '14%',
                        backgroundColor: 'red',
                        margin: 10
                     }}>
                     </View>
                     <View style={{
                        width: '14%',
                        backgroundColor: 'red',
                        margin: 10
                     }}>
                     </View>
                     <View style={{
                        width: '14%',
                        backgroundColor: 'red',
                        margin: 10
                     }}>
                     </View>
                     <View style={{
                        width: '14%',
                        backgroundColor: 'red',
                        margin: 10
                     }}>
                     </View>

                  </View>



                  <View style={{
                     backgroundColor: 'white',
                     borderRadius: 5,
                     margin: 5,
                     marginLeft: 10,
                     marginRight: 10,


                  }}>
                     <Text style={{
                        paddingTop: 10,
                        paddingLeft: 10,
                        fontSize: 18,
                        fontWeight: 'bold',
                     }}>
                        Bạn đã đạt hạng vàng
                  </Text>
                     <Text style={{
                        padding: 10,
                        fontSize: 13,
                        color: '#ff9051',
                        fontWeight:'bold'

                     }}>
                        Đổi quà không ảnh hưởng đến tích điểm
                  </Text>
                  <View style={{
                     flexDirection:'column',
                     paddingLeft:10,
                     margin:10,
                     backgroundColor:'#EEEEEE',
                     borderRadius:5
                  }}>
                     <View style={{
                        paddingLeft:10,
                        margin:10,
                     }}>
                        <Text  style={{
                           fontSize:14
                        }}>
                           Một phần bánh ngày sinh nhật
                        </Text>

                     </View>
                     <View style={{
                        paddingLeft:10,
                        margin:10,

                     }}>
                        <Text  style={{
                           fontSize:14
                        }}>
                           Đổi ưu đãi trang cửa hàng 
                        </Text>

                     </View>
                     <View style={{
                        paddingLeft:10,
                        margin:10,

                     }}>
                        <Text style={{
                           fontSize:14
                        }}>
                           Miễn phí 1 ly cà phê truyền thống hoặc 1 ly trà trái cây
                        </Text>

                     </View>
                     <View style={{
                        paddingLeft:10,
                        margin:10,

                     }}>
                        <Text  style={{
                           fontSize:14
                        }}>
                           Giảm giá 5% khi mua sản phẩm tại The Coffee house
                        </Text>

                     </View>
                     
                  </View>
                  </View>
                  



               </View>
            </View>
         </ScrollView>
      );
   }
}

const styles = StyleSheet.create({

   imageStyle: {
      width: 200, height: 200,
      marginBottom: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10
   }
})
