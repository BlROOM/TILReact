import { ChangeEvent, useState } from "react";
import LoginBox from "../components/LoginBox";
import SignUpBox from "../components/SignUpBox";

const AssignBox = () => {
  const [action, setAction] = useState<"Login" | "Sign">("Login");
  const [isValid, setIsValid] = useState(true);
  const handleClickLogin = () => {
    if (!agree) return alert("사용자 동의 박스를 체크해주세요.");
    if (!login.email.includes("@"))
      return alert("이메일 형식으로 입력해주세요.");

    if (login.email.trim().length === 0 || login.password.trim().length === 0)
      return alert("공백 문자를 입력할 수 없어요.");
    if (action === "Login") {
      setIsValid(false);
      alert(`사용자의 이메일은: ${login.email}
        사용자의 이메일은: ${login.password}`);
    }
  };

  const handleClickSignUp = () => {
    if (!agree) return alert("사용자 동의 박스를 체크해주세요.");
    if (!sign.email.includes("@"))
      return alert("이메일 형식으로 입력해주세요.");
    if (
      sign.email.trim().length === 0 ||
      sign.name.trim().length === 0 ||
      sign.password.trim().length === 0
    )
      return alert("공백 문자를 입력할 수 없어요.");
    if (action === "Sign") {
      setIsValid(false);
      alert(`사용자의 이메일은: ${login.email}
        사용자의 이메일은: ${login.password}`);
    }
  };

  const handleClickRoute = () => {
    setAction(action === "Login" ? "Sign" : "Login");

    setLogin({
      email: "",
      password: "",
    });

    setSign({
      name: "",
      email: "",
      password: "",
    });
  };
  const [agree, setAgree] = useState(false);
  const [sign, setSign] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const onChangeLogin = () => (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setLogin(prevLogin => ({
      ...prevLogin,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onChangeSign = () => (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSign(prevLogin => ({
      ...prevLogin,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onChangeAgree = () => (e: ChangeEvent<HTMLInputElement>) => {
    setAgree(e.target.checked);
  };

  const SignUpinputSeciontData = [
    {
      id: "1",
      name: "name",
      placeholder: "Enter Your Name",
      type: "text",
    },
    {
      id: "2",
      name: "email",
      placeholder: "someone@example.com",
      type: "text",
    },
    {
      id: "3",
      name: "password",
      placeholder: "Enter Password",
      type: "password",
    },
  ];

  const SignUpBtnSectionData = [
    {
      id: "1",
      text: "Sign in",
      style: { backgroundColor: "#4F4F4F", color: "#F5F5F5" },
    },
    {
      id: "2",
      text: "Go to Log in",
      valid: false,
      style: {
        backgroundColor: "#F5F5F5",
        color: "#4F4F4F",
        border: "1px solid #4F4F4F",
      },
    },
  ];

  const LoginInputSeciontData = [
    {
      id: "1",
      name: "email",
      placeholder: "someone@example.com",
      type: "text",
    },
    {
      id: "2",
      name: "password",
      placeholder: "Enter Password",
      type: "password",
    },
  ];

  const LoginBtnSectionData = [
    {
      id: "1",
      text: "Login in",
      style: { backgroundColor: "#4F4F4F", color: "#F5F5F5" },
    },
    {
      id: "2",
      text: "Go to Sign in",
      valid: false,
      style: {
        backgroundColor: "#F5F5F5",
        color: "#4F4F4F",
        border: "1px solid #4F4F4F",
      },
    },
  ];

  return (
    <main className="flex gap-14">
      {action === "Login" ? (
        <LoginBox
          inputSectionData={LoginInputSeciontData}
          btnSectionData={LoginBtnSectionData}
          onClickAction={handleClickLogin}
          onClickRoute={handleClickRoute}
          onChange={onChangeLogin}
          onChangeAgree={onChangeAgree}
          agree={agree}
          login={login}
          isValid={isValid}
        />
      ) : (
        <SignUpBox
          inputSectionData={SignUpinputSeciontData}
          btnSectionData={SignUpBtnSectionData}
          onClickAction={handleClickSignUp}
          onClickRoute={handleClickRoute}
          onChange={onChangeSign}
          onChangeAgree={onChangeAgree}
          agree={agree}
          sign={sign}
          isValid={isValid}
        />
      )}

      {/* css 상속을 이용해 부모 text color로 #4b4b4b */}
      {/* <div className="w-[375px] bg-white py-10 px-6 border text-[#4b4b4b]">
        <p className="mb-1 text-xl font-bold ">Sign Into App</p>
        <p className="mb-5 text-sm">Please enter your details to continue.</p>
        <form action="" className="flex flex-col gap-4">
          <Input type="text" placeholder="Enter Your Name" required />
          <Input type="email" placeholder="someone@example.com" required />
          <Input type="password" placeholder="Enter Password" required />
          <CheckBox />
          <span>
            I agree with <em className="not-italic">policies</em>
          </span>
        </form>
      </div> */}
    </main>
  );
};

export default AssignBox;
