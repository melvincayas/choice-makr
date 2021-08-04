import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

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
		borderColor: Colors.black,
		borderRadius: 10,
		borderWidth: 1,
		marginBottom: 16,
		paddingHorizontal: 12,
		paddingVertical: 5,
		width: "80%",
	},
	choiceText: {
		fontSize: 16,
	},
});

ChoiceCard.propTypes = {
	choice: PropTypes.shape({
		id: PropTypes.number,
		text: PropTypes.string,
	}),
	onDelete: PropTypes.func,
};

export default ChoiceCard;
