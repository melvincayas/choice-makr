import React, { useState, useContext } from "react";
import { View, Button, StyleSheet, Alert, Keyboard } from "react-native";
import { ChoiceContext } from "../components/store/ChoicesProvider";
import UserInput from "../components/UI/UserInput";
import EnteredChoices from "../components/StartScreen/EnteredChoices";
import Colors from "../constants/Colors";

const StartScreen = () => {
	const [enteredChoice, setEnteredChoice] = useState("");
	const choiceContext = useContext(ChoiceContext);

	const onChangeTextHandler = enteredText => {
		setEnteredChoice(enteredText);
	};

	const onSubmitHandler = () => {
		if (enteredChoice.trim() === "") {
			Alert.alert("Whoops!", "Please enter a choice.", [
				{ text: "Okay", style: "cancel" },
			]);
			return;
		}

		const data = {
			id: Math.random(),
			text: enteredChoice,
		};

		choiceContext.onSubmit(data);
		setEnteredChoice("");
		Keyboard.dismiss();
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
			{choiceContext.choices.length > 0 && (
				<View style={styles.choiceView}>
					<EnteredChoices
						choices={choiceContext.choices}
						onDelete={choiceContext.onDelete}
					/>
					<View style={styles.button}>
						<Button
							title="Continue"
							color={Colors.buttonSuccess}
							onPress={choiceContext.onFinish}
						/>
					</View>
				</View>
			)}
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
	choiceView: {
		alignItems: "center",
		flex: 1,
		justifyContent: "space-between",
		marginBottom: 50,
	},
	startScreenContainer: {
		flex: 1,
	},
	userInput: {
		width: "80%",
	},
	userInputContainer: {
		alignItems: "center",
		marginBottom: 40,
	},
});

export default StartScreen;
