import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import ChoiceCard from "../components/UI/ChoiceCard";
import { buttonStyles, textStyles } from "../constants/Styles";
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

const ResultsScreen = props => {
	const randomNumbers = useState(
		getMultipleRandomNumbers(
			props.numberOfChoicesToChoose,
			props.choices.length
		)
	)[0];

	const pickedChoices = props.choices.filter((choice, index) =>
		randomNumbers.includes(index)
	);

	return (
		<View style={styles.mainContainer}>
			<Text style={{ ...textStyles.generic, ...styles.resultHeader }}>
				Stick with:
			</Text>
			<View style={styles.resultContainer}>
				<ScrollView contentContainerStyle={styles.scrollViewContainer}>
					{pickedChoices.map(choice => (
						<ChoiceCard key={choice.id} choice={choice} />
					))}
				</ScrollView>
				<View style={styles.buttonContainer}>
					<View style={buttonStyles.button}>
						<Button
							title="Again?"
							color={Colors.buttonCancel}
							onPress={props.onReset}
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
		justifyContent: "space-between",
		flex: 1,
		marginBottom: 50,
	},
	resultHeader: {
		marginVertical: 30,
	},
	scrollViewContainer: {
		alignItems: "center",
		width: "100%",
	},
});

ResultsScreen.propTypes = {
	choices: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			text: PropTypes.text,
		})
	),
	numberOfChoicesToChoose: PropTypes.number,
	onReset: PropTypes.func,
};

export default ResultsScreen;
