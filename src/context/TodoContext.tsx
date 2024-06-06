import React, {
  createContext,
  ReactNode,
  useEffect,
  // SetStateAction,
  useReducer,
} from "react";
import { Action, reducer } from "../reducers/todoReducer";
import axios from "axios";
import {
  axiosAddTodo,
  axiosDeleteTodo,
  axiosToggleTodo,
} from "../axios/todoApi";

type TodoContextType = {
  todos: TTodo[];
  // setTodos: React.Dispatch<SetStateAction<TTodo[]>>;
  dispatch: React.Dispatch<Action>;
  todoDeleteDispatch: (id: string) => void;
  todoAddDispatch: (text: string) => void;
  todoToggleDispatch: (id: string) => void;
};

export type TTodo = {
  id: string;
  text: string;
  completed: boolean;
};
const serverUrl = "http://localhost:4000/todos";
export const TodoContext = createContext<TodoContextType>({
  todos: [],
  dispatch: () => {},
  todoAddDispatch: () => {},
  todoDeleteDispatch: () => {},
  todoToggleDispatch: () => {},
});
const TodoProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(serverUrl, {});
        console.log(response.data, "response");
        // dispatch({ type: "SET_TODO", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const todoDeleteDispatch = async (id: string) => {
    const response = await axiosDeleteTodo(id);
    if (response?.status === 204) {
      dispatch({ type: "DELETE_TODO", payload: id });
    }
  };
  const todoAddDispatch = async (text: string) => {
    const response = await axiosAddTodo(text);
    if (response?.status === 200) {
      dispatch({
        type: "ADD_TODO",
        payload: response?.data,
      });
    }
  };

  const todoToggleDispatch = async (id: string) => {
    const response = await axiosToggleTodo(id);
    console.log(response, "toggle response");
    if (response?.status === 204) {
      dispatch({
        type: "TOGGLE_TODO",
        payload: id,
      });
    }
  };
  const [todos, dispatch] = useReducer(reducer, []);
  return (
    <TodoContext.Provider
      value={{
        todos,
        dispatch,
        todoDeleteDispatch,
        todoAddDispatch,
        todoToggleDispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
