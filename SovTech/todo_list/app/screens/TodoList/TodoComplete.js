// External Imports. 
import React,{ useState,useEffect } from "react";
import { View } from "react-native";

// Components
import List from '../../components/List';

// Redux store
import store from '../../redux/store/store';

const TodoCompleted = () => {

   // Retrieve and create state values. 
  const [state, setState] = useState({})
  const {todos} = store.getState();
  
  getCompleted = (todos) => {

    // Retrieve the completed todo list items only.
    return todos.filter(todo => todo.completed);
  }

  useEffect(() => {
   
    setState({todos});

    return () => {
      unsubscribe();
    };
  }, []);

  unsubscribe = store.subscribe(() => {
    const {todos} = store.getState();
    setState({todos})
  }) 

  return (
    <View>
        <List
          list={getCompleted(todos)}
          onPressItem={onRemoveTodo}
          setToggleCheckBox={onToggleTodo}
        />
    </View>
  );
};

export default TodoCompleted;
