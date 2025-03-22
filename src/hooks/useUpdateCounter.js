import { useState } from "react";

export default function useUpdateCounter() {
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  };
  const Decrease = () => {
    setCount(count - 1);
  };

  return { count, Increase, Decrease };
}
