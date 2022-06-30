interface SearchBoxProps {
  className?: string;
}

const SearchBox = ({ className, ...props }: SearchBoxProps) => {
  return (
    <div className={className} {...props}>
      <input type="text" placeholder="Search..." />
    </div>
  );
};

SearchBox.defaultProps = {
  className: "",
};

export default SearchBox;
