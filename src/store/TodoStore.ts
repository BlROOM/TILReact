import { create } from "zustand";
import {
  axiosAddTodo,
  axiosDeleteTodo,
  axiosGetTodo,
  axiosToggleTodo,
} from "../axios/todoApi";

// zustand 상태관리
// create 함수를 통해서 전역 컴포넌트에서 가져다가 사용가능하다
type TodoStoreType = {
  todos: TTodo[];
  // setTodos: React.Dispatch<SetStateAction<TTodo[]>>;
  // delete: (id: string) => void;
  // toggle: (id: string) => void;
  // add: (todo: TTodo) => void;
  // getTodos: () => void;
  loading: boolean;
  getTodos: () => Promise<void>;
  addTodo: (text: string) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  toggleTodo: (id: string) => Promise<void>;
};

export type TTodo = {
  id: string;
  text: string;
  completed: boolean;
};

export const useTodoStore = create<TodoStoreType>(set => ({
  // zustand 에서 사용되는 set함수에서
  // 콜백을 통해 들어오는 인자는
  // 항상 자신의 최신 상태값을 참조한다.
  todos: [],
  loading: false,
  getTodos: async () => {
    set({ loading: true });
    try {
      const response = await axiosGetTodo();
      set({ todos: response?.data, loading: false });
    } catch (error) {
      console.log(error);
      set({ loading: false });
    }
  },
  deleteTodo: async id => {
    set({ loading: true });
    try {
      const response = await axiosDeleteTodo(id);
      if (response?.status === 204) {
        set(state => ({
          todos: state.todos.filter(todo => todo.id !== id),
          loading: false,
        }));
      }
    } catch (error) {
      console.log(error);
      set({ loading: false });
    }
  },
  toggleTodo: async id => {
    set({ loading: true });

    try {
      const response = await axiosToggleTodo(id);
      if (response?.status === 204) {
        set(state => ({
          todos: state.todos.map(todo =>
            todo.id === id
              ? { ...todo, completed: !todo.completed }
              : { ...todo }
          ),
          loading: false,
        }));
      }
    } catch (error) {
      console.log(error);
      set({ loading: false });
    }
  },
  addTodo: async text => {
    set({ loading: true });

    try {
      const rseponse = await axiosAddTodo(text);
      if (rseponse?.status === 200) {
        set(state => ({
          todos: [...state.todos, rseponse?.data],
          loading: false,
        }));
      }
    } catch (error) {
      console.log(error);
      set({ loading: false });
    }
  },
}));
