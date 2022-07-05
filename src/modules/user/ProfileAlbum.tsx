import Button from "components/button";
import MasonryLayout from "components/layouts/MasonryLayout";
import LoadingSpinner from "components/loading";
import { IPin } from "interfaces";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "utils/client";
import { userCreatedPinsQuery, userSavedPinsQuery } from "utils/query";

const ProfileAlbum = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [pins, setPins] = useState<IPin[]>([]);
  const [type, setType] = useState("Created");
  const onChangeTab = (e: any) => {
    setType(e.target.textContent);
  };

  useEffect(() => {
    setLoading(true);
    try {
      if (type === "Created") {
        const query = userCreatedPinsQuery(id || "");
        client.fetch(query).then((data) => {
          setPins(data);
        });
      } else {
        const query = userSavedPinsQuery(id || "");
        client.fetch(query).then((data) => {
          setPins(data);
        });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [type, id]);

  if (loading) return <LoadingSpinner />;
  return (
    <div>
      <div className="flex items-center justify-center gap-x-5">
        <Button
          onClick={onChangeTab}
          className={type === "Created" ? "bg-linearRed rounded-lg text-white" : "rounded-lg"}
        >
          Created
        </Button>
        <Button
          onClick={onChangeTab}
          className={type === "Saved" ? "bg-linearRed rounded-lg text-white" : "rounded-lg"}
        >
          Saved
        </Button>
      </div>
      <div className="my-10">
        {pins?.length > 0 ? (
          <MasonryLayout pins={pins} />
        ) : (
          <h3 className="text-center">No Pins Found!</h3>
        )}
      </div>
    </div>
  );
};

export default ProfileAlbum;
