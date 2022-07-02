import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "interfaces";
import { client } from "utils/client";
import { userQuery } from "utils/query";
import LoadingSpinner from "components/loading";
import ProfileBanner from "modules/user/ProfileBanner";
import ProfileUser from "modules/user/ProfileUser";
import { path } from "constants/path";

const Profile = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUser>(Object);
  const query = userQuery(id);

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
    <div>
      <ProfileBanner url={path.randomImage} />
      <ProfileUser image={user.image} userName={user.userName} />
    </div>
  );
};

export default Profile;
