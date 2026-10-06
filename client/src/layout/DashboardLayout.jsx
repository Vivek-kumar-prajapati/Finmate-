import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen">

      <Navbar />

      <div className="flex min-h-[calc(100vh-64px)]">

        <aside className="w-64 shrink-0">
          <Sidebar />
        </aside>

        <main className="flex-1 p-5">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;