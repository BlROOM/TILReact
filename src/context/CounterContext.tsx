import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
type CountContextType = {
  count: number;
  setCount: React.Dispatch<SetStateAction<number>>;
};
export const CountContext = createContext<CountContextType>({
  count: 0,
  setCount: () => {},
});
const CounterProvier = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

export default CounterProvier;
