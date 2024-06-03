import CustomBtn from "./CustomBtn";
import CustomInput from "./CustomInput";
import CustomCheckBox from "./CustomCheckBox";
import { inputSectionData, btnSectionData } from "../types/Signup";
import { ChangeEvent } from "react";

type TLoginInputState = {
  email: string;
  password: string;
};

type TLoginBoxProps = {
  inputSectionData: inputSectionData[];
  btnSectionData: btnSectionData[];
  agree: boolean;
  isValid: boolean;
  login: TLoginInputState;
  onClickAction: () => void;
  onClickRoute: () => void;
  onChange: () => (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeAgree: () => (e: ChangeEvent<HTMLInputElement>) => void;
};
const LoginBox = ({
  inputSectionData,
  btnSectionData,
  onClickAction,
  onClickRoute,
  onChange,
  onChangeAgree,
  agree,
  login,
  isValid,
}: TLoginBoxProps) => {
  return (
    <section className="flex flex-col border-2 rounded-lg w-[380px] h-[500px] px-5 py-10 box-border">
      <section className="flex flex-col gap-y-2">
        <h1 className="font-bold text-[#4F4F4F] text-xl h-[28px]">
          Login into App
        </h1>
        <h4 className="text-[#4F4F4F] text-sm h-[20px]">
          Please enter your details to continue.
        </h4>
      </section>
      <section>
        <form
          action=""
          className="flex flex-col gap-4 mt-5"
          onSubmit={e => {
            e.preventDefault();
            console.log(e);
          }}
        >
          {inputSectionData.map(data => (
            <CustomInput
              key={data.id}
              {...data}
              onChange={onChange}
              value={login[data.name as keyof typeof login]}
              name={data.name}
            />
          ))}
          <CustomCheckBox onChange={onChangeAgree} checked={agree}>
            I agree with <strong>terms</strong> and <strong>policies.</strong>
          </CustomCheckBox>
          {btnSectionData.map(data => (
            <CustomBtn
              isValid={data.valid ? data.valid : isValid}
              key={data.id}
              {...data}
              onClick={
                data.text === "Go to Sign in" ? onClickRoute : onClickAction
              }
            />
          ))}
        </form>
      </section>
    </section>
  );
};

export default LoginBox;
