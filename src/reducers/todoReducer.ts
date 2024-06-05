import { TTodo } from "../components/TodoExam";

export type Action =
  | {
      payload: string;
      type: "DELETE_TODO" | "TOGGLE_TODO";
    }
  | {
      payload: TTodo;
      type: "ADD_TODO";
    }
  | {
      payload: TTodo[];
      type: "SET_TODO";
    };

export const reducer: React.Reducer<TTodo[], Action> = (state, action) => {
  // console.log(state, action);
  switch (action.type) {
    case "SET_TODO":
      // console.log("settodo", state, action.payload);
      return [...action.payload];
    case "ADD_TODO": {
      console.log("addTodo", action.payload);
      return [...state, action.payload];
    }
    case "DELETE_TODO": {
      return [...state.filter(todo => todo.id !== action.payload)];
    }
    case "TOGGLE_TODO": {
      // console.log(response, "response");
      const findTodoIDX = state.findIndex(todo => todo.id === action.payload);
      const updatedTodo = {
        ...state[findTodoIDX],
        completed: !state[findTodoIDX].completed,
      };
      const updatedTodos = [...state];
      updatedTodos[findTodoIDX] = updatedTodo;
      return updatedTodos;
    }
    default:
      return state;
  }
};
