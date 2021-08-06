import React, { useContext } from "react";
import { ChoiceContext } from "../store/ChoicesProvider";
import PropTypes from "prop-types";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import TitleText from "../UI/TitleText";
import ChoiceCard from "../UI/ChoiceCard";
import { scrollViewStyles } from "../../constants/Styles";

const EnteredChoices = () => {
	const choiceContext = useContext(ChoiceContext);

	return (
		<View style={styles.mainContainer}>
			<TitleText
				style={scrollViewStyles.scrollViewHeader}
			>{`Choices (${choiceContext.choices.length})`}</TitleText>
			<ScrollView contentContainerStyle={scrollViewStyles.scrollViewContainer}>
				{choiceContext.choices.map(choice => (
					<TouchableOpacity
						key={choice.id}
						style={styles.opacityContainer}
						onPress={() => choiceContext.onDelete(choice.id)}
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
