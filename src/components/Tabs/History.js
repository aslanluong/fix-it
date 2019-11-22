import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import FontText from '../FontText';

export default class History extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.rowContainer}>
					<View style={styles.rowIcon}>
						<FontText>a</FontText>
					</View>
					<View style={styles.rowContent1}>
						<FontText emphasis="medium">201 Đặng Văn Bi</FontText>
						<FontText style={{ fontSize: 13, color: '#EA8025' }}>Đã hoàn thành</FontText>
						<FontText style={{ fontSize: 13 }} emphasis="light">18:11 01/10/2019</FontText>
					</View>
					<View style={styles.rowContent2}>
						<FontText>1 start</FontText>
						<FontText>150.000đ</FontText>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f9f9f9',
		alignItems: 'center',
	},
	rowContainer: {
		width: '90%',
		marginTop: 15,
		padding: 15,
		borderWidth: 0.5,
		borderColor: '#a9a9a9',
		borderRadius: 10,
		backgroundColor: 'white',
		flexDirection: 'row',
	},
	rowIcon: {
		flex: 1,
		justifyContent: 'center'
	},
	rowContent1: {
		flex: 6,
		justifyContent: 'center'
	},
	rowContent2: {
		flex: 3,
		justifyContent: 'center',
		alignItems: 'flex-end'
	}
});
