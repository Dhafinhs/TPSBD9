import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert("Kelipatan 10 tercapai 🎉");
    }
  }, [count]);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 max-w-md mx-auto text-center mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Counter</h2>
      <div className="text-5xl font-extrabold text-primary mb-6">{count}</div>
      <div className="flex justify-center flex-wrap gap-4">
        <button onClick={() => setCount(count + 1)} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          +
        </button>
        <button onClick={() => setCount(count - 1)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
          -
        </button>
        <button onClick={() => setCount(0)} className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition">
          Reset
        </button>
      </div>
    </div>
  );
}
