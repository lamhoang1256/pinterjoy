import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "layouts/MainLayout";
import Home from "pages/Home/Home";
import SignIn from "pages/SignIn/SignIn";
import { path } from "constants/path";
import "./app.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={path.home} element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path={path.signIn} element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
