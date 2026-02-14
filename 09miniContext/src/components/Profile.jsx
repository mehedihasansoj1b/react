import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h1>User not logged in</h1>;
  return (
    <div>
      <h1>Profile : {user.username}</h1>
      <h2>Logged In</h2>
    </div>
  );
}

export default Profile;
