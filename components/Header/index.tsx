"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "@/types/menu";
import ThemeToggler from "./ThemeToggler";
import { getMenu } from "@/sanity/lib/getMenu";

const Header = () => {
  const [menuData, setMenuData] = useState<Menu[]>([]);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  useEffect(() => {
    async function loadMenu() {
      const data = await getMenu();
      setMenuData(data);
    }
    loadMenu();
  }, []);

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  }, []);

  const headerSettings = menuData.find(
    (item) => item?.logoLight || item?.logoDark
  );

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-7 ${
        stickyMenu
          ? "bg-white py-4 shadow-sm transition duration-100 dark:bg-black"
          : ""
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">

        <div className="flex w-full items-center justify-between xl:w-1/4">

          <Link href="/">

            {headerSettings?.logoDark?.asset?.url && (
              <Image
                src={headerSettings.logoDark.asset.url}
                alt="logo"
                width={119}
                height={30}
                className="hidden w-full dark:block"
              />
            )}

            {headerSettings?.logoLight?.asset?.url && (
              <Image
                src={headerSettings.logoLight.asset.url}
                alt="logo"
                width={119}
                height={30}
                className="w-full dark:hidden"
              />
            )}

          </Link>

          <button
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            ☰
          </button>

        </div>

        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "navbar visible mt-4 h-auto rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection"
          }`}
        >

          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">

              {menuData.map((menuItem, key) => (

                <li key={key} className={menuItem?.submenu && "group relative"}>

                  {menuItem?.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="flex items-center gap-3 hover:text-primary"
                      >
                        {menuItem?.title}
                      </button>

                      <ul className={`dropdown ${dropdownToggler ? "flex" : ""}`}>

                        {menuItem?.submenu.map((item, i) => (

                          <li key={i} className="hover:text-primary">
                            <Link href={item.path || "#"}>
                              {item.title}
                            </Link>
                          </li>

                        ))}

                      </ul>
                    </>
                  ) : (

                    <Link
                      href={menuItem?.path || "#"}
                      className={
                        pathUrl === menuItem?.path
                          ? "text-primary hover:text-primary"
                          : "hover:text-primary"
                      }
                    >
                      {menuItem?.title}
                    </Link>

                  )}

                </li>

              ))}

            </ul>
          </nav>

          <div className="mt-7 flex items-center gap-6 xl:mt-0">

            <ThemeToggler />

            <Link
              href={headerSettings?.githubLink || "#"}
              className="text-regular font-medium text-waterloo hover:text-primary"
            >
              GitHub Repo 🌟
            </Link>

            <Link
              href={headerSettings?.buttonLink || "#"}
              className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-white hover:bg-primaryho"
            >
              {headerSettings?.buttonText}
            </Link>

          </div>

        </div>

      </div>
    </header>
  );
};

export default Header;