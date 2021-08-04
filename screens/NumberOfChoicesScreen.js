import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

const NumberOfChoicesScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.questionText}>
				How many choices do you need to pick?
			</Text>
			<TextInput style={styles.textInput} keyboardType="number-pad" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
	},
	questionText: {
		fontSize: 18,
		textAlign: "center",
	},
	textInput: {
		borderColor: Colors.black,
		borderRadius: 10,
		borderWidth: 1,
		fontSize: 18,
		paddingHorizontal: 10,
		paddingVertical: 3,
		width: "80%",
	},
});

export default NumberOfChoicesScreen;
