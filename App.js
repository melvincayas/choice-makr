import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import StartScreen from "./screens/StartScreen";
import Header from "./components/Header";

export default function App() {
	const [choices, setChoices] = useState([]);

	const onSubmitChoiceHandler = choice => {
		setChoices(prevChoices => [...prevChoices, choice]);
	};

	return (
		<View style={styles.appContainer}>
			<Header />
			<StartScreen choices={choices} onSubmit={onSubmitChoiceHandler} />
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
	},
});
