import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import ChoiceCard from "../components/UI/ChoiceCard";
import UserInput from "../components/UI/UserInput";
import TitleText from "../components/UI/TitleText";
import {
	buttonStyles,
	textStyles,
	scrollViewStyles,
} from "../constants/Styles";
import Colors from "../constants/Colors";

const NumberOfChoicesScreen = props => {
	const [enteredNumber, setEnteredNumber] = useState(null);

	const onChangeTextHandler = enteredValue => {
		setEnteredNumber(enteredValue);
	};

	const onConfirmHandler = () => {
		props.onConfirm(enteredNumber);
	};

	return (
		<View style={styles.container}>
			<Text style={textStyles.generic}>
				How many choices do you need to pick?
			</Text>
			<UserInput
				keyboardType="number-pad"
				enteredValue={enteredNumber}
				onChangeTextHandler={onChangeTextHandler}
				style={styles.userInput}
			/>
			<View style={styles.buttonContainer}>
				<View style={buttonStyles.button}>
					<Button
						title="RESET"
						color={Colors.buttonCancel}
						onPress={props.onReset}
					/>
				</View>
				<View style={buttonStyles.button}>
					<Button
						title="RESULTS"
						color={Colors.buttonSuccess}
						onPress={onConfirmHandler}
					/>
				</View>
			</View>
			<View style={styles.choiceContainer}>
				<TitleText style={scrollViewStyles.scrollViewHeader}>Choices</TitleText>
				<ScrollView
					contentContainerStyle={scrollViewStyles.scrollViewContainer}
				>
					{props.choices.map(choice => (
						<ChoiceCard key={choice.id} choice={choice} />
					))}
				</ScrollView>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		marginBottom: 30,
	},
	container: {
		marginTop: 30,
	},
	userInput: {
		textAlign: "center",
		width: "25%",
	},
});

NumberOfChoicesScreen.propTypes = {
	choices: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			text: PropTypes.text,
		})
	),
	onConfirm: PropTypes.func,
	onReset: PropTypes.func,
};

export default NumberOfChoicesScreen;
