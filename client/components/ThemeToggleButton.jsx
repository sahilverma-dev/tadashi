import { useTheme } from "next-themes";

import { FiSun as LightIcon, FiMoon as DarkIcon } from "react-icons/fi";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-9 h-9 mr-3 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg flex items-center justify-center transition-all duration-200 ease-in-out"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <LightIcon /> : <DarkIcon />}
    </button>
  );
};

export default ThemeToggleButton;
