import React from "react";
import PropTypes from "prop-types";
import TitleText from "../TitleText";
import ChoiceCard from "../UI/ChoiceCard";
import { View, StyleSheet, ScrollView } from "react-native";

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
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		width: "100%",
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
	choices: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			text: PropTypes.string,
		})
	),
	onDelete: PropTypes.func,
};

export default EnteredChoices;
