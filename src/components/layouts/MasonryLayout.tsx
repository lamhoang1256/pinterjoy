import Masonry from "react-masonry-css";
import { IPin } from "interfaces";
import Pin from "modules/pin/Pin";
import classNames from "utils/className";

interface MasonryLayoutProps {
  pins: IPin[];
  className?: string;
}

const MasonryLayout = ({ pins, className }: MasonryLayoutProps) => {
  const breakpointColumnsObj = {
    default: 6,
    3000: 8,
    2000: 6,
    1200: 3,
    1000: 2,
    500: 1,
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={classNames("my-masonry-grid", className)}
      columnClassName="my-masonry-grid_column"
    >
      {pins?.map((pin: IPin) => (
        <Pin data={pin} key={pin._id} />
      ))}
    </Masonry>
  );
};

MasonryLayout.defaultProps = {
  className: "",
};

export default MasonryLayout;
