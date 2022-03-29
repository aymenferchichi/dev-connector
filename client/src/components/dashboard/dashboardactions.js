import React from "react";
import { Link } from "react-router-dom";
export const DashboardActions = () => {
  return (
    <div>
      <Link
        to="/edit-profile"
        className="btn m-4  bg-gradient-to-tr from-blue-300 to-green-400 font-bold text-white rounded-md"
      >
        <i className="fas fa-user-circle  font-bold text-white mx-2" />
        Edit Profile
      </Link>
      <Link
        to="/add-experience"
        className="btn  m-4  bg-gradient-to-tr from-blue-300 to-green-400 font-bold text-white rounded-md"
      >
        <i className="fas fa-black-tie font-bold text-white mx-2" />
        Add experience
      </Link>
      <Link
        to="/add-education"
        className="btn  m-4  bg-gradient-to-tr from-blue-300 to-green-400 font-bold text-white rounded-md"
      >
        <i className="fas fa-graduation-cap font-bold text-white mx-2" />
        Add Education
      </Link>
    </div>
  );
};
