import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "utils/client";
import { pinGetSingle } from "utils/query";

const Detail = () => {
  const { id } = useParams();
  const query = pinGetSingle(id);
  useEffect(() => {
    try {
      client.fetch(query).then((data) => {
        console.log("data: ", data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return <div>Detail</div>;
};

export default Detail;
