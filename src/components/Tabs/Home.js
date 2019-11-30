import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Image,
	TouchableNativeFeedback,
	ScrollView,
	Dimensions,
} from 'react-native';
import FontText from '../FontText';
import nav from "../../services/navigate";
export default class Home extends Component {
	constructor() {
		super();

		const isPortrait = () => {
			const dim = Dimensions.get('screen');
			return dim.height >= dim.width;
		};

		this.state = {
			orientation: isPortrait() ? 'portrait' : 'landscape',
		};
		// Event Listener for orientation changes
		Dimensions.addEventListener('change', () => {
			this.setState({
				orientation: isPortrait() ? 'portrait' : 'landscape',
			});
		});
	}
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
				<ScrollView
					horizontal={this.state.orientation === 'landscape' ? true : false}>
					<View style={styles.menu}>
						<View style={styles.itemContainer}>
							<TouchableNativeFeedback onPress={() => nav.navigate("FindFixer",{  type : "TV" })}>
								<View style={styles.item}>
									<Image
										style={styles.image}
										source={require('../../../assets/images/television.png')}
									/>
									<FontText>Thiết bị giải trí</FontText>
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={styles.itemContainer}>
							<TouchableNativeFeedback onPress={() => nav.navigate("FindFixer",{  type : "TV" })}>
								<View style={styles.item}>
									<Image
										style={styles.image}
										source={require('../../../assets/images/lamp.png')}
									/>
									<FontText>Thiết bị chiếu sáng</FontText>
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={styles.itemContainer}>
							<TouchableNativeFeedback>
								<View style={styles.item}>
									<Image
										style={styles.image}
										source={require('../../../assets/images/washing-machine.png')}
									/>
									<FontText>Thiết bị giặt ủi</FontText>
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={styles.itemContainer}>
							<TouchableNativeFeedback>
								<View style={styles.item}>
									<Image
										style={styles.image}
										source={require('../../../assets/images/cutlery.png')}
									/>
									<FontText>Thiết bị nhà bếp</FontText>
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={styles.itemContainer}>
							<TouchableNativeFeedback>
								<View style={styles.item}>
									<Image
										style={styles.image}
										source={require('../../../assets/images/air-conditioner.png')}
									/>
									<FontText>Điều hoà phòng</FontText>
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={styles.itemContainer}>
							<TouchableNativeFeedback>
								<View style={styles.item}>
									<Image
										style={styles.image}
										source={require('../../../assets/images/faucet.png')}
									/>
									<FontText>Hệ thống nước</FontText>
								</View>
							</TouchableNativeFeedback>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		height: 75,
		alignItems: 'center',
		justifyContent: 'flex-end',
		backgroundColor: '#f9f9f9',
	},
	menu: {
		paddingTop: 20,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
		paddingHorizontal: 25,
		paddingBottom: 55,
		backgroundColor: '#f9f9f9',
	},
	itemContainer: {
		width: 155,
		height: 190,
		borderRadius: 20,
		overflow: 'hidden',
		marginHorizontal: 5,
		marginBottom: 20,

		// shadow
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 11,
		},
		shadowOpacity: 0.57,
		shadowRadius: 15.19,

		elevation: 23,
	},
	item: {
		width: '100%',
		height: '100%',
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: 80,
		height: 80,
		marginBottom: 15,
	},
});
