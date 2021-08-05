import React from "react";
import PropTypes from "prop-types";
import { View, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const UserInput = props => {
	return (
		<View style={styles.textInputContainer}>
			<TextInput
				{...props}
				style={{ ...styles.textInput, ...props.style }}
				value={props.enteredValue}
				onChangeText={props.onChangeTextHandler}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	textInput: {
		borderColor: Colors.black,
		borderRadius: 10,
		borderWidth: 1,
		fontSize: 18,
		paddingHorizontal: 10,
		paddingVertical: 3,
	},
	textInputContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginVertical: 15,
	},
});

UserInput.propTypes = {
	enteredValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChangeTextHandler: PropTypes.func,
	onSubmitHandler: PropTypes.func,
	style: PropTypes.objectOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	),
};

export default UserInput;
