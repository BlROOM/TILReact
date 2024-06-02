import LoginBox from "../components/LoginBox";
import SignUpBox from "../components/SignUpBox";

const AssignBox = () => {
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
      style: {
        backgroundColor: "#F5F5F5",
        color: "#4F4F4F",
        border: "1px solid #4F4F4F",
      },
    },
  ];

  return (
    <main className="flex gap-14">
      <SignUpBox
        inputSectionData={SignUpinputSeciontData}
        btnSectionData={SignUpBtnSectionData}
      />
      <LoginBox
        inputSectionData={LoginInputSeciontData}
        btnSectionData={LoginBtnSectionData}
      />
    </main>
  );
};

export default AssignBox;
