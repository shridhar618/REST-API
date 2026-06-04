import React, { useState, useEffect } from "react";
/* useState Hook:
	data     : Stores API response data
  setData  : Updates the state variable
  Initial Value = Empty Array []
*/
const ApiExample = () => {
  const [data, setData] = useState([]);
	//useEffect() Hook: Executes code after component renders
  useEffect(() => {
    const fetchData = async () => {
    	//try...catch: Handles runtime and network errors
      try {
      	//await: Waits for asynchronous operation to complete
        const response = await    
        //fetch(): Sends HTTP GET request to API
        /*All Records Retrival*/
			  	fetch(
          "https://jsonplaceholder.typicode.com/users"
        	);
        	//response.json(): Converts JSON response into JavaScript object
        	const result = await response.json();
        	setData(result);
			
     /* Single Record Retrival*/
     /*   
     fetch('https://jsonplaceholder.typicode.com/users/5');
						const result=await response.json();
						setData([result]);
			*/
      }
      catch (error) {
        console.error("Error during Fetching",error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>User Details</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableStyle}>ID</th>
            <th style={tableStyle}>Name</th>
            <th style={tableStyle}>Username</th>
            <th style={tableStyle}>Email</th>
            <th style={tableStyle}>Phone</th>
            <th style={tableStyle}>Company</th>
          </tr>
        </thead>
        <tbody>
      {/*map():Iterates through array elements*/}
          {data.map((item) => (
              <tr key={item.id}>
              <td style={tableStyle}>{item.id}</td>
              <td style={tableStyle}>{item.name}</td>
              <td style={tableStyle}>{item.username}</td>
              <td style={tableStyle}>{item.email}</td>
              <td style={tableStyle}>{item.phone}</td>
              <td style={tableStyle}>
                {item.company.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableStyle = {
  background: "skyblue",
  color: "darkblue",
  padding: "0.5em",
  border: "1px solid darkblue",
  textAlign: "left"
};

export default ApiExample;

