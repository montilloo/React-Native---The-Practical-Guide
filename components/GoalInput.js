import React, {useState} from "react";
import {Button, Modal, StyleSheet, TextInput, View} from "react-native";

const GoalInput = props => {
	const [enteredGoal, setEnteredGoal] = useState('');

	const goalInputHandler = enteredText => {
		setEnteredGoal(enteredText)
	}

	const goalAddHandler = () => {
		props.onAddGoal(enteredGoal);
		setEnteredGoal('');
	}

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="课程目标"
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title='取消' onPress={props.onCancelAdditional}/>
					</View>
					<View style={styles.button}>
						<Button title="添加" onPress={goalAddHandler}/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
	input: {width: '80%', borderColor: "black", borderWidth: 1, padding: 10},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: '60%'
	},
	button: {
		width: '40%'
	}
});

export default GoalInput;