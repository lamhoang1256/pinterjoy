import { path } from "constants/path";
import Button from "components/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-5 flex items-center justify-between gap-x-8">
      <Link to={path.home}>
        <h2 className="text-rede7">Pinterjoy</h2>
      </Link>
      <img
        className="w-10 h-10 rounded-full"
        src="https://cdn.dribbble.com/users/8713191/avatars/normal/data?1627916100"
        alt="avatar"
      />
      <Button to={path.addPin} className="bg-linearRed text-white rounded-lg">
        Upload
      </Button>
    </header>
  );
};

export default Header;
