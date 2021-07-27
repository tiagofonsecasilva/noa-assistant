import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './logout';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <>
      <div className="userProfile" style={{display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img style={{borderRadius: "50%"}} src={user.picture} alt={user.name} />
        <div style={{display: "flex", fontSize: "14px"}}>
        <p>Hello </p><h2 className="username" style={{color: "white", fontSize: "14px"}}>{user.name}</h2></div>
        <div><p>{user.email}</p></div>
        <LogoutButton/>
      </div>
      </>
    )
  );
};

export default Profile;