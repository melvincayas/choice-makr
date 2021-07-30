import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Header = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Choice Makr</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFC0CB",
		paddingTop: 50,
		paddingBottom: 10,
		alignItems: "center",
	},
	header: {
		fontSize: 24,
		fontWeight: "bold",
	},
});

export default Header;
