"use client"

import { useEffect, useState } from "react";

const CounterUp = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;

    const counterUp = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = Math.min(target * (progress / duration), target);

      setCount(Math.floor(increment));

      if (progress < duration) {
        window.requestAnimationFrame(counterUp);
      } else {
        setCount(target); // Ensure the counter reaches the exact target
      }
    };

    window.requestAnimationFrame(counterUp);
  }, [target, duration]);

  return <span>{count}</span>;
};

export default CounterUp;
