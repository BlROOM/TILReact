// export 키워드는 함수를 외부로 내보내는 역할
// 함수의 내용을 내보는건 아님!
// import Button from "./components/Button";
import { ChangeEvent, useState } from "react";
// import CustomBtn from "./components/CustomBtn";
// import CustomInput from "./components/CustomInput";
// import NavBar from "./components/Navbar";
import "./index.css";
import AssignBox from "./pages/AssignPage";
import Todo from "./pages/Todo";
// import CheckBox from "./components/CheckBox";
// import TextBox from "./components/TextBox";
// import Todo from "./Todo";

export default function App() {
  const [textValue, setTextValue] = useState("");
  const onChangeTextVlaue = () => (e: ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };
  const [selectValue, setSelectValue] = useState("");
  const [checkValue, setCheckValue] = useState(false);
  const onChangeSelectValue = () => (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };
  // const [count, setCount] = useState<number>(0);
  // const clickHandler = () => {
  //   setCount(prev => prev + 1);
  // };
  return (
    // <React.Fragment>
    // 컴포넌트는 무조건 상위 태그로 감싸줘야하며 React에서 Fragment라는 빈 박스를 지원해줌
    // <></>을 통해 사용
    // 컴포넌트는 무조건 단방향 위에서 아래로 흐른다.
    //
    <div className="flex flex-col gap-5">
      {/* <AssignBox /> */}
      <Todo />
      {/* <NavBar />
      <Button type={type} disabled={true} name="login-btn">
        login
      </Button>
      <Button type={type} disabled={false} name="login-btn">
        Logout
      </Button> */}
      {/* <CustomBtn backgroudColor="#4f4f4f" textColor="white">
        Add
      </CustomBtn>
      <CustomBtn backgroudColor="#ed4848" textColor="white">
        Cancle
      </CustomBtn>
      <CustomBtn backgroudColor="#7d48ed" textColor="white">
        Success
      </CustomBtn> */}
      {/* <h1> count : {count}</h1>
        <CustomBtn
          onClick={clickHandler}
          style={{
            backgroundColor: "#4f4f4f",
            color: "#fff",
            width: "100px",
          }}
        >
          count up
        </CustomBtn> */}
      {/* <input type="text" value={textValue} onChange={onChangeTextVlaue()} /> */}
      {/* <select
          name=""
          id=""
          value={selectValue}
          onChange={onChangeSelectValue()}
        >
          <option key={selectValue}>apple</option>
          <option key={selectValue}>banana</option>
          <option key={selectValue}>orange</option>
        </select>
        <input
          type="checkbox"
          // value={textValue}
          checked={checkValue}
          onChange={e => setCheckValue(prev => !prev)}
        />
        <label htmlFor="">필수 약관 동의</label> */}
      {/* <CheckBox /> */}
      {/* <CheckBox /> */}
      {/* <TextBox /> */}
      {/* <CustomBtn
        style={{
          backgroundColor: "#4f4f4f",
          color: "white",
          width: "77px",
        }}
      >
        Add
      </CustomBtn>
      <CustomBtn
        style={{
          backgroundColor: "#ED4848",
          color: "white",
          width: "77px",
        }}
      >
        Cancle
      </CustomBtn>
      <CustomBtn
        style={{
          backgroundColor: "#7D48ED",
          color: "white",
          width: "77px",
        }}
      >
        Success
      </CustomBtn> */}
      {/* <CustomInput placeholder={"Enter Todo List"} /> */}
    </div>
  );
}
