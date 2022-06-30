import Button from "components/button";
import SearchBox from "components/searchbox";

const Header = () => {
  return (
    <header className="py-5 flex items-center justify-between gap-x-8">
      <h2 className="text-rede7">Pinterjoy</h2>
      <SearchBox className="flex-1 p-3 border-[1px] border-[#eee]" />
      <img
        className="w-10 h-10 rounded-full"
        src="https://cdn.dribbble.com/users/8713191/avatars/normal/data?1627916100"
        alt="avatar"
      />
      <Button className="text-white bg-linearRed h-[46px] px-6 rounded-xl">Upload</Button>
    </header>
  );
};

export default Header;
