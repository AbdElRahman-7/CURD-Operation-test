import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetails = () => {
  const { empid } = useParams();

  const [empdata, empdatachange] = useState({});

  useEffect(() => {
  const fetchEmployee = async () => {
    try {
      const response = await fetch(`http://localhost:3001/employee/${empid}`);
      if (!response.ok) {
        throw new Error("Failed to fetch employee data");
      }

      const data = await response.json();
      empdatachange(data);
    } catch (err) {
      console.error("Error:", err.message);
    }
  };

  fetchEmployee();
}, [empid]);

  return (
    <div>
      {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

      <div className="container">
        <div className="card row" style={{ textAlign: "left" }}>
          <div className="card-title">
            <h2>Employee Create</h2>
          </div>
          <div className="card-body"></div>

          {empdata && (
            <div>
              <h2>
                The Employee name is : <b>{empdata.name}</b> ({empdata.id})
              </h2>
              <h3>Contact Details</h3>
              <h5>Email is : {empdata.email}</h5>
              <h5>Phone is : {empdata.phone}</h5>
              <Link className="btn btn-danger" to="/">
                Back to Listing
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* </div>
            </div> */}
    </div>
  );
};

export default EmpDetails;