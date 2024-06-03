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
    handleAddTodo(text);
    setText("");
  };
  return (
    <section className="gap-y-2 flex flex-col border-2 rounded-lg w-[380px] h-full px-5 py-10 box-border">
      <h1 className="font-bold text-[#4F4F4F] text-xl h-[28px]">
        Login into App
      </h1>
      <h4 className="text-[#4F4F4F] text-sm h-[20px]">
        Please enter your details to continue.
      </h4>
      <form
        action=""
        className="flex flex-col gap-4 mt-5"
        onSubmit={onSubmitHandler}
      >
        <CustomInput
          // {...data}
          onChange={() => e => {
            setText(e.target.value);
          }}
          type="text"
          placeholder=""
          value={text}
          name={"name"}
        />
        <CustomBtn
          isValid={false}
          onClick={handleAddTodo}
          text="Add"
          style={{ backgroundColor: "#4F4F4F", color: "#F5F5F5" }}
        />

        <TodoList todos={todos} />
      </form>
    </section>
  );
};

export default Todo;
