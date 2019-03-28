import React from "react";

export default function UserProfile(props) {
  return (
    <div>
      <h3>User Profile</h3>
      <h4>{props.name}</h4>
      <p>{props.country}</p>
    </div>
  );
}
