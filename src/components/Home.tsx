// import { useContext } from "react";
import { CountContext } from "../context/CounterContext";

// type THome = {
//   count: number;
//   setCount?: () => void;
// };

const Home = () => {
  console.log("home component rendered");

  // const context = useContext(CountContext);
  return <h1>home component count : </h1>;
};

export default Home;
