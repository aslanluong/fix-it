import React, {Component} from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity
} from "react-native";
import IconS from "react-native-vector-icons/SimpleLineIcons";
import FontText from "../FontText";
import NavigationService from "../../services/navigate";

export default class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.userContainer}>
          <View style={styles.userAvatar}>
            <View
              style={{
                width: 60,
                height: 60,
                paddingTop: 7,
                borderRadius: 30,
                overflow: "hidden",
                backgroundColor: "#3ddc84"
              }}>
              <Image
                style={{width: 60, height: 60}}
                source={{
                  uri: "https://www.pngrepo.com/png/17468/170/avatar.png"
                }}
              />
            </View>
          </View>
          <View style={styles.userInfo}>
            <FontText style={{fontSize: 19}}>Thắng Lương Thành</FontText>
            <FontText emphasis="light" style={{fontSize: 13}}>
              Thành viên từ 01/11/2019
            </FontText>
          </View>
          <View style={styles.userOption}>
            <FontText style={{fontSize: 20}}>
              <IconS name="star" style={{fontSize: 20}} />
            </FontText>
          </View>
        </View>
        <View style={styles.menuContainer}>
          <TouchableOpacity
            onPress={() => NavigationService.navigate("ProfileDetails")}>
            <View style={styles.menuRow}>
              <IconS name="user" style={{fontSize: 20, marginHorizontal: 20}} />
              <FontText>Thông tin tài khoản</FontText>
            </View>
          </TouchableOpacity>
          <View style={styles.menuRow}>
            <IconS
              name="support"
              style={{fontSize: 20, marginHorizontal: 20}}
            />
            <FontText>Giúp đỡ</FontText>
          </View>
          <View style={styles.menuRow}>
            <IconS
              name="settings"
              style={{fontSize: 20, marginHorizontal: 20}}
            />
            <FontText>Cài đặt</FontText>
          </View>
          <View style={styles.menuRow}>
            <IconS name="star" style={{fontSize: 20, marginHorizontal: 20}} />
            <FontText>Đánh giá ứng dụng</FontText>
          </View>
          <FontText style={{marginLeft: 20, marginTop: 15}}>Đăng xuất</FontText>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0eff4"
  },
  userContainer: {
    width: "100%",
    height: 92,
    backgroundColor: "white",
    borderBottomWidth: 0.5,
    borderBottomColor: "#c9c9c9",
    flexDirection: "row"
  },
  userAvatar: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  userInfo: {
    flex: 6,
    justifyContent: "center"
  },
  userOption: {
    flex: 1,
    justifyContent: "center"
  },
  menuContainer: {
    marginTop: 5
  },
  menuRow: {
    marginTop: 7,
    paddingVertical: 15,
    backgroundColor: "white",
    flexDirection: "row"
  }
});
