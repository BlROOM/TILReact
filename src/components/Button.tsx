import { MouseEvent } from "react";
import styles from "./Button.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type TButtonProps = React.ComponentProps<"button"> & {
  type: "submit" | "button" | "reset";
  disabled: true | false; //boolean ;
  name: string;
  children: React.ReactNode;
};

export default function Button(props: TButtonProps) {
  const { children, ...resButtonProps } = props;
  // console.log(props);
  // login true=> 버튼에 Logout 텍스트가
  // login false => 버튼이 Login 텍스트가
  const login = false;
  const handler = () => (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event);
    alert("helloworld");
  };
  return (
    <form action="">
      {/* {login ? (
        // <button onClick={handler()} className={styles.button}>
        //   Logout
        // </button>
        <button
          onClick={handler()}
          className=".inter  bg-rose-500 border-none py-[15px] px-[32px] w-full h-22 cursor-pointer text-white text-center no-underLine inline-block text-[16px] my-[3px]"
        >
          Logout
        </button>
      ) : (
        <button className={styles.button} onClick={handler()}>
          Login{" "}
        </button>
      )} */}

      {/* {login ? (
        // <button onClick={handler()} className={styles.button}>
        //   Logout
        // </button>
        <CustomButton onClick={handler()} classNames>Logout</CustomButton>
      ) : (
        <CustomButton onClick={handler()}>Login </CustomButton>
      )} */}

      {login ? (
        // <button onClick={handler()} className={styles.button}>
        //   Logout
        // </button>
        // <button
        //   onClick={handler()}
        //   className={classNames(
        //     ".inter bg-blue-500  border-none py-[15px] px-[32px] w-full h-22 text-white text-center no-underLine inline-block text-[16px] my-[3px]",
        //     { " bg-rose-500 font-bold": login, "cursor-pointer": login }
        //   )}
        // >
        //   Logout
        // </button>
        <button
          // type={type}
          onClick={handler()}
          className={cx("btn")}
          // disabled={disabled}
          // name={name}
          {...resButtonProps}
        >
          {/* Logout */}
          {children}
        </button>
      ) : (
        <button
          onClick={handler()}
          // className={cx("button")}
          // name={name}
          // disabled={disabled}
          {...resButtonProps}
        >
          {/* Login */}
          {children}
        </button>
      )}
    </form>
  );
  // return <button onClick={handler()}>{login ? "Logout" : "Login"}</button>;
}
