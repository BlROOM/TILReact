// import React, { useState } from "react";
// import CustomCheckBox from "./CustomCheckBox";
import TodoListItem from "./TodoListItem";
import { Action } from "../reducers/todoReducer";
import React from "react";
import { TTodo } from "../context/TodoContext";
// import { useMemo } from "react";
type TTodoListProps = {
  todos: TTodo[];
  dispatch: React.Dispatch<Action>;
};
// handleCheckTodo: (id: string) => void;
// handleDeleteTodo: (id: string) => void;

const TodoList = ({
  todos,
  dispatch,
}: // handleCheckTodo,
// handleDeleteTodo,
TTodoListProps) => {
  console.log("render TodoList");

  // const memoTodos = useMemo(todos => todos, []);
  return (
    <ul className="flex flex-col gap-4 mt-4">
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          dispatch={dispatch}
          // handleCheckTodo={handleCheckTodo}
          // handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default React.memo(TodoList);
