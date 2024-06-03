// import React, { useState } from "react";
// import CustomCheckBox from "./CustomCheckBox";
import TodoListItem from "./TodoListItem";
import { TTodo } from "../pages/Todo";
type TTodoListProps = {
  todos: TTodo[];
  handleCheckTodo:(id:string) => void;
  handleDeleteTodo:(id:string) => void;
};
const TodoList = ({ todos, handleCheckTodo, handleDeleteTodo }: TTodoListProps) => {
  return (
    <ul className="flex flex-col gap-4 mt-4">
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          handleCheckTodo={handleCheckTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
