import React, { useContext } from "react";
import { ChoiceContext } from "./store/ChoicesProvider";
import { StyleSheet, View, Text } from "react-native";
import Header from "./UI/Header";
import StartScreen from "../screens/StartScreen";
import NumberOfChoicesScreen from "../screens/NumberOfChoicesScreen";
import ResultsScreen from "../screens/ResultsScreen";

const GameState = () => {
	const choiceContext = useContext(ChoiceContext);

	let screenProgression = <StartScreen />;

	if (choiceContext.isAtNumberOfChoicesScreen) {
		screenProgression = <NumberOfChoicesScreen />;
	}

	if (choiceContext.isAtResultsScreen) {
		screenProgression = <ResultsScreen />;
	}

	return (
		<View style={styles.appContainer}>
			<Header />
			{screenProgression}
		</View>
	);
};

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
	},
});

export default GameState;
