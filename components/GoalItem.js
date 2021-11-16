import React from "react";
import {StyleSheet, Text, View} from "react-native";

const GoalItem = props => {
	return (
		<View style={styles.listItem}><Text>{props.title}</Text></View>
	);
}

const styles = StyleSheet.create({
	listItem: {padding: 10, marginVertical: 10, backgroundColor: '#ccc', borderWidth: 1, borderColor: 'black'}
})
export default GoalItem;