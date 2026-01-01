import { useTheme } from "@/contexts/ThemeContext";
import "./theme-switch.css";

const ThemeSwitch = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <label className="switch">
        <input type="checkbox" disabled />
        <span className="slider">
          <div className="star star_1"></div>
          <div className="star star_2"></div>
          <div className="star star_3"></div>
          <svg viewBox="0 0 16 16" className="cloud cloud_1">
            <path
              fill="#fff"
              d="M7.5 3.5a3.5 3.5 0 0 0-3.4 2.6A2.8 2.8 0 0 0 1 8.9c0 1.6 1.2 2.9 2.8 2.9h8.4c1.5 0 2.8-1.2 2.8-2.7a2.7 2.7 0 0 0-2.6-2.7 3.9 3.9 0 0 0-3.7-2.9z"
            />
          </svg>
        </span>
      </label>
    );
  }

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        aria-label="Toggle dark mode"
      />
      <span className="slider">
        <div className="star star_1"></div>
        <div className="star star_2"></div>
        <div className="star star_3"></div>

        <svg viewBox="0 0 16 16" className="cloud cloud_1">
          <path
            fill="#fff"
            d="M7.5 3.5a3.5 3.5 0 0 0-3.4 2.6A2.8 2.8 0 0 0 1 8.9c0 1.6 1.2 2.9 2.8 2.9h8.4c1.5 0 2.8-1.2 2.8-2.7a2.7 2.7 0 0 0-2.6-2.7 3.9 3.9 0 0 0-3.7-2.9z"
          />
        </svg>
      </span>
    </label>
  );
};

export default ThemeSwitch;
