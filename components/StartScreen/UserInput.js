import React from "react";
import PropTypes from "prop-types";
import { View, TextInput, StyleSheet, Button } from "react-native";
import { Colors } from "../../constants/Colors";

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
				<Button title="Enter" color="#87CEEB" onPress={props.onSubmitHandler} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		borderColor: Colors.black,
		borderRadius: 10,
		borderWidth: 1,
		overflow: "hidden",
		paddingVertical: 1,
		width: "30%",
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
	textInputContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginVertical: 15,
	},
	userInputContainer: {
		alignItems: "center",
		marginBottom: 40,
	},
});

UserInput.propTypes = {
	enteredChoice: PropTypes.string,
	onChangeTextHandler: PropTypes.func,
	onSubmitHandler: PropTypes.func,
};

export default UserInput;
