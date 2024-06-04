import { TCountAction } from "../App3";

type TExample1Props = {
  count: number;
  // setCount: (count: number) => void;
  // setCount: React.Dispatch<React.SetStateAction<number>>;
  dispatch: React.Dispatch<TCountAction>;
};

const Example1 = ({ count, dispatch }: TExample1Props) => {
  // const [num, setNum] = useState(0);

  return (
    <>
      <h1>Example1 Component : {count}</h1>
      <button onClick={() => dispatch({ type: "increase", payload: 10 })}>
        10증가
      </button>
    </>
  );
};

export default Example1;
