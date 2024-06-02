import { useId, useState } from "react";

type TCustomCheckBox = {
  children: React.ReactNode;
};

const CustomCheckBox = ({ children }: TCustomCheckBox) => {
  const [checkValue, setCheckValue] = useState(false);
  // const random = Math.random.toString();
  const random = useId();
  return (
    <div className="flex items-center mb-5 align-middle gap-x-2">
      <input
        type="checkbox"
        checked={checkValue}
        onChange={() => setCheckValue(prev => !prev)}
        className="w-[20px] h-[20px] appearance-none border rounded-md border-[#4F4F4F] checked:bg-gray-600 ack checked:border-0
        checked:bg-[url('/images/checkBox.png')] bg-no-repeat bg-center bg-contain
        "
      />
      <label htmlFor={random} className="text-sm">
        {children}
      </label>
    </div>
  );
};

export default CustomCheckBox;
