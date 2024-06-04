import React, { useContext, useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomBtn from "../components/CustomBtn";
import TodoList from "../components/TodoList";
import { TodoContext } from "../context/TodoContext";
// import { getDefaultState, reducer } from "../reducers/todoReducer";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { SubmitHandler, useForm } from "react-hook-form";

export type FormInput = {
  text: string;
  // textConfirm: string;
};

const Todo = () => {
  // const {
  //   register,
  //   watch,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormInput>();
  const [text, setText] = useState("");

  // const [todos, dispatch] = useReducer(reducer, getDefaultState());
  const { todos, dispatch } = useContext(TodoContext);

  // const handleAddTodo = (text: string) => {
  //   // console.log("uuid", uuId);
  //   setTodos(prevTodos => {
  //     return [
  //       ...prevTodos,
  //       {
  //         // id: prevTodos.length + 1,
  //         id: uuId,
  //         text,
  //         completed: false,
  //       },
  //     ];
  //   });
  // };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // alert(text.trim().length);
    if (text.trim().length === 0) return alert("공백 문자를 입력할 수 없어요.");
    dispatch({ type: "ADD_TODO", payload: text.trim() });
    setText("");
  };

  // const onSubmitHandler: SubmitHandler<{ text: string }> = () => {
  //   // e.preventDefault();
  //   if (text.trim().length === 0) return alert("공백 문자를 입력할 수 없어요.");
  //   alert(`현재 문자 : ${JSON.stringify(text)}`);
  //   handleAddTodo(text);
  //   setText("");
  // };

  // const onCheckTodoHandelr = useCallback(
  //   (id: string) => {
  //     const findTodoIDX = todos.findIndex(todo => todo.id === id);
  //     if (findTodoIDX !== -1) {
  //       const updatedTodo = {
  //         ...todos[findTodoIDX],
  //         completed: !todos[findTodoIDX].completed,
  //       };
  //       const updatedTodos = [...todos];
  //       updatedTodos[findTodoIDX] = updatedTodo;
  //       setTodos(updatedTodos);
  //     }
  //   },
  //   [todos]
  // );

  // const onDeleteTodoHandelr = useCallback(
  //   (id: string) => {
  //     const updatedTodos = todos.filter(todo => todo.id !== id);
  //     setTodos(updatedTodos);
  //   },
  //   [todos]
  // );

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
        onSubmit={
          // handleSubmit(onSubmitHandler);
          onSubmitHandler
        }
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
            // register={register}
          />
          <CustomBtn
            isValid={false}
            type="submit"
            text="Add"
            style={{ backgroundColor: "#4F4F4F", color: "#F5F5F5" }}
          />
        </div>
        {/* <TodoList
          todos={todos}
          handleCheckTodo={onCheckTodoHandelr}
          handleDeleteTodo={onDeleteTodoHandelr}
        /> */}
        <TodoList todos={todos} dispatch={dispatch} />
      </form>
    </section>
  );
};

export default Todo;
