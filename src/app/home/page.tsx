"use client";
import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <button
        className="btn btn-neutral"
        onClick={handleDecrement}
        disabled={count === 0}
      >
        Kurangi
      </button>
      <h1>{count < 0 ? 0 : count}</h1>
      <button
        className="btn btn-accent"
        onClick={handleIncrement}
        disabled={count >= 10}
      >
        Tambah
      </button>
    </div>
  );
};

export default Home;
