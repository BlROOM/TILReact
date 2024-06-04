import { v4 } from "uuid";
import { TTodo } from "../components/TodoExam";

export type Action = {
  payload: string;
  type: "ADD_TODO" | "DELETE_TODO" | "TOGGLE_TODO";
};

export const reducer: React.Reducer<TTodo[], Action> = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: v4(),
          text: action.payload,
          completed: false,
        },
      ];
    case "DELETE_TODO":
      return [...state.filter(todo => todo.id !== action.payload)];
    case "TOGGLE_TODO": {
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
