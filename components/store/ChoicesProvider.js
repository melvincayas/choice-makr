import React, { createContext, useReducer } from "react";
import { Alert } from "react-native";

export const ChoiceContext = createContext({});

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

const ChoicesProvider = props => {
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

	const context = {
		choices: appState.choices,
		isAtNumberOfChoicesScreen: appState.isAtNumberOfChoicesScreen,
		isAtResultsScreen: appState.isAtResultsScreen,
		numberOfChoicesToChoose: appState.numberOfChoicesToChoose,
		onSubmit: onSubmitChoiceHandler,
		onDelete: onDeleteChoiceHandler,
		onFinish: onFinishEnteringChoices,
		onReset: onResetChoices,
		onConfirm: onConfirmNumberOfChoices,
	};

	return (
		<ChoiceContext.Provider value={context}>
			{props.children}
		</ChoiceContext.Provider>
	);
};

export default ChoicesProvider;
