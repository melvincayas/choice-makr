import React from "react";
import { View, StyleSheet } from "react-native";
import TitleText from "./TitleText";

const Header = () => {
	return (
		<View style={styles.container}>
			<TitleText style={styles.header}>Choice Makr</TitleText>
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
});

export default Header;
