import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CardGrid from "./components/CardGrid";
import Counter from "./components/Counter";

export default function App() {
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-primary text-white text-3xl font-bold animate-pulse">
        Loading Dhafin's App...
      </div>
    );
  }

  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white min-h-screen">
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 pt-20 pb-10">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setDark(!dark)}
              className="bg-white dark:bg-gray-800 text-primary dark:text-white border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-full shadow hover:scale-105 transition"
            >
              {dark ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>

          <section className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold mb-2">TP SBD MODUL 9 DHAFIN HAMIZAN SETIAWAN</h1>
          </section>

          <CardGrid />
          <Counter />
        </main>

        <footer className="text-center text-sm text-gray-500 py-6">
          © {new Date().getFullYear()} Dhafin Hamizan Setiawan 2306267145
        </footer>
      </div>
    </div>
  );
}
