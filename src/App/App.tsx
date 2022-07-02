import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "layouts/MainLayout";
import SignIn from "pages/SignIn/SignIn";
import { path } from "constants/path";
import Home from "pages/Home/Home";
import PinDetail from "pages/PinDetail/PinDetail";
import Profile from "pages/Profile/Profile";
import PinAddNew from "modules/pin/PinAddNew";
import "./app.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={path.home} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={`${path.detail}/:id`} element={<PinDetail />} />
          <Route path={`${path.profile}/:id`} element={<Profile />} />
          <Route path={path.pinAddNew} element={<PinAddNew />} />
        </Route>
        <Route path={path.signIn} element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
