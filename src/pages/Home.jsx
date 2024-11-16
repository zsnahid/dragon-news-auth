import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/LeftNavbar";
import { NavbarWithSolidBackground } from "../components/Navbar";
import RightNavbar from "../components/RightNavbar";

export default function Home() {
  return (
    <div>
      <Header />
      <LatestNews />
      <NavbarWithSolidBackground />
      <div className="grid grid-cols-12 gap-10">
        <aside className="col-span-3">
          <LeftNavbar />
        </aside>
        <main className="col-span-6">
          <Outlet />
        </main>
        <aside className="col-span-3">
          <RightNavbar />
        </aside>
      </div>
    </div>
  );
}
