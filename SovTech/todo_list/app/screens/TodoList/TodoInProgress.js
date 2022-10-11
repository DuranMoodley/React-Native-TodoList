// External imports.
import React,{useState,useEffect} from "react";
import { View , Text , Share} from "react-native";
import { FloatingAction } from "react-native-floating-action";

// Component. 
import {actionCreators} from '../../redux/reducers/todoListReducer';
import List from '../../components/List';
import Input from '../../components/Input';

// Redux store.
import store from '../../redux/store/store';

const TodoList = () => {
 
  // Retrieve and create state values. 
  const [state, setState] = useState({});
  const {todos} = store.getState();

  // Set floating action button properties. 
  const actions = [
    {
      text: "share",
      icon: require("../../../assets/share.png"),
      name: "bt_share",
      position: 1
    }
  ]
  
  useEffect(() => {
  
    // Initialize todo list into state.
    setState({todos});

    return () => {
      unsubscribe();
    };
  }, []);

  convertJsonToNormalText = (todos) =>{

    // Convert the original todo list into a readable string that is shared.
    let normaltext = '';

    // Loop through each todo item and concatenate a new string value.
    todos.forEach(element => {

      let completed = '';

      if(element.completed){
        completed = '( Completed )';
      }
      else{
        completed = '( In Progress ) ';
      }

      // Append the elements from the original list into a new string.
      normaltext += element.text + '\t' + completed + '\n';
    });

    return normaltext;
  }

  getInProgress = (todos) => {
    // Only display the in progress todo list items on this screen.
    return todos.filter(todo => !todo.completed);
  }

  onAddTodo = (text) => {
    // Set new todo item into todo list. 
    let todoItem = {text:text,completed:false};
    store.dispatch(actionCreators.add(todoItem))
  }

  onRemoveTodo = (item) => {
    // Delete todo item from list.
    store.dispatch(actionCreators.remove(item))
  }

  onToggleTodo = (item) => {
    // Allow user to set todo task as completed or reset to not completed.
    store.dispatch(actionCreators.toggle(item))
  }
  
  shareTodoList = () => {
    // Here is the Share API, call the convert json function to return a readable string to be shared.
    Share.share({
      title: 'Todo List',
      message: convertJsonToNormalText(todos)
    }).then((res) => console.log(res))
      .catch((error) => console.log(error))
  }

  unsubscribe = store.subscribe(() => {
    const {todos} = store.getState()
    setState({todos})
  }) 

  return (
    <View style={{flex:1}}>
      <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={onAddTodo}
        />
        <List
          list={getInProgress(todos)}
          onPressItem={onRemoveTodo}
          setToggleCheckBox={onToggleTodo}
        />
        <Text style={{color:'gray',fontSize:12,alignSelf:'center',position:'absolute',bottom:5}}>Swipe left or right for further options</Text>
         <FloatingAction
          actions={actions}
          onPressItem={name => {
            console.log(`selected button: ${name}`);
            if(name === 'bt_share'){
              shareTodoList();
            }
          }}
        />
    </View>
  );
};

export default TodoList;
