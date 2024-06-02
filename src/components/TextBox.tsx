import { useRef, useState } from "react";

const TextBox = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const clickHandler = () => {
    console.log(inputRef);
    if (value.trim() === "") {
      alert("값을 입력해주세요");
      inputRef?.current?.focus();
      return;
    }
  };
  return (
    <div>
      <form action="">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
        />
        <button type="submit" onClick={clickHandler}>
          {" "}
          클릭
        </button>
      </form>
    </div>
  );
};

export default TextBox;
