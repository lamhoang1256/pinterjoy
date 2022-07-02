import Header from "components/layouts/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="px-5">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
