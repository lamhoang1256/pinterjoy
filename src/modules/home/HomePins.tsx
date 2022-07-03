import { useEffect, useState } from "react";
import { client } from "utils/client";
import { pinGetAll } from "utils/query";
import MasonryLayout from "components/layouts/MasonryLayout";
import LoadingSpinner from "components/loading";

const HomePins = () => {
  const [loading, setLoading] = useState(true);
  const [pins, setPins] = useState([]);
  const fetchPins = async () => {
    setLoading(true);
    try {
      const data = await client.fetch(pinGetAll);
      setPins(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPins();
  }, []);

  if (loading) return <LoadingSpinner />;
  return <MasonryLayout pins={pins} />;
};

export default HomePins;
