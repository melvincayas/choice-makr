import React from "react";
import { Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const TitleText = props => {
	return (
		<Text style={{ ...styles.titleText, ...props.style }}>
			{props.children}
		</Text>
	);
};

const styles = StyleSheet.create({
	titleText: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
	},
});

TitleText.propTypes = {
	children: PropTypes.string,
	style: PropTypes.objectOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	),
};

export default TitleText;
