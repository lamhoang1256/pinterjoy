import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPin, IPinDetail } from "interfaces";
import { client } from "utils/client";
import { pinDetailMorePinQuery, pinGetSingle } from "utils/query";
import PinTitle from "modules/pin/parts/PinTitle";
import PinDesc from "modules/pin/parts/PinDesc";
import PinImage from "modules/pin/parts/PinImage";
import PinAuthor from "modules/pin/parts/PinAuthor";
import PinComments from "modules/pin/PinComments";
import LoadingSpinner from "components/loading";
import MasonryLayout from "components/layouts/MasonryLayout";
import PinAddComment from "modules/pin/parts/PinAddComment";

const PinDetail = () => {
  const { id } = useParams();
  const query = pinGetSingle(id);
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState<IPinDetail>(Object);
  const [pins, setPins] = useState<IPin[]>([]);

  const fetchPinDetail = () => {
    setLoading(true);
    try {
      client.fetch(query).then((data) => {
        setDetail(data?.[0]);
        if (data?.[0]) {
          const queryMorePin = pinDetailMorePinQuery(data?.[0]);
          client.fetch(queryMorePin).then((response) => {
            setPins(response);
          });
        }
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPinDetail();
  }, [query, id]);

  if (loading) return <LoadingSpinner />;
  const { title, about, postedBy, image, comments } = detail;
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-5 max-w-[500px] lg:max-w-[1000px] mx-auto md:shadow-light md:p-5 md:rounded-2xl">
        <PinImage url={image.asset.url} alt={title} />
        <div className="flex-1">
          <PinTitle>{title}</PinTitle>
          <PinDesc>{about}</PinDesc>
          <PinAuthor postedBy={postedBy} />
          <PinComments comments={comments} />
          <PinAddComment id={id || ""} fetchPinDetail={fetchPinDetail} />
        </div>
      </div>
      <h2 className="my-10 text-center">More like this</h2>
      <MasonryLayout pins={pins} />
    </div>
  );
};

export default PinDetail;
