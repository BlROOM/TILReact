import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

export type TTodo = {
  id: string;
  text: string;
  completed: boolean;
};

const Todo = () => {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const addTodo = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), text, completed: false },
    ]);
  };

  // Toggle

  // Delete

  return (
    <>
      <div className="w-[375px] bg-white py-10 px-6 text-[#4b4b4b]">
        <h1 className="text-xl font-bold mb-[10px]"> Todo Into App</h1>
        <p className="text-sm mb-5">Please enter your details to continue.</p>
        {/* 등록 */}
        <TodoEditor addTodo={addTodo} />
        {/* 리스트 */}
        <TodoList todos={todos} />
      </div>
    </>
  );
};
export default Todo;
