import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large text-blue-400">Developer Connector</h1>
          <p className="lead text-green-300">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div class="flex justify-center mt-8">
            <Link
              to="/register"
              className="btn py-1 mx-2 text-lg font-bold text-white transition-colors bg-indigo-600 rounded hover:bg-indigo-500"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="btn py-1 mx-2 text-lg font-bold text-white transition-colors bg-indigo-600 rounded hover:bg-indigo-500"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.protoTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
