import MasonryLayout from "components/layouts/MasonryLayout";
import LoadingSpinner from "components/loading";
import SearchBox from "components/searchbox";
import useDebouced from "hooks/useDebouced";
import { IPin } from "interfaces";
import { useEffect, useState } from "react";
import { client } from "utils/client";
import { pinGetAll, searchQuery } from "utils/query";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pins, setPins] = useState<IPin[]>([]);
  const [loading, setLoading] = useState(true);
  const value = useDebouced(searchTerm.toLowerCase());

  const fetchPins = async () => {
    if (value !== "") {
      setLoading(true);
      const query = searchQuery(value);
      const data = await client.fetch(query);
      setPins(data);
      setLoading(false);
    } else {
      const data = await client.fetch(pinGetAll);
      setPins(data);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPins();
  }, [value]);

  return (
    <div>
      <SearchBox onChangeValue={setSearchTerm} />
      {loading && <LoadingSpinner />}
      {!loading && <MasonryLayout pins={pins} className="mt-8" />}
    </div>
  );
};

export default Search;
