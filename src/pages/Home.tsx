import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() =>{ 
  },[tasks])
  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task 
    const data = {
      id: Number(new Date().getTime()),
      title: newTaskTitle,
      done: false
    }
    setTasks(oldData => [...oldData,data]);

  }

  function handleToggleTaskDone(id: number) { 
    //TODO - toggle task done if exists
    const updatedTasks = tasks.map(task => ({...task})); 
    const foundTask = updatedTasks.find(item => item.id === id);
    if(!foundTask)
      return; 
    foundTask.done = !foundTask.done;
    setTasks(updatedTasks); 
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})