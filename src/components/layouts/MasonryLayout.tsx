import Masonry from "react-masonry-css";
import { IPin } from "interfaces";
import Pin from "components/common/Pin";

interface MasonryLayoutProps {
  pins: IPin[];
}

const MasonryLayout = ({ pins }: MasonryLayoutProps) => {
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
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {pins.map((pin: IPin) => (
        // eslint-disable-next-line no-underscore-dangle
        <Pin data={pin} key={pin._id} />
      ))}
    </Masonry>
  );
};

export default MasonryLayout;
