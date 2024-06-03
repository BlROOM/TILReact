import { ChangeEvent } from "react";

type TCustomInputProps = React.ComponentProps<"input"> & {
  placeholder: string;
  inputType?: string;
  id?: string;
  type: string;
  name: string;
  value: string;
  onChange: () => (e: ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput = ({
  id,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}: TCustomInputProps) => {
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
    />
  );
};

export default CustomInput;
