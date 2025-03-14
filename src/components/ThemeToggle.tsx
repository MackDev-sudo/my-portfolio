import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "../utils/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <SunIcon className="w-5 h-5" />;
      case "dark":
        return <MoonIcon className="w-5 h-5" />;
      case "system":
        return <ComputerDesktopIcon className="w-5 h-5" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case "light":
        return "Light";
      case "dark":
        return "Dark";
      case "system":
        return "System";
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 rounded-lg flex items-center space-x-2 hover:bg-theme-bg-secondary-light dark:hover:bg-theme-bg-secondary-dark transition-all duration-200"
      aria-label="Toggle theme"
    >
      <span className="text-theme-secondary-light dark:text-theme-secondary-dark">
        {getIcon()}
      </span>
      <span className="text-sm font-medium text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
        {getLabel()}
      </span>
    </button>
  );
}
