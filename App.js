import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/UI/Header";
import StartScreen from "./screens/StartScreen";
import NumberOfChoicesScreen from "./screens/NumberOfChoicesScreen";

export default function App() {
	const [choices, setChoices] = useState([]);
	const [isFinishedEnteringChoices, setIsFinishedEnteringChoices] =
		useState(false);

	const onSubmitChoiceHandler = enteredChoice => {
		setChoices(prevChoices => [...prevChoices, enteredChoice]);
	};

	const onDeleteChoiceHandler = deletedChoice => {
		setChoices(prevChoices =>
			prevChoices.filter(choice => choice.id !== deletedChoice)
		);
	};

	const onFinishEnteringChoices = () => {
		setIsFinishedEnteringChoices(prevState => !prevState);
	};

	const screenProgression = isFinishedEnteringChoices ? (
		<NumberOfChoicesScreen />
	) : (
		<StartScreen
			choices={choices}
			onDelete={onDeleteChoiceHandler}
			onSubmit={onSubmitChoiceHandler}
			onFinish={onFinishEnteringChoices}
		/>
	);

	return (
		<View style={styles.appContainer}>
			<Header />
			{screenProgression}
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
	},
});
