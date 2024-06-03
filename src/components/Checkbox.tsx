type TCheckBox = React.ComponentProps<"input">;

const CheckBox = ({ ...restProps }): TCheckBox => {
  return (
    <div
      className="flex items-center [& >input:checked+label:before]:content-['✔']
    [& >input:checked+label:before]:text-white: [&>input:checked+label:before] items-center"
    >
      <input
        type="checkbox"
        {...restProps}
        className="rounded-[5px]"
        id="chk"
      />
      <label
        htmlFor="chk"
        className="w-5 h-5 inline-block rounded-[5px] bg-[#4f4f4f]  border border-[#4f4f4f]"
      ></label>
    </div>
  );
};

export default CheckBox;
