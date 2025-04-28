import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert("Kelipatan 10 tercapai 🎉");
    }
  }, [count]);

  return (
    <div className="bg-white dark:bg-blue-1 shadow-lg rounded-xl p-6 max-w-md mx-auto text-center mt-10">
      <h2 className="text-2xl font-bold mb-4 text-primary dark:text-light">Counter</h2>
      <div className="text-5xl font-extrabold text-blue-2 mb-6">{count}</div>
      <div className="flex justify-center flex-wrap gap-4">
        <button onClick={() => setCount(count + 1)} className="bg-blue-2 hover:bg-blue-3 text-white px-4 py-2 rounded-lg shadow">
          +
        </button>
        <button onClick={() => setCount(count - 1)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow">
          -
        </button>
        <button onClick={() => setCount(0)} className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg shadow">
          Reset
        </button>
      </div>
    </div>
  );
}
