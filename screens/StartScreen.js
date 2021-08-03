import React, { useState } from "react";
import { View } from "react-native";
import UserInput from "../components/StartScreen/UserInput";
import EnteredChoices from "../components/StartScreen/EnteredChoices";

const StartScreen = props => {
	const [enteredChoice, setEnteredChoice] = useState("");

	const onChangeTextHandler = enteredText => {
		setEnteredChoice(enteredText);
	};

	const onPressHandler = () => {
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
		<View>
			<UserInput
				enteredChoice={enteredChoice}
				onChangeTextHandler={onChangeTextHandler}
				onPressHandler={onPressHandler}
			/>
			<EnteredChoices choices={props.choices} onDelete={props.onDelete} />
		</View>
	);
};

export default StartScreen;
