import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-10">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
