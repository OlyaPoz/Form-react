import React, { useState } from 'react';
import TaskForm from '../../components/forms/TaskForm';
import TaskList from '../../components/TaskList';
import TaskHeader from '../../components/TaskHeader';

const ToDoPage = props => {
  const [todoArray, setTodoArray] = useState([
    {
      id: Date.now(),
      body: 'Create a new task',
      isDone: false,
      createdAt: new Date(),
    },
  ]);

  const addTask = values => {
    const newTodo = {
      body: values.todoBody,
      id: Date.now(),
      isDone: false,
    };
    setTodoArray([...todoArray, newTodo]);
  };

  const deleteTask = id => {
    const filteredTodos = todoArray.filter(
      currentTask => currentTask.id !== id
    );
    setTodoArray(filteredTodos);
  };

  return (
    <div>
      <TaskHeader />
      <TaskForm onSubmit={addTask} />
      <TaskList todos={todoArray} deleteTask={deleteTask} />
    </div>
  );
};

export default ToDoPage;
