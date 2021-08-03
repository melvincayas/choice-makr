import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	ScrollView,
} from "react-native";
import TitleText from "../components/TitleText";
import ChoiceCard from "../components/ChoiceCard";

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
			<View style={styles.userInputContainer}>
				<View style={styles.textInputContainer}>
					<TextInput
						style={styles.textInput}
						value={enteredChoice}
						onChangeText={onChangeTextHandler}
						placeholder="Enter choices"
					/>
				</View>
				<View style={styles.button}>
					<Button title="Enter" color="#87CEEB" onPress={onPressHandler} />
				</View>
			</View>
			<View>
				<TitleText style={styles.scrollViewHeader}>Choices</TitleText>
				<ScrollView contentContainerStyle={styles.scrollViewContainer}>
					{props.choices.map(choice => (
						<ChoiceCard key={choice.id} choice={choice.text} />
					))}
				</ScrollView>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	userInputContainer: {
		alignItems: "center",
		marginBottom: 40,
	},
	textInputContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginVertical: 15,
	},
	textInput: {
		fontSize: 18,
		borderColor: "black",
		borderWidth: 1,
		borderRadius: 10,
		paddingHorizontal: 10,
		paddingVertical: 3,
		width: "80%",
	},
	button: {
		overflow: "hidden",
		width: "30%",
		borderRadius: 10,
		borderColor: "black",
		borderWidth: 1,
		paddingVertical: 1,
	},
	scrollViewHeader: {
		textAlign: "center",
		marginBottom: 16,
	},
	scrollViewContainer: {
		alignItems: "center",
	},
});

export default StartScreen;
