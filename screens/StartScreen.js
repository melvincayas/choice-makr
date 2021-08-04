import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Button, StyleSheet } from "react-native";
import UserInput from "../components/StartScreen/UserInput";
import EnteredChoices from "../components/StartScreen/EnteredChoices";
import { Colors } from "../constants/Colors";

const StartScreen = props => {
	const [enteredChoice, setEnteredChoice] = useState("");

	const onChangeTextHandler = enteredText => {
		setEnteredChoice(enteredText);
	};

	const onSubmitHandler = () => {
		if (enteredChoice.trim() === "") {
			return;
		}

		const data = {
			id: Math.random(),
			text: enteredChoice,
		};

		props.onSubmit(data);
		setEnteredChoice("");
	};

	return (
		<View style={styles.startScreenContainer}>
			<View style={styles.userInputContainer}>
				<UserInput
					enteredValue={enteredChoice}
					onChangeTextHandler={onChangeTextHandler}
					onSubmitHandler={onSubmitHandler}
					style={styles.userInput}
					placeholder="Enter Choice"
				/>
				<View style={styles.button}>
					<Button title="Enter" color="#87CEEB" onPress={onSubmitHandler} />
				</View>
			</View>
			<View style={styles.choiceView}>
				<EnteredChoices choices={props.choices} onDelete={props.onDelete} />
				<View style={styles.button}>
					<Button
						title="Continue"
						color={Colors.buttonSuccess}
						onPress={props.onFinish}
					/>
				</View>
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
		width: "30%",
	},
	buttonContainer: {
		alignItems: "center",
		marginBottom: 50,
	},
	choiceView: {
		justifyContent: "space-between",
		alignItems: "center",
		flex: 1,
		marginBottom: 50,
	},
	startScreenContainer: {
		flex: 1,
	},
	userInputContainer: {
		alignItems: "center",
		marginBottom: 40,
	},
	userInput: {
		width: "80%",
	},
});

StartScreen.propTypes = {
	choices: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			text: PropTypes.string,
		})
	),
	onDelete: PropTypes.func,
	onFinish: PropTypes.func,
	onSubmit: PropTypes.func,
};

export default StartScreen;
