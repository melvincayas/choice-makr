import React from "react";
import { Text, StyleSheet } from "react-native";

const TitleText = props => {
	return <Text style={styles.titleText}>{props.children}</Text>;
};

const styles = StyleSheet.create({
	titleText: {
		fontSize: 24,
		fontWeight: "bold",
	},
});

export default TitleText;
