import { useContext } from "react";
import { CountContext } from "../context/CounterContext";

// type TBanner = {
//   count: number;
//   setCount: React.Dispatch<SetStateAction<number>>;
// };

const Banner = () => {
  const context = useContext(CountContext);
  console.log(context, "count");
  console.log("banner component rendered");
  //   const [count, setCount] = useState(0);

  return (
    <>
      <h1>home component count :{context.count}</h1>
      <button onClick={() => context.setCount(prev => prev + 1)}>클릭</button>
    </>
  );
};

export default Banner;
