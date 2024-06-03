import React from "react";
import CustomCheckBox from "./CustomCheckBox";
import { TTodo } from "../pages/Todo";
// bg-[rgba(53,56,62)]

type TTodoListItemProps = {
  todo: TTodo;
  // handleAddTodo: () => void;
};
const TodoListItem = ({ todo }: TTodoListItemProps) => {
  const { text, completed } = todo;
  return (
    <li className="flex justify-between px-[15px] py-3 items-center align-middle bg-white roundend-[4px] border border-[#4f4f4f]">
      <CustomCheckBox checked={completed}>
        <span className={`${completed && "line-through"}`}>{text}</span>
      </CustomCheckBox>
      <button className="w-6 h-6 bg-gray-600 rounded-md border border-[#4f4f4f] flex items-center align-middle justify-content">
        <svg
          width="15"
          height="16"
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

export default TodoListItem;
