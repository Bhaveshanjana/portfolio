import React, { useEffect } from "react";
import { GoSun } from "react-icons/go";
import { RxMoon } from "react-icons/rx";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div className="translate-y-[1.8px]">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="cursor-pointer rounded-full text-white transition-all duration-200 hover:text-blue-600"
      >
        {theme === "dark" ?  <GoSun size={18}/> : <RxMoon size={18} />}
      </button>
    </div>
  );
};

export default DarkMode;
