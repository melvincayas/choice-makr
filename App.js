import React, { useReducer } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/UI/Header";
import StartScreen from "./screens/StartScreen";
import NumberOfChoicesScreen from "./screens/NumberOfChoicesScreen";

const initialState = {
	choices: [],
	isFinishedEnteringChoices: false,
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
				isFinishedEnteringChoices: true,
			};
		case "RESET":
			return {
				choices: [],
				isFinishedEnteringChoices: false,
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
		dispatch({ type: "FINISHED_ENTERING" });
	};

	const onResetChoices = () => {
		dispatch({ type: "RESET" });
	};

	const screenProgression = appState.isFinishedEnteringChoices ? (
		<NumberOfChoicesScreen onReset={onResetChoices} />
	) : (
		<StartScreen
			choices={appState.choices}
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
