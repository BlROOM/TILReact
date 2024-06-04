import { useReducer } from "react";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     default:
//       throw new Error();
//   }
// }

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//       <button onClick={() => dispatch({type: 'increment'})}>+</button>
//     </>
//   );
// }
export type TCountAction = {
  payload: number;
  type: string;
};
const reducer = (state: number, action: TCountAction) => {
  console.log(state, action);
  // useRedcuer에 매개변수로 들어갈 콜백함수
  // 상태관리 로직
  // action안에있는 type이라는 속성값을 이용해
  // state 값을 다룬다
  // action.payload 로 값을다룸
  switch (action.type) {
    case "increase":
      return state + action.payload;
    case "minus":
      return state - action.payload;
  }
  return state;
};
const App = () => {
  // const [count, setCount] = useState(0);
  // useRedcuer에 두번째 인자가 state를 이미한다.
  //const [state, dispatch] = useReducer(reducer, initialArg, init);

  const [state, dispatch] = useReducer(reducer, 0);
  // dispatch를 호출하게되면 reducer함수가(useReducer함수에 첫번째 매개변수) 호출됨!
  // useReducer 에 두번째 매개변수는 초기값
  return (
    <>
      {/* <h1>State : {state}</h1>
      <button onClick={() => dispatch({ type: "add", payload: 100 })}>
        디스패치
      </button> */}
      <Example1 count={state} dispatch={dispatch} />
      <Example2 count={state} dispatch={dispatch} />
    </>
  );
};

export default App;
