import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

const ResultsScreen = props => {
	return (
		<View>
			<Text>You're going to select {props.number} choices</Text>
		</View>
	);
};

ResultsScreen.propTypes = {
	number: PropTypes.number,
};

export default ResultsScreen;
