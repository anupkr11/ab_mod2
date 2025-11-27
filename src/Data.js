import React from "react";

function Data({users}) {
    console.log(users)
  return (
    <div>
      <h3>Users List:</h3>
      {users.map(user => (
        <p key={user.id}>
          {user.id} - {user.name}
        </p>
      ))}
    </div>
  );
}

export default Data;