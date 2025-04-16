import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Счётчик:{count}</h1>
      <button onClick={increment}>Инкреметн</button>
      <button onClick={decrement}>Декремент</button>
    </div>
  );
};

export default Counter;
