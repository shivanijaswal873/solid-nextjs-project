"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      aria-label="theme toggler"
      onClick={toggleTheme}
      className="bg-gray-2 dark:bg-dark-bg absolute right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full text-black dark:text-white lg:static"
    >
      <Image
        src="/images/icon/icon-moon.svg"
        alt="moon"
        width={21}
        height={21}
        className="dark:hidden"
      />

      <Image
        src="/images/icon/icon-sun.svg"
        alt="sun"
        width={22}
        height={22}
        className="hidden dark:block"
      />
    </button>
  );
};

export default ThemeToggler;