import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-fuchsia-700 via-fuchsia-500 to-blue-500 text-white">
      <h1 className="text-5xl mb-4 text-white text-center">
        React <br /> Counter App
      </h1>

      <div className="text-center  rounded-md">
        <h1 className="text-3xl mb-4 rounded-full border-4 border-white  w-32 h-32 flex items-center justify-center">
          {count} <br />
          counts
        </h1>

        <section className="mx-auto mt-4">
          <button
            className="border-2 px-4 py-2 rounded-md mr-2 bg-cyan-500 shadow-lg shadow-cyan-500/50"
            onClick={increment}
          >
            +
          </button>
          <button
            className="border-2 px-4 py-2 rounded-md bg-cyan-500 shadow-lg shadow-cyan-500/50"
            onClick={decrement}
          >
            -
          </button>
        </section>
      </div>
    </div>
  );
};

export default Counter;
