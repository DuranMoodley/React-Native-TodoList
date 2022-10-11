// The types of actions that you can dispatch to modify the state of the store
export const types = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
    TOGGLE_TODO:'TOGGLE_TODO'
  }

  // Helper functions to dispatch actions, optionally with payloads
  export const actionCreators = {
    add: item => {
      return { type: types.ADD, payload: item }
    },
    remove: item => {
      return { type: types.REMOVE, payload: item }
    },
    toggle: item => {
        return { type: types.TOGGLE_TODO, payload: item }
      },
  }

  // Initial state of the store
  const initialState = {
    todos: [],
  }

  // Function to handle actions and update the state of the store.
  export const reducer = (state = initialState, action) => {
    const { todos } = state
    const { type, payload } = action
  switch (type) {
      case types.ADD: {
        return {
          ...state,
          todos: [payload, ...todos],
        }
      }
      case types.REMOVE: {
        return {
          ...state,
          todos: todos.filter((todo) => todo.text !== payload.text)
        }
      }
      case types.TOGGLE_TODO:
        return {
            ...state,
            todos:  state.todos.map(item =>(item.text !== payload.text ? item: {...item, completed: !payload.completed }))
        }
    }
    return state;
  }