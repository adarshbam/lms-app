import { Link } from "react-router-dom";
import { ShoppingCart, Sun, Moon, User } from "lucide-react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

import { useTheme } from "../context/ThemeContext";
import { useState, Fragment } from "react";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg mb-4">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              Procodrr
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
            <Link to={"cart"}>
              <ShoppingCart className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </Link>

            <Menu as="div" className="relative">
              <MenuButton className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </MenuButton>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-xl ring-1 ring-black/5 focus:outline-none overflow-hidden border border-gray-100 dark:border-gray-700">
                  <div className="px-1 py-1">
                    <MenuItem>
                      {({ active }) => (
                        <button
                          onClick={() => setIsLoginModalOpen(true)}
                          className={`${
                            active
                              ? "bg-indigo-600 text-white"
                              : "text-gray-900 dark:text-gray-200"
                          } group flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors`}
                        >
                          Sign in
                        </button>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          to="/register"
                          className={`${
                            active
                              ? "bg-indigo-600 text-white"
                              : "text-gray-900 dark:text-gray-200"
                          } group flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors`}
                        >
                          Create account
                        </Link>
                      )}
                    </MenuItem>
                  </div>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
        </div>
      </nav>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </header>
  );
};

export default Navbar;
