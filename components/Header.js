import React from "react";
import { View, StyleSheet } from "react-native";
import TitleText from "./TitleText";
import { Colors } from "../constants/Colors";

const Header = () => {
	return (
		<View style={styles.container}>
			<TitleText style={styles.header}>Choice Makr</TitleText>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: Colors.primary,
		paddingBottom: 10,
		paddingTop: 50,
	},
});

export default Header;
