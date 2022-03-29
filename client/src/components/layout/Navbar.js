import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div>
      <span>
        <Link
          className="text-white mx-3 font-semibold text-lg cursor-pointer hover:text-gray-700"
          to="/dashboard"
        >
          <i className="fas fa-user"></i> Dashboard
        </Link>
      </span>
      <span>
        <a
          className="text-white mx-3 font-semibold text-lg cursor-pointer hover:text-gray-700"
          onClick={logout}
          href="#!"
        >
          <i className="fas fa-sign-out-alt"></i> Logout
        </a>
      </span>
    </div>
  );

  const guestLinks = (
    <div>
      <span className="text-white mx-3 font-semibold text-lg cursor-pointer">
        {" "}
        <a className="text-white hover:text-gray-700" href="#!">
          Developers
        </a>
      </span>
      <span className="text-white mx-3 font-semibold text-lg cursor-pointer">
        <Link className="text-white hover:text-gray-700" to="/register">
          Register
        </Link>
      </span>
      <span className="text-white mx-3 font-semibold text-lg cursor-pointer">
        <Link className="hover:text-gray-700 text-white" to="/login">
          Login
        </Link>
      </span>
    </div>
  );
  return (
    <nav className="flex justify-between px-6 py-1 bg-gradient-to-tr from-blue-400 to-green-400 items-center">
      <h1>
        <Link
          className="text-2xl mx-3 hover:text-gray-700 text-white font-bold cursor-pointer"
          to=""
        >
          <i className="fas fa-code "></i> DevConnector
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks} </Fragment>
      )}
    </nav>
  );
};

Navbar.protoTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToPorps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToPorps, { logout })(Navbar);
