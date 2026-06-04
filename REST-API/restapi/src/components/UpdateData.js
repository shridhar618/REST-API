import React, { useState } from "react";
import axios from "axios";

const UpdateUser = () => {
  // State Variables
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Function to Update User
  const handleUpdate = async () => {
    try {
      const updatedUser = {
        id: 1,
        name,
        username,
        email,
        phone
      };

      const response = await axios.put(
        "https://jsonplaceholder.typicode.com/users/1",
        updatedUser
      );

      alert(
        "User updated successfully\n\n" +
        JSON.stringify(response.data, null, 2)
      );

      // Clear Form
      setName("");
      setUsername("");
      setEmail("");
      setPhone("");
    }
    catch (error) {
      console.error("Error updating user", error);
    }
  };
  return (
    <div>
      <h2>Update User</h2>
      <label>Name:</label>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Username:</label>
      <br />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label>Email:</label>
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br /><br />
      <button onClick={handleUpdate}>
        Update User </button>
    </div>
  );
};

export default UpdateUser;