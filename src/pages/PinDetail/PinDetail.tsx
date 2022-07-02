import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPin, IPinDetail } from "interfaces";
import { client } from "utils/client";
import { pinDetailMorePinQuery, pinGetSingle } from "utils/query";
import PinTitle from "modules/pin/PinTitle";
import PinDesc from "modules/pin/PinDesc";
import PinImage from "modules/pin/PinImage";
import PinAuthor from "modules/pin/PinAuthor";
import PinComments from "modules/pin/PinComments";
import LoadingSpinner from "components/loading";
import MasonryLayout from "components/layouts/MasonryLayout";

const PinDetail = () => {
  const { id } = useParams();
  const query = pinGetSingle(id);
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState<IPinDetail>(Object);
  const [pins, setPins] = useState<IPin[]>([]);

  useEffect(() => {
    setLoading(true);
    try {
      client.fetch(query).then((data) => {
        setDetail(data?.[0]);
        if (data?.[0]) {
          const queryMorePin = pinDetailMorePinQuery(data?.[0]);
          client.fetch(queryMorePin).then((response) => {
            setPins(response);
            console.log("response: ", response);
          });
        }
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
    }
  }, [query, id]);

  if (loading) return <LoadingSpinner />;
  const { title, about, postedBy, image, comments } = detail;
  return (
    <div>
      <div className="flex gap-5 max-w-[1000px] mx-auto shadow-light p-5 rounded-2xl">
        <PinImage url={image.asset.url} alt={title} />
        <div>
          <PinTitle>{title}</PinTitle>
          <PinDesc>{about}</PinDesc>
          <PinAuthor postedBy={postedBy} />
          <PinComments comments={comments} />
        </div>
      </div>
      <h2 className="my-10 text-center">More like this</h2>
      <MasonryLayout pins={pins} />
    </div>
  );
};

export default PinDetail;
