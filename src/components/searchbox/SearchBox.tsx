import IconSearch from "components/icons/IconSearch";
import classNames from "utils/className";

interface SearchBoxProps {
  className?: string;
  onChangeValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBox = ({ className, onChangeValue, ...props }: SearchBoxProps) => {
  return (
    <div
      className={classNames(
        "flex items-center max-w-[1000px] w-full mx-auto rounded-full h-[50px] border-[1px] border-rede7 overflow-hidden pl-2 md:pl-3",
        className,
      )}
      {...props}
    >
      <IconSearch />
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 pl-2 md:pl-3"
        onChange={(e) => onChangeValue(e.target.value)}
      />
      <button
        type="button"
        className="h-full rounded-full bg-linearRed text-white h-13 px-5 md:px-11"
      >
        Search
      </button>
    </div>
  );
};

SearchBox.defaultProps = {
  className: "",
};

export default SearchBox;
