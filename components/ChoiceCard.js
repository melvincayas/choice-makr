import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChoiceCard = props => {
	return (
		<View style={styles.choiceContainer}>
			<Text style={styles.choiceText}>{props.choice}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	choiceContainer: {
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 10,
		width: "80%",
		marginBottom: 16,
		paddingHorizontal: 12,
		paddingVertical: 5,
	},
	choiceText: {
		fontSize: 16,
	},
});

export default ChoiceCard;
