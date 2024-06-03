type TCustomBtnProps = React.ComponentProps<"button"> & {
  children?: React.ReactNode;
  style: {
    backgroundColor: string;
    color: string;
    width?: string;
    border?: string;
  };
  text?: string;
  onClick: (text?: string) => void;
  isValid: boolean;
};

const CustomBtn = ({
  text,
  onClick,
  isValid,
  children,
  ...restProps
}: TCustomBtnProps) => {
  const { style } = restProps;
  console.log(isValid, "isValid");
  return (
    <button
      {...restProps}
      style={style}
      className={
        "flex items-center justify-center px-5 py-4 text-center text-white bg-primary font-inter rounded-md h-[44px] box-border disabled:bg-gray-500 disabled:cursor-not-allowed"
      }
      onClick={onClick}
      disabled={isValid}
    >
      {text}
      {children}
    </button>
  );
};

export default CustomBtn;
