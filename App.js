import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
    setEnteredGoalText('');
  };
  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      const updatedCourseGoals = [...currentCourseGoals];
      updatedCourseGoals.splice(id, 1);
      return updatedCourseGoals;

    });
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder="Insira uma tarefa"  onChangeText={goalInputHandler} value={enteredGoalText} />
        <Button title='Inserir' onPress={addGoalHandler} /> 
      </View>
      <View style={styles.goalsContainer}>
      {courseGoals.map((goal, index) =>
        <View key={index} style={{ padding: 8, marginVertical: 4, backgroundColor: '#ccc', borderRadius: 6 }}>
          <Text>{goal}</Text>
          <Button title="Delete" onPress={() => deleteGoalHandler(index)} />
        </View>
      )}
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 6,
  }
});
