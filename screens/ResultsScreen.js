import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

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
		<View>
			{pickedChoices.map(choice => (
				<Text key={choice.id}>{choice.text}</Text>
			))}
		</View>
	);
};

ResultsScreen.propTypes = {
	choices: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			text: PropTypes.text,
		})
	),
	numberOfChoicesToChoose: PropTypes.number,
};

export default ResultsScreen;
