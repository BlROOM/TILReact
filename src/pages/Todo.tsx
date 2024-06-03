import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomBtn from "../components/CustomBtn";
import TodoList from "../components/TodoList";
import { v4 } from "uuid";

export type TTodo = {
  id: string;
  text: string;
  completed: boolean;
};
const Todo = () => {
  const uuId = v4();
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
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
  ]);

  const handleAddTodo = (text: string) => {
    setTodos(prevTodos => {
      return [
        ...prevTodos,
        {
          // id: prevTodos.length + 1,
          id: uuId,
          text,
          completed: false,
        },
      ];
    });
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim().length === 0 )
      return alert("공백 문자를 입력할 수 없어요.");
    handleAddTodo(text);
    setText("");
  };

  const onCheckTodoHandelr  = (id: string) => {
    const findTodoIDX = todos.findIndex((todo) => todo.id === id);
        if (findTodoIDX !== -1) {
        const updatedTodo = {
          ...todos[findTodoIDX],
          completed: !todos[findTodoIDX].completed
        };
        const updatedTodos = [...todos];
        updatedTodos[findTodoIDX] = updatedTodo;
        setTodos(updatedTodos);
      }
  }

  const onDeleteTodoHandelr  = (id: string) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    // const findTodoIDX = todos.findIndex((todo) => todo.id === id);
    // console.log(findTodoIDX, '뭐야', todos.splice(findTodoIDX, 1))
        // if (findTodoIDX !== -1) {
        // todos.splice(findTodoIDX, 1); 
        // const updatedTodos = [...todos];
      // }
      setTodos(updatedTodos);

  }


  return (
    <section className="gap-y-2 flex flex-col border-2 rounded-lg w-[380px] h-full px-5 py-10 box-border">
      <h1 className="font-bold text-[#4F4F4F] text-xl h-[28px]">
        Todo List App      
      </h1>
      <h4 className="text-[#4F4F4F] text-sm h-[20px]">
        Please enter your details to continue.    
      </h4>
      <form
        action=""
        className="flex flex-col gap-4 mt-5"
        onSubmit={onSubmitHandler}
      >
        <div className="flex gap-2">
          <CustomInput
            onChange={() => e => {
              setText(e.target.value);
            }}
            type="text"
            placeholder="Enter Todo List"
            value={text}
            name="Todo"
          />
          <CustomBtn
            isValid={false}
            type="submit"
            text="Add"
            style={{ backgroundColor: "#4F4F4F", color: "#F5F5F5" }}
          />
        </div>
        <TodoList todos={todos}  handleCheckTodo={onCheckTodoHandelr} handleDeleteTodo={onDeleteTodoHandelr}/>
      </form>
    </section>
  );
};

export default Todo;
