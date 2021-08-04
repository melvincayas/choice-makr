import React from "react";
import PropTypes from "prop-types";
import TitleText from "../TitleText";
import ChoiceCard from "../ChoiceCard";
import { View, StyleSheet, ScrollView, Button } from "react-native";
import Colors from "../../constants/Colors";

const EnteredChoices = props => {
	return (
		<View style={styles.mainContainer}>
			<TitleText style={styles.scrollViewHeader}>Choices</TitleText>
			<ScrollView contentContainerStyle={styles.scrollViewContainer}>
				{props.choices.map(choice => (
					<ChoiceCard
						key={choice.id}
						choice={choice}
						onDelete={props.onDelete}
					/>
				))}
			</ScrollView>
			<View style={styles.buttonContainer}>
				<View style={styles.button}>
					<Button title="Continue" />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		borderColor: Colors.black,
		borderWidth: 1,
		width: "30%",
	},
	buttonContainer: {
		alignItems: "center",
	},
	scrollViewContainer: {
		alignItems: "center",
	},
	scrollViewHeader: {
		marginBottom: 16,
		textAlign: "center",
	},
});

EnteredChoices.propTypes = {
	choices: PropTypes.arrayOf(PropTypes.string),
	onDelete: PropTypes.func,
};

export default EnteredChoices;
