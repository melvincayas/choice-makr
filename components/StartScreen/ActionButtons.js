import React from "react";
import { View, Button, StyleSheet } from "react-native";

const ActionButtons = props => {
	return (
		<View style={styles.container}>
			<View style={styles.button}>
				<Button title="Reset" color="red" />
			</View>
			<View style={styles.button}>
				<Button title="Continue" />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
	},
	button: {
		width: "25%",
		margin: 10,
		borderColor: "black",
		borderWidth: 1,
	},
});

export default ActionButtons;
