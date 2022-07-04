interface SearchBoxProps {
  className?: string;
  onChangeValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBox = ({ className, onChangeValue, ...props }: SearchBoxProps) => {
  return (
    <div className={className} {...props}>
      <input type="text" placeholder="Search..." onChange={(e) => onChangeValue(e.target.value)} />
    </div>
  );
};

SearchBox.defaultProps = {
  className: "",
};

export default SearchBox;
