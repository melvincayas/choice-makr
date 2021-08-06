import React, { useReducer } from "react";
import { StyleSheet, View, Alert } from "react-native";
import Header from "./components/UI/Header";
import StartScreen from "./screens/StartScreen";
import NumberOfChoicesScreen from "./screens/NumberOfChoicesScreen";
import ResultsScreen from "./screens/ResultsScreen";

const initialState = {
	choices: [],
	isAtNumberOfChoicesScreen: false,
	isAtResultsScreen: false,
	numberOfChoicesToChoose: null,
};

const appStateReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ENTERED_CHOICE":
			return {
				...state,
				choices: [...state.choices, action.payload],
			};
		case "DELETE_CHOICE":
			return {
				...state,
				choices: state.choices.filter(choice => choice.id !== action.payload),
			};
		case "FINISHED_ENTERING":
			return {
				...state,
				isAtNumberOfChoicesScreen: true,
			};
		case "NUMBER_OF_CHOICES":
			return {
				...state,
				isAtResultsScreen: true,
				numberOfChoicesToChoose: action.payload,
			};
		case "SKIP_NUMBER_INPUT":
			return {
				...state,
				isAtResultsScreen: true,
				numberOfChoicesToChoose: 1,
			};
		default:
			return initialState;
	}
};

export default function App() {
	const [appState, dispatch] = useReducer(appStateReducer, initialState);

	const onSubmitChoiceHandler = enteredChoice => {
		dispatch({ type: "ENTERED_CHOICE", payload: enteredChoice });
	};

	const onDeleteChoiceHandler = deletedChoice => {
		dispatch({ type: "DELETE_CHOICE", payload: deletedChoice });
	};

	const onFinishEnteringChoices = () => {
		if (appState.choices.length === 1) {
			return Alert.alert("Whoops!", "Please enter more than 1 choice.", [
				{ text: "Okay", style: "cancel" },
			]);
		}

		if (appState.choices.length === 2) {
			return dispatch({ type: "SKIP_NUMBER_INPUT" });
		}

		dispatch({ type: "FINISHED_ENTERING" });
	};

	const onResetChoices = () => {
		dispatch({ type: "RESET" });
	};

	const onConfirmNumberOfChoices = enteredNumber => {
		dispatch({ type: "NUMBER_OF_CHOICES", payload: enteredNumber });
	};

	let screenProgression = (
		<StartScreen
			choices={appState.choices}
			onDelete={onDeleteChoiceHandler}
			onSubmit={onSubmitChoiceHandler}
			onFinish={onFinishEnteringChoices}
		/>
	);

	if (appState.isAtNumberOfChoicesScreen) {
		screenProgression = (
			<NumberOfChoicesScreen
				choices={appState.choices}
				onReset={onResetChoices}
				onConfirm={onConfirmNumberOfChoices}
			/>
		);
	}

	if (appState.isAtResultsScreen) {
		screenProgression = (
			<ResultsScreen
				choices={appState.choices}
				numberOfChoicesToChoose={+appState.numberOfChoicesToChoose}
				onReset={onResetChoices}
			/>
		);
	}

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
