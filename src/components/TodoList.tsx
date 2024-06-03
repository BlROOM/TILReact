// import React, { useState } from "react";
// import CustomCheckBox from "./CustomCheckBox";
import TodoListItem from "./TodoListItem";
import { TTodo } from "../pages/Todo";
type TTodoListProps = {
  todos: TTodo[];
};
const TodoList = ({ todos }: TTodoListProps) => {
  return (
    <ul className="flex flex-col gap-4 mt-4">
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          // handleAddTodo={handleAddTodo}
        ></TodoListItem>
      ))}
    </ul>
  );
};

export default TodoList;
