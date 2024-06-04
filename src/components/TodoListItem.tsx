import CustomCheckBox from "./CustomCheckBox";
import { Action, TTodo } from "../reducers/todoReducer";
import React, { useCallback, useMemo } from "react";
// bg-[rgba(53,56,62)]

type TTodoListItemProps = {
  todo: TTodo;
  dispatch: React.Dispatch<Action>;

  // handleCheckTodo: (id: string) => void;
  // handleDeleteTodo: (id: string) => void;
};
const TodoListItem = ({
  todo,
  dispatch,
}: // handleCheckTodo,
// handleDeleteTodo,
TTodoListItemProps) => {
  const { id, text, completed } = todo;
  console.log("render todolistitem");
  // const memoHandleCheckTodo = useMemo(() => completed, []);
  // const callbackHandleCheckTodo = useCallback(() => completed, []);
  // const memoHandleCheckTodo = useMemo(() => completed, []);
  // const callbackHandleDeleteTodo = useCallback(() => completed, []);
  return (
    <li
      className="flex justify-between w-[325px] h-[44px] box-border px-[15px] py-3 items-center align-middle  rounded-[8px] border border-[#4f4f4f]"
      style={{ backgroundColor: "rgba(53, 56, 62, 0.1)" }}
    >
      <CustomCheckBox
        checked={completed}
        onChange={() => dispatch({ type: "TOGGLE_TODO", payload: id })}
        id={id}
      >
        <span
          className={`${
            completed && "line-through"
          } text-[14px] h-[24px] font-medium text-center`}
        >
          {text}
        </span>
      </CustomCheckBox>
      <button
        type="button"
        onClick={() => dispatch({ type: "DELETE_TODO", payload: id })}
        className="w-6 h-6 rounded-md border p-1 border-[#4f4f4f] flex items-center align-middle justify-content"
        style={{ backgroundColor: "rgba(53, 56, 62, 0.1)" }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.50002 9.81827L12.9548 15.2731L14.7731 13.4548L9.31829 8L14.7731 2.54518L12.9548 0.726901L7.50002 6.18173L2.04519 0.726902L0.226918 2.54518L5.68174 8L0.226919 13.4548L2.04519 15.2731L7.50002 9.81827ZM7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
            fill="#4F4F4F"
          />
          <path
            d="M7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
            fill="#4F4F4F"
          />
        </svg>
      </button>
    </li>
  );
};

export default React.memo(TodoListItem);
