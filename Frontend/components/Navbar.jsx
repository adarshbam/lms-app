import { Link } from "react-router-dom";
import { ShoppingCart, Sun, Moon, User } from "lucide-react";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  function changeTheme() {
    console.log("Changing Theme");
  }

  return (
    <header className="sticky top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg mb-4">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/about" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              Procodrr
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <button
              onClick={changeTheme}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              {theme === "dark" ? (
                <Sun
                  className="w-5 h-5 text-gray-600 dark:text-gray-300"
                  onClick={toggleTheme}
                />
              ) : (
                <Moon
                  className="w-5 h-5 text-gray-600 dark:text-gray-300"
                  onClick={toggleTheme}
                />
              )}
            </button>
            <Link to={"cart"}>
              <ShoppingCart className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </Link>
            <Link>
              <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
