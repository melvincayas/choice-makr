import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const UserInput = props => {
	return (
		<View style={styles.userInputContainer}>
			<View style={styles.textInputContainer}>
				<TextInput
					style={styles.textInput}
					value={props.enteredChoice}
					onChangeText={props.onChangeTextHandler}
					placeholder="Enter choices"
				/>
			</View>
			<View style={styles.button}>
				<Button title="Enter" color="#87CEEB" onPress={props.onPressHandler} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	userInputContainer: {
		alignItems: "center",
		marginBottom: 40,
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
		width: "30%",
		borderRadius: 10,
		borderColor: "black",
		borderWidth: 1,
		paddingVertical: 1,
	},
});

export default UserInput;
