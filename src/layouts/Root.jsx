import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="font-poppins w-11/12 max-w-screen-2xl mx-auto">
      <Outlet />
    </div>
  );
}
