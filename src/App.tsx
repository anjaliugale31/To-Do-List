import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import TaskInput from './components/TaskInput';
import TaskItemAll from './components/TaskItemAll';
interface Task {
  id: number;
  text: string;
  completed: boolean;
}
type ActionType =
  | { type: 'ADD_TASK'; text: string }
  | { type: 'TOGGLE_TASK'; id: number };

const taskReducer = (state: Task[], action: ActionType): Task[] => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        { id: state.length, text: action.text, completed: false },
      ];
    case 'TOGGLE_TASK':
      return state.map(task =>
        task.id === action.id
          ? { ...task, completed: !task.completed }
          : task
      );
    default:
      return state;
  }
};


function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [visibleTasks, setVisibleTasks] = React.useState<Task[]>([]);

  const addTask = (text: string) => {
    dispatch({ type: 'ADD_TASK', text });
  };
  const toggleTask = (id: number) => {
    dispatch({ type: 'TOGGLE_TASK', id });
  };
  useEffect(() => {
    setVisibleTasks(tasks);
  }, [tasks]);


  return (
    <StylingList>
      <h4 style={{ marginBottom: '20px' }}>To Do List</h4>
      <TaskInput addTask={addTask} />
      <TaskItemAll tasks={visibleTasks} toggleTask={toggleTask} />
    </StylingList>
  );
}

const StylingList = styled.div`
  padding: 40px;
  background-color: aliceblue;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

`;
export default App;
