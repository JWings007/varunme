import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const tRef = useRef();

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleMouseEnter = (event) => {
      const cursorElement = document.querySelector(".cursor");

      if (cursorElement) {
        gsap.to(cursorElement, {
          scale: 0,
        });
        cursorElement.style.mixBlendMode = "screen";
      }
    };

    const handleMouseLeave = (event) => {
      const cursorElement = document.querySelector(".cursor");

      if (cursorElement) {
        gsap.to(cursorElement, {
          scale: 1,
        });
        cursorElement.style.mixBlendMode = "normal";
      }
    };

    if (tRef.current) {
      tRef.current.addEventListener("mouseenter", handleMouseEnter);
      tRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (tRef.current) {
        tRef.current.removeEventListener("mouseenter", handleMouseEnter);
        tRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-between pt-14 px-40 sm:px-16 xs:px-7 sm:pt-10">
      <div className="flex items-center justify-center gap-5">
        <h1
          className="font-semibold text-2xl cursor-pointer dark:text-white"
          onClick={() => {
            navigate("/");
            window.location.reload();
          }}
        >
          Varun.
        </h1>
        <div className="toggle-container" ref={tRef}>
          <input
            type="checkbox"
            id="toggleButton"
            className="toggle-input"
            checked={theme === "dark"}
            onChange={handleThemeToggle}
          />
          <label
            htmlFor="toggleButton"
            className="toggle-label dark:bg-[#585858] dark:before:bg-[#acacac] before:bg-[#666666]"
          ></label>
        </div>
      </div>
      <div className="flex items-center justify-center text-[#cccccc] gap-10">
        <a
          href="/"
          className={`${
            location.pathname === "/"
              ? "text-black dark:text-white dark:after:bg-white font-bold after:content-[''] after:h-1 after:w-full after:absolute relative after:-top-full after:bg-black after:left-0"
              : ""
          }`}
        >
          Projects
        </a>
        <a
          href="/about"
          className={`${
            location.pathname === "/about"
              ? "text-black dark:text-white dark:after:bg-white font-bold after:content-[''] after:h-1 after:w-full after:absolute relative after:-top-full after:bg-black after:left-0"
              : ""
          }`}
        >
          About
        </a>
      </div>
    </div>
  );
}

export default Navbar;
