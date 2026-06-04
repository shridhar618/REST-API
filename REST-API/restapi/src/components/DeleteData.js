import React from "react";
import axios from "axios";

const DeleteUser = () => {

  // Function to Delete User
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        "https://jsonplaceholder.typicode.com/users/1"
      );

      alert(
        "User deleted - Empty Response\n" +
        JSON.stringify(response.data, null, 2)
      );
      console.log(response.data);
    }
    catch (error) {
      console.error("Error deleting user",error);
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <button onClick={handleDelete}>
        Delete User
      </button>
    </div>
  );
};
export default DeleteUser;