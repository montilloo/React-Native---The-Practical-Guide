import React, {useState} from "react";
import {Button, TextInput, View, StyleSheet} from "react-native";

const GoalInput = props => {
	const [enteredGoal, setEnteredGoal] = useState('');

	const goalInputHandler = enteredText => {
		setEnteredGoal(enteredText)
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.input}
				placeholder="course goal"
				onChangeText={goalInputHandler}
				value={enteredGoal}
			/>
			<Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)}/>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
	input: {width: '80%', borderColor: "black", borderWidth: 1, padding: 10}
});

export default GoalInput;