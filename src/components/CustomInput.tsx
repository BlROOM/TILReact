import { ChangeEvent } from "react";
import { UseFormRegister } from "react-hook-form";
import { FormInput } from "../pages/Todo";

type TCustomInputProps = React.ComponentProps<"input"> & {
  placeholder: string;
  inputType?: string;
  id?: string;
  type: string;
  name: string;
  value: string;
  onChange: () => (e: ChangeEvent<HTMLInputElement>) => void;
  // register: UseFormRegister<FormInput>;
};

const CustomInput = ({
  id,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}: // register,
TCustomInputProps) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className="bg-white border w-[325px] h-[44px] border-[#4f4f4f] rounded-[5px] p-4 border-box text-base font-medium placeholder-primary"
      onChange={onChange()}
      required
      // {...register("text", {
      //   required: "필수 값입니다.",
      //   minLength: {
      //     value: 7,
      //     message: "최소 7자 이상 입력해 주세요.",
      //   },
      // })}
    />
  );
};

export default CustomInput;
