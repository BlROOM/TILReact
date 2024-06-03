import React from "react";

type TInputProprs = React.ComponentProps<"input">;

const Input = ({ ...restProps }: TInputProprs) => {
  return (
    <input
      {...restProps}
      className="w-[325px] h-11 border border-[#4f4f4f] rounded-lg px-4 py-[13.5px] text-sm placeholder: text-[#acacac]"
    />
  );
};

export default Input;
