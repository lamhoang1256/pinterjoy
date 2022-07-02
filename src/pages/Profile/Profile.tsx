import LoadingSpinner from "components/loading";
import { IUser } from "interfaces";
import ProfileAlbum from "modules/user/ProfileAlbum";
import ProfileBanner from "modules/user/ProfileBanner";
import ProfileUser from "modules/user/ProfileUser";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "utils/client";
import { userQuery } from "utils/query";

const Profile = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUser>(Object);
  const query = userQuery(id || "");
  const randomImage = "https://source.unsplash.com/1440x500/?nature,photography,technology";

  useEffect(() => {
    setLoading(true);
    try {
      client.fetch(query).then((data) => {
        setUser(data?.[0]);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
    }
  }, [query, id]);

  if (loading) return <LoadingSpinner />;
  return (
    <>
      <ProfileBanner url={randomImage} />
      <ProfileUser image={user.image} userName={user.userName} />
      <ProfileAlbum />
    </>
  );
};

export default Profile;
