import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import TitleText from "../UI/TitleText";
import ChoiceCard from "../UI/ChoiceCard";
import { scrollViewStyles } from "../../constants/Styles";

const EnteredChoices = props => {
	return (
		<View style={styles.mainContainer}>
			<TitleText style={styles.scrollViewHeader}>Choices</TitleText>
			<ScrollView contentContainerStyle={scrollViewStyles.scrollViewContainer}>
				{props.choices.map(choice => (
					<TouchableOpacity
						key={choice.id}
						style={styles.opacityContainer}
						onPress={() => props.onDelete(choice.id)}
					>
						<ChoiceCard key={choice.id} choice={choice} />
					</TouchableOpacity>
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
	opacityContainer: {
		alignItems: "center",
		width: "100%",
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
