import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	View,
	Text,
	StyleSheet,
	Button,
	ScrollView,
	Alert,
} from "react-native";
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
		setEnteredNumber(enteredValue.replace(/[^0-9]/g, ""));
	};

	const onConfirmHandler = () => {
		if (isNaN(enteredNumber) || !enteredNumber) {
			return Alert.alert("Whoops!", "Please enter a number", [
				{ text: "Okay", style: "cancel" },
			]);
		}

		if (parseInt(enteredNumber) >= props.choices.length) {
			return Alert.alert(
				"Whoops!",
				"Please put a number less than your total choices."
			);
		}

		if (parseInt(enteredNumber) === 0) {
			return Alert.alert("Whoops!", "Please put a number greater than 0.");
		}

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
				<TitleText
					style={scrollViewStyles.scrollViewHeader}
				>{`Choices (${props.choices.length})`}</TitleText>
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
