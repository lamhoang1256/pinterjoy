import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "layouts/MainLayout";
import SignIn from "pages/SignIn/SignIn";
import { path } from "constants/path";
import Home from "pages/Home/Home";
import Detail from "pages/Detail/Detail";
import "./app.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={path.home} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={`${path.detail}/:id`} element={<Detail />} />
        </Route>
        <Route path={path.signIn} element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
