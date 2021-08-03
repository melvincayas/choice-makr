import React from "react";
import TitleText from "../TitleText";
import ChoiceCard from "../ChoiceCard";
import { View, StyleSheet, ScrollView } from "react-native";

const EnteredChoices = props => {
	return (
		<View>
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
	scrollViewHeader: {
		textAlign: "center",
		marginBottom: 16,
	},
	scrollViewContainer: {
		alignItems: "center",
	},
});

export default EnteredChoices;
