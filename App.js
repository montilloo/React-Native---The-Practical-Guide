import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);

	const addGoalHandler = enteredGoal => {
		setCourseGoals(currentGoals => [{id: Math.random().toString(), value: enteredGoal}, ...currentGoals]);
	}

	return (
		<View style={styles.screen}>
			<GoalInput onAddGoal={addGoalHandler}/>
			<FlatList data={courseGoals} keyExtractor={(item) => item.id} renderItem={itemData => (
				<GoalItem title={itemData.item.value} onDelete={() => console.log('Does that work?')}/>
			)}>
			</FlatList>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {padding: 50}
});
