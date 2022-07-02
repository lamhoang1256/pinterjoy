import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "interfaces";
import { client } from "utils/client";
import { userQuery } from "utils/query";
import LoadingSpinner from "components/loading";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUser>();
  const { id } = useParams();
  const query = userQuery(id);

  useEffect(() => {
    setLoading(true);
    try {
      client.fetch(query).then((data) => {
        console.log("data: ", data);
        setUser(data?.[0]);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
    }
  }, [query, id]);

  if (loading) return <LoadingSpinner />;
  return <div>{JSON.stringify(user)}</div>;
};

export default Profile;
