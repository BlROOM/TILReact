import CustomBtn from "./CustomBtn";
import CustomInput from "./CustomInput";
import CustomCheckBox from "./CustomCheckBox";
import { btnSectionData, inputSectionData } from "../types/Signup";
import { ChangeEvent } from "react";

type TSignupInputState = {
  name: string;
  email: string;
  password: string;
};

type TSignUpBoxProps = {
  inputSectionData: inputSectionData[];
  btnSectionData: btnSectionData[];
  onClickAction: () => void;
  onClickRoute: () => void;
  onChange: () => (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeAgree: () => (e: ChangeEvent<HTMLInputElement>) => void;
  sign: TSignupInputState;
  agree: boolean;
  isValid: boolean;
};

const SignUpBox = ({
  inputSectionData,
  btnSectionData,
  onClickAction,
  onClickRoute,
  onChange,
  sign,
  isValid,
  agree,
  onChangeAgree,
}: TSignUpBoxProps) => {
  return (
    <section className="flex flex-col border-2 rounded-lg w-[380px] h-[500px] px-5 py-10 box-border">
      <div className="flex flex-col gap-y-2">
        <h1 className="font-bold text-[#4F4F4F] text-xl h-[28px]">
          Sign Into App
        </h1>
        <h4 className="text-[#4F4F4F] text-sm h-[20px]">
          Please enter your details to continue.
        </h4>
      </div>
      <form action="" className="flex flex-col gap-4 mt-5">
        {inputSectionData.map(data => (
          <CustomInput
            key={data.id}
            {...data}
            onChange={onChange}
            value={sign[data.name as keyof typeof sign]}
            name={data.name}
          />
        ))}
        <CustomCheckBox checked={agree} onChange={onChangeAgree}>
          I agree with <strong>terms</strong> and <strong>policies.</strong>
        </CustomCheckBox>
        {btnSectionData.map(data => (
          <CustomBtn
            isValid={data.valid ? data.valid : isValid}
            key={data.id}
            onClick={
              data.text === "Go to Log in" ? onClickRoute : onClickAction
            }
            {...data}
          />
        ))}
      </form>
    </section>
  );
};

export default SignUpBox;
