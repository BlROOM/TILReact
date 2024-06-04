import React, {
  createContext,
  ReactNode,
  useMemo,
  // SetStateAction,
  useReducer,
} from "react";
import { Action, reducer } from "../reducers/todoReducer";

type TodoContextType = {
  todos: TTodo[];
  // setTodos: React.Dispatch<SetStateAction<TTodo[]>>;
  dispatch: React.Dispatch<Action>;
};

export type TTodo = {
  id: string;
  text: string;
  completed: boolean;
};

const getDefaultState = () => {
  return [
    {
      id: "1",
      text: "test",
      completed: false,
    },
    {
      id: "2",
      text: "test",
      completed: false,
    },
    {
      id: "3",
      text: "test",
      completed: false,
    },
  ];
};
export const TodoContext = createContext<TodoContextType>({
  todos: [],
  dispatch: () => {},
});
const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, dispatch] = useReducer(reducer, getDefaultState());
  // const todos = useMemo(() => data, [data]);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
