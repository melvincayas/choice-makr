import React, { useState, useContext } from "react";
import { ChoiceContext } from "../components/store/ChoicesProvider";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import ChoiceCard from "../components/UI/ChoiceCard";
import {
	buttonStyles,
	textStyles,
	scrollViewStyles,
} from "../constants/Styles";
import Colors from "../constants/Colors";

const getOneRandomNumber = choiceLength => {
	return Math.floor(Math.random() * choiceLength);
};

const getMultipleRandomNumbers = (numberOfChoicesToChoose, choiceLength) => {
	const randomNumbers = [];

	for (let i = 0; i < numberOfChoicesToChoose; i++) {
		let randomNumber = getOneRandomNumber(choiceLength);

		while (randomNumbers.includes(randomNumber)) {
			randomNumber = getOneRandomNumber(choiceLength);
		}

		randomNumbers.push(randomNumber);
	}

	return randomNumbers.sort();
};

const ResultsScreen = () => {
	const choiceContext = useContext(ChoiceContext);

	const randomNumbers = useState(
		getMultipleRandomNumbers(
			choiceContext.numberOfChoicesToChoose,
			choiceContext.choices.length
		)
	)[0];

	const pickedChoices = choiceContext.choices.filter((choice, index) =>
		randomNumbers.includes(index)
	);

	return (
		<View style={styles.mainContainer}>
			<Text style={{ ...textStyles.generic, ...styles.resultHeader }}>
				Stick with:
			</Text>
			<View style={styles.resultContainer}>
				<ScrollView
					contentContainerStyle={scrollViewStyles.scrollViewContainer}
				>
					{pickedChoices.map(choice => (
						<ChoiceCard key={choice.id} choice={choice} />
					))}
				</ScrollView>
				<View style={styles.buttonContainer}>
					<View style={buttonStyles.button}>
						<Button
							title="Again?"
							color={Colors.buttonCancel}
							onPress={choiceContext.onReset}
						/>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		alignItems: "center",
	},
	mainContainer: {
		flex: 1,
	},
	resultContainer: {
		flex: 1,
		justifyContent: "space-between",
		marginBottom: 50,
	},
	resultHeader: {
		marginVertical: 30,
	},
});

export default ResultsScreen;
