import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  // State Variables
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Function to Create User
  const handleCreate = async () => {
    try {
      const newUser = {
        name,
        username,
        email,
        phone
      };
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        newUser
      );

      console.log(response.data);
       alert("User created successfully\n" +
            JSON.stringify(response.data, null, 2)
    );
      // Clear Form
      setName("");
      setUsername("");
      setEmail("");
      setPhone("");
    }
    catch (error) {
      console.error("Error creating user", error);
    }
  };
  return (
    <div>
      <h2>Create New User</h2>
      <label><b>Name:</b></label>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label><b>Username:</b></label>
      <br />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label><b>Email:</b></label>
      <br />
        <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label><b>Phone:</b></label>
      <br />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
     <br /><br />
      <button type="button"
        onClick={handleCreate}>Submit</button>
    </div>
  );
};

export default CreateUser;