import { useId } from "react";

type TCustomCheckBox = {
  children: React.ReactNode;
  onChange: (id : string) => void;

  checked: boolean;
  id: string;
};

const CustomCheckBox = ({ children, onChange, checked, id }: TCustomCheckBox) => {
  // const [checkValue, setCheckValue] = useState(false);
  // const random = Math.random.toString();
  const random = useId();
  return (
    <div className="flex items-center gap-x-2">
      <input
        type="checkbox"
        checked={checked}
        // onChange={() => setCheckValue(prev => !prev)}
        onChange={() => onChange(id)}
        className="w-[20px] h-[20px] appearance-none border rounded-md bg-white border-[#4F4F4F] checked:bg-gray-600 checked:border-0
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
