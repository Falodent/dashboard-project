import { useEffect, useState } from "react";
import Layout from "../../components/Layout/layout";
import Cookies from "js-cookie";
import axios from "axios";

const Profile = () => {
  const data = Cookies.get("Profile");
  const user = JSON.parse(data);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});

  const getUserData = async () => {
    setLoading(true);

    await axios
      .get("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      })
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));

    setLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Layout title="Profile">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={profile?.image} alt="" />

          <p className="text-black">
            Name: {profile?.lastName} {profile?.firstName}
          </p>

          <p className="text-black">Email: {profile?.email}</p>

          <p className="text-black">Hair Color: {profile?.hair?.color}</p>
        </div>
      )}
    </Layout>
  );
};
export default Profile;
