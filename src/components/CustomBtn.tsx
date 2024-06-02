type TCustomBtnProps = React.ComponentProps<"button"> & {
  children?: React.ReactNode;
  style: {
    backgroundColor: string;
    color: string;
    width?: string;
    border?: string;
  };
  text?: string;
  onClick?: () => void;
};

const CustomBtn = ({ text, children, ...restProps }: TCustomBtnProps) => {
  console.log(restProps, "restStyleProps");
  const { style } = restProps;
  return (
    <button
      className={
        "flex items-center justify-center px-5 py-4 text-center text-white bg-primary font-inter rounded-md h-[44px] box-border"
      }
      {...restProps}
      style={style}
    >
      {text}
      {children}
    </button>
  );
};

export default CustomBtn;
