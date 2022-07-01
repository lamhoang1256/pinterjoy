import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="px-5">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
