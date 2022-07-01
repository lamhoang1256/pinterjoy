import { useEffect, useState } from "react";
import { client } from "utils/client";
import { pinGetAll } from "utils/query";
import MasonryLayout from "components/layouts/MasonryLayout";
import LoadingSpinner from "components/loading";

const HomePins = () => {
  const [loading, setLoading] = useState(true);
  const [pins, setPins] = useState([]);
  useEffect(() => {
    setLoading(true);
    try {
      client.fetch(pinGetAll).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
    }
  }, []);

  if (loading) return <LoadingSpinner />;
  return <MasonryLayout pins={pins} />;
};

export default HomePins;
