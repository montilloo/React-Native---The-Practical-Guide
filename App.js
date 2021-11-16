import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);

	const addGoalHandler = enteredGoal => {
		setCourseGoals(currentGoals => [{id: Math.random().toString(), value: enteredGoal}, ...currentGoals]);
	}

	const removeGoalHandler = goalId => {
		setCourseGoals(currentGoals => {
			return currentGoals.filter(goal => goal.id !== goalId);
		})
	}
	return (
		<View style={styles.screen}>
			<GoalInput onAddGoal={addGoalHandler}/>
			<FlatList data={courseGoals} keyExtractor={(item) => item.id} renderItem={itemData => (
				<GoalItem title={itemData.item.value} onDelete={removeGoalHandler.bind(this, itemData.item.id)}/>
			)}>
			</FlatList>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {padding: 50}
});
