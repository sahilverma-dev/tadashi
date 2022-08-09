import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggleButton from "./ThemeToggleButton";
import { menuData } from "../constansts/menuData";

// icons
import { FiMenu as MenuIcon } from "react-icons/fi";
import { MdClose as CloseIcon } from "react-icons/md";

const Header = () => {
  const { user, login, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [popUpOpen, setPopUpOpen] = useState(false);
  const router = useRouter();
  return (
    <header className="sticky top-0 left-0 w-full bg-transparent z-50">
      <nav className="bg-white/40 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-dark-900/80 backdrop-blur">
        <div className="max-w-7xl flex flex-wrap justify-between items-center mx-auto">
          <Link href="/">
            <a className="flex items-center">
              <img
                src="/images/logo-1.png"
                className="mr-3 h-6 sm:h-9"
                alt="Tadashi Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Tadashi
              </span>
            </a>
          </Link>
          <div className="flex items-center md:order-2">
            <ThemeToggleButton />
            {user ? (
              <div className="relative flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 cursor-default">
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full aspect-square cursor-pointer"
                  src={user?.photoURL}
                  alt={user?.displayName}
                  onClick={() => setPopUpOpen(!popUpOpen)}
                  loading="lazy"
                />
                {popUpOpen && (
                  <div className="absolute text-left max-w-[200px] top-8 right-0 z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg border dark:border-none dark:bg-dark-700 dark:divide-gray-600 block  ">
                    <div className="py-3 px-4">
                      <span className="block text-sm text-gray-900 dark:text-white">
                        {user?.displayName}
                      </span>
                      <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                        {user?.email}
                      </span>
                    </div>
                    <ul className="py-1" aria-labelledby="user-menu-button">
                      <li onClick={() => setPopUpOpen(!popUpOpen)}>
                        <Link href="/profile">
                          <a
                            className={`
                            block py-2 px-4 text-sm dark:text-gray-200  hover:bg-gray-100 dark:hover:bg-gray-600  dark:hover:text-white
                            ${
                              router.pathname === "/profile"
                                ? "text-gray-900  font-bold"
                                : "text-gray-700 "
                            }`}
                            onClick={() => setPopUpOpen(!popUpOpen)}
                          >
                            Profile
                          </a>
                        </Link>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="block w-full text-left py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          onClick={() => {
                            logout();
                            setPopUpOpen(!popUpOpen);
                          }}
                        >
                          Sign out
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={login}
              >
                Login
              </button>
            )}
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-dark-300 dark:focus:ring-gray-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!menuOpen ? (
                <MenuIcon className="w-6 h-6" />
              ) : (
                <CloseIcon className="w-6 h-6" />
              )}
            </button>
          </div>
          <div
            className={` ${
              menuOpen ? "" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {menuData?.map((item, index) => (
                <li
                  key={index}
                  className="w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  <Link href={item.path}>
                    <a
                      className={`py-2 relative inline-flex items-center w-full gap-2 pr-4 pl-3 ${
                        router.pathname === item.path
                          ? " text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                          : " text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                      }`}
                    >
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
