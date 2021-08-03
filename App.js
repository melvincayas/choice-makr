import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import StartScreen from "./screens/StartScreen";
import Header from "./components/Header";

export default function App() {
	const [choices, setChoices] = useState([]);

	const onSubmitChoiceHandler = enteredChoice => {
		setChoices(prevChoices => [...prevChoices, enteredChoice]);
	};

	const onDeleteChoiceHandler = deletedChoice => {
		setChoices(prevChoices =>
			prevChoices.filter(choice => choice.id !== deletedChoice)
		);
	};

	return (
		<View style={styles.appContainer}>
			<Header />
			<StartScreen
				choices={choices}
				onDelete={onDeleteChoiceHandler}
				onSubmit={onSubmitChoiceHandler}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
	},
});
