interface PinImageProps {
  url: string;
  alt: string;
}

const PinImage = ({ url, alt }: PinImageProps) => {
  return <img src={url} alt={alt} className="rounded-lg flex-shrink-0" />;
};

export default PinImage;
