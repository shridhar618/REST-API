import React, { useState } from "react";

function FilterList({ students }) {

  // Store search text entered by user
  const [searchTerm, setSearchTerm] = useState("");

  // Filter records based on search text
  const filteredStudents = students.filter(student =>
    student.name
      .toLowerCase() //searching case-insensitive.
      //.includes: checks matching text
      .includes(searchTerm.toLowerCase())  
  );

  return (
    <div className="container-box">
      <h2>Student Search</h2>

      <input
        type="text"
        placeholder="Search Student"
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
      />

      <ul>
        {filteredStudents.map(student => (
          <li key={student.id}>
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterList;