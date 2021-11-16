// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';

export default function App() {
	const [enteredGoal, setEnteredGoal] = useState('');
	const [courseGoals, setCourseGoals] = useState([]);

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText)
	}

	const addGoalHandler = () => {
		setCourseGoals(currentGoals => [{ key: Math.random().toString(), value: enteredGoal},...currentGoals]);
	}

	return (
		<View style={styles.screen}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="course goal"
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<Button title="ADD" onPress={addGoalHandler}/>
			</View>
			<FlatList data={courseGoals} renderItem={itemData => (
				<View style={styles.listItem}><Text>{itemData.item.value}</Text></View>
			)}>
			</FlatList>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {padding: 50},
	inputContainer: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
	input: {width: '80%', borderColor: "black", borderWidth: 1, padding: 10},
	listItem: { padding: 10, marginVertical: 10, backgroundColor: '#ccc', borderWidth: 1, borderColor: 'black'}
});