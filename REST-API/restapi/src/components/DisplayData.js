import React, { useState, useEffect } from "react";
import axios from "axios";

/*DisplayData Component: Fetchs single user record*/
const DisplayData = () => {

  /*useState Hook: Stores and Updates user data*/
  const [apiData, setApiData] = useState(null);

  /*useEffect Hook: Executes once after component loads
  because dependency array is empty [] */
  useEffect(() => {

    /*Async Function: Fetch user data from API*/
    const fetchData = async () => {
      try {
        /*GET Request using Axios*/
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/10"
        );

        /*Store API response data into state */
        setApiData(response.data);
      }
      /*Error Handling*/
      catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    /*fetchData():Function Call*/
    fetchData();
  }, []);

  /*JSX Rendering*/
  return (
    <div className="container">
      <h2>User Details</h2>
      {
        /*Conditional Rendering, if data exists, 
        show table, otherwise show Loading...*/

        apiData ? (
          <table style={tableStyle}>
            {/* Table Header */}
            <thead>
              <tr>
                <th style={tableStyle}>ID</th>
                <th style={tableStyle}>Name</th>
                <th style={tableStyle}>Username</th>
                <th style={tableStyle}>Email</th>
                <th style={tableStyle}>Phone</th>
                <th style={tableStyle}>Website</th>
                <th style={tableStyle}>Company</th>
                <th style={tableStyle}>City</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              <tr>
                {/* User ID */}
                <td style={tableStyle}>
                  {apiData.id}
                </td>
                {/* User Name */}
                <td style={tableStyle}>
                  {apiData.name}
                </td>
                {/* Username */}
                <td style={tableStyle}>
                  {apiData.username}
                </td>
                {/* Email */}
                <td style={tableStyle}>
                  {apiData.email}
                </td>
                {/* Phone */}
                <td style={tableStyle}>
                  {apiData.phone}
                </td>
                {/* Website */}
                <td style={tableStyle}>
                  {apiData.website}
                </td>
                {/* Company Name */}
                <td style={tableStyle}>
                  {apiData.company.name}
                </td>
                {/* City */}
                <td style={tableStyle}>
                  {apiData.address.city}
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Loading...</p>
        )
      }
    </div>
  );
};

/*Style Object*/
const tableStyle = {
  border: "1px solid black",
  padding: "8px",
  textAlign: "left",
  backgroundColor: "skyblue",
  color: "darkblue"
};
export default DisplayData;