// export 키워드는 함수를 외부로 내보내는 역할
// 함수의 내용을 내보는건 아님!
// import Button from "./components/Button";
// import { ChangeEvent, useState } from "react";
// import CustomBtn from "./components/CustomBtn";
// import CustomInput from "./components/CustomInput";
// import NavBar from "./components/Navbar";
// import TodoProvider from "./context/TodoContext";
import "./index.css";
import Todo from "./pages/Todo";
// import AssignBox from "./pages/AssignPage";
// import Todo from "./pages/Todo";
// import CheckBox from "./components/CheckBox";
// import TextBox from "./components/TextBox";
// import Todo from "./Todo";

export default function App() {
  return (
    // <React.Fragment>
    // 컴포넌트는 무조건 상위 태그로 감싸줘야하며 React에서 Fragment라는 빈 박스를 지원해줌
    // <></>을 통해 사용
    // 컴포넌트는 무조건 단방향 위에서 아래로 흐른다.
    <div className="flex flex-col gap-5">
      {/* <TodoProvider> */}
      <Todo />
      {/* </TodoProvider> */}
    </div>
  );
}
