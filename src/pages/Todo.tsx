// import React, { useContext, useEffect, useState } from "react";
import React, { useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomBtn from "../components/CustomBtn";
import TodoList from "../components/TodoList";
// import { TodoContext } from "../context/TodoContext";
import { useTodoStore } from "../store/TodoStore";
// import { TTodo } from "../components/TodoExam";
// import { axiosAddTodo } from "../axios/todoApi";
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
  const { getTodos, addTodo, todos, loading } = useTodoStore(state => state);
  useEffect(() => {
    getTodos();
  }, [getTodos]);
  console.log(todos, "todos");
  // const [todos, dispatch] = useReducer(reducer, getDefaultState());
  // const {
  //   todos,
  //   // dispatch,
  //   todoAddDispatch,
  // } = useContext(TodoContext);

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

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim().length === 0) return alert("공백 문자를 입력할 수 없어요.");
    // 현재 api 통신 이후 성공했다면 newTodo 값을 가져와 dispatch의 인자로 호출
    // 1. api 통신 이후 성공했다면 새롭게 추가된 todo 값을 response값으로 받아옴
    // 2. 프론트에서 상태변화를 위한 reducer의 dispatch의 받아온 todo 값 인자로 호출
    // const response = await axiosAddTodo(text);
    // if (response?.status === 200) {
    //   dispatch({
    //     type: "ADD_TODO",
    //     payload: response?.data,
    //   });
    // }
    // todoAddDispatch(text);
    addTodo(text);
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
  if (loading) {
    return <h1>로딩 중입니다</h1>;
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
        {/* <TodoList todos={todos} dispatch={dispatch} /> */}
        <TodoList todos={todos} />
      </form>
    </section>
  );
};

export default Todo;
