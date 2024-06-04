// import { SetStateAction } from "react";
import Banner from "./Banner";
// type TNavBar = {
//   count: number;
//   setCount: React.Dispatch<SetStateAction<number>>;
// };

export default function NavBar() {
  // const [count, setCount] = useState(0);
  console.log("navbar component rendered");

  return (
    <>
      <h1>Nav bar count : </h1>
      <Banner />
    </>
  );
}
