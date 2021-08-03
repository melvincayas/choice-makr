import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ChoiceCard = props => {
	const onPressHandler = () => {
		props.onDelete(props.choice.id);
	};

	return (
		<TouchableOpacity style={styles.choiceContainer} onPress={onPressHandler}>
			<Text style={styles.choiceText}>{props.choice.text}</Text>
		</TouchableOpacity>
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
