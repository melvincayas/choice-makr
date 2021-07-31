import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const StartScreen = props => {
	const [enteredChoice, setEnteredChoice] = useState("");

	const onChangeTextHandler = enteredText => {
		setEnteredChoice(enteredText);
	};

	const onPressHandler = () => {
		props.onSubmit(enteredChoice);
	};

	return (
		<View style={styles.container}>
			<View style={styles.textInputContainer}>
				<TextInput
					style={styles.textInput}
					value={enteredChoice}
					onChangeText={onChangeTextHandler}
					placeholder="Enter choices"
				/>
			</View>
			<View style={styles.button}>
				<Button title="Enter" color="#87CEEB" onPress={onPressHandler} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	textInputContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginVertical: 15,
	},
	textInput: {
		fontSize: 18,
		borderColor: "black",
		borderWidth: 1,
		borderRadius: 10,
		paddingHorizontal: 10,
		paddingVertical: 3,
		width: "80%",
	},
	button: {
		overflow: "hidden",
		width: "35%",
		borderRadius: 10,
		borderColor: "black",
		borderWidth: 1,
	},
});

export default StartScreen;
