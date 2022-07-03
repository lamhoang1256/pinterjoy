import { LazyLoadImage } from "react-lazy-load-image-component";

interface ImageProps {
  alt: string;
  url: string;
  className?: string;
}

const Image = ({ alt, url, className, ...props }: ImageProps) => (
  <LazyLoadImage alt={alt} src={url} className={className} {...props} />
);

Image.defaultProps = {
  className: "",
};

export default Image;
