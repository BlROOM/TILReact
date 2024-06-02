import CustomBtn from "./CustomBtn";
import CustomInput from "./CustomInput";
import CustomCheckBox from "./CustomCheckBox";
import { inputSectionData, btnSectionData } from "../types/Signup";

// backgroundColor : #4F4F4F , FFFFFF
// font-size : 14px
// font-weight: medium
// font-color : #F5F5F5, #4F4F4F
// border-color:
type TLoginBoxProps = {
  inputSectionData: inputSectionData[];
  btnSectionData: btnSectionData[];
};
const LoginBox = ({ inputSectionData, btnSectionData }: TLoginBoxProps) => {
  // const inputSeciontData = [
  //   {
  //     id: "1",
  //     name: "name",
  //     placeholder: "Enter Your Name",
  //     type: "text",
  //   },
  //   {
  //     id: "2",
  //     name: "email",
  //     placeholder: "someone@example.com",
  //     type: "text",
  //   },
  //   {
  //     id: "3",
  //     name: "password",
  //     placeholder: "Enter Password",
  //     type: "password",
  //   },
  // ];

  // const btnSectionData = [
  //   {
  //     id: "1",
  //     text: "Sign in",
  //     style: { backgroundColor: "#4F4F4F", color: "#F5F5F5" },
  //   },
  //   {
  //     id: "2",
  //     text: "Go to Long in",
  //     style: {
  //       backgroundColor: "#F5F5F5",
  //       color: "#4F4F4F",
  //       border: "1px solid #4F4F4F",
  //     },
  //   },
  // ];
  return (
    <section className="flex flex-col border-2 rounded-lg w-[380px] h-[500px] px-5 py-10 box-border">
      <section className="flex flex-col gap-y-3">
        <h1 className="font-bold text-[#4F4F4F] text-xl h-[28px]">
          Login into App
        </h1>
        <h4 className="text-[#4F4F4F] text-sm h-[20px]">
          Please enter your details to continue.
        </h4>
      </section>
      <section className="flex flex-col gap-4 mt-5">
        {inputSectionData.map(data => (
          <CustomInput key={data.id} {...data} />
        ))}
        <CustomCheckBox>
          I agree with <strong>terms</strong> and <strong>policies.</strong>
        </CustomCheckBox>
        {btnSectionData.map(data => (
          <CustomBtn key={data.id} {...data} />
        ))}
      </section>
    </section>
  );
};

export default LoginBox;