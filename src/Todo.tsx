import CustomInput from "./components/CustomInput";
import CustomBtn from "./components/CustomBtn";

const Todo = () => {
  return (
    <div className="flex justify-between gap-5 items-center">
      <CustomInput placeholder="Enter Todo List" />
      {/* <CustomBtn backgroudColor="#4f4f4f" textColor="white">
        Add
      </CustomBtn> */}
      <CustomBtn
        style={{ backgroundColor: "#4f4f4f", color: "white", width: "77px" }}
      >
        Add
      </CustomBtn>
    </div>
  );
};

export default Todo;
