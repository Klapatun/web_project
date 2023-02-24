import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const incriment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incriment} className={classes.btn}>
        incriment
      </button>
    </div>
  );
};
