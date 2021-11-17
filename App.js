import React, {useState} from 'react';
import {FlatList, StyleSheet, View, Button} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);
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
			<Button title="添加目标" onPress={() => setIsAddMode(true)}/>
			<GoalInput onAddGoal={addGoalHandler} visible={isAddMode}/>
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
