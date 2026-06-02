import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-2 right-20 z-50 px-7 py-6 rounded-full
                 bg-purple-700/10 backdrop-blur-md border border-pink-500/20"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}