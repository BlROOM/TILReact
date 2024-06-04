import React, { useState } from "react";
import { TCountAction } from "../App3";

type TExample2Props = {
  count: number;
  // setCount: (count: number) => void;
  // setCount: React.Dispatch<React.SetStateAction<number>>;
  dispatch: React.Dispatch<TCountAction>;
};

const Example2 = ({ count, dispatch }: TExample2Props) => {
  const [num, setNum] = useState(0);

  return (
    <>
      <h1>Example2 Component : {count}</h1>
      <button onClick={() => dispatch({ type: "minus", payload: 10 })}>
        10감소
      </button>
    </>
  );
};

export default Example2;
