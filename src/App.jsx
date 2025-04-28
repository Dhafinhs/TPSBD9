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
      <div className="flex items-center justify-center h-screen bg-primary text-light text-3xl font-bold animate-pulse">
        Loading Dhafin's App...
      </div>
    );
  }

  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-light dark:bg-primary text-primary dark:text-white min-h-screen">
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 pt-20 pb-10">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setDark(!dark)}
              className="bg-white dark:bg-blue-1 text-primary dark:text-white border border-gray-300 dark:border-blue-3 px-4 py-2 rounded-full shadow hover:scale-105 transition"
            >
              {dark ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>

          <section className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold mb-2">Welcome to Dhafin’s Gallery</h1>
            <p className="text-blue-1 dark:text-blue-3">Scroll down and interact ✨</p>
          </section>

          <CardGrid />
          <Counter />
        </main>

        <footer className="text-center text-sm text-blue-1 dark:text-blue-2 py-6">
          © {new Date().getFullYear()} Dhafin’s Frontend Showcase
        </footer>
      </div>
    </div>
  );
}
