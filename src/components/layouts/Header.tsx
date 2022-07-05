import { path } from "constants/path";
import Button from "components/button";
import { Link } from "react-router-dom";
import { LocalStorage } from "constants/localStorage";
import IconSearch from "components/icons/IconSearch";

const Header = () => {
  const user = JSON.parse(localStorage.getItem(LocalStorage.user) || "{}");

  return (
    <header className="py-5 flex items-center justify-between gap-x-8">
      <Link to={path.home}>
        <h2 className="text-rede7">Pinterjoy</h2>
      </Link>
      <div className="flex gap-x-2 md:gap-x-5 items-center">
        <Button to={path.search} className="rounded-lg px-0 bg-transparent">
          <IconSearch />
        </Button>
        <Button to={`${path.profile}/${user?.uid}`} className="px-2 bg-transparent">
          <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="avatar" />
        </Button>
        <Button to={path.addPin} className="bg-linearRed text-white rounded-lg">
          Upload
        </Button>
      </div>
    </header>
  );
};

export default Header;
