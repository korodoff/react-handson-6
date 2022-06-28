import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { data } from "./memory";

const Student = () => {
  const [student] = useContext(data);
  return (
    <div>
      <div>
        <Link className="addnew" to="/addStudent">
          Add Student
        </Link>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Course</th>
            <th scope="col">Batch</th>
            <th scope="col">Change</th>
          </tr>
        </thead>

        <tbody>
          {student.map((student) => (
            <tr key={student.id}>
              <td>{student.Name}</td>
              <td>{student.Age}</td>
              <td>{student.Course}</td>
              <td>{student.Batch}</td>
              <td>
                <Link to={`/Edit/${student.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
