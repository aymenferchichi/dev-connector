import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // redirect if logged in

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Fragment>
      <section className="landing flex justify-center items-center  h-screen w-full">
        <form
          className=" max-w-md w-full bg-gray-800 rounded p-6 space-y-4 bg-opacity-70"
          onSubmit={(e) => onSubmit(e)}
        >
          <div className="mb-4">
            <p className="text-white">Sign In</p>
            <h2 className="text-xl font-bold text-white">Join our community</h2>
          </div>
          <div className="mb-4">
            <label
              className="block text-white  font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white  font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-4 bg-blue-400 hover:bg-blue-600 rounded text-sm font-bold text-gray-50 transition duration-200"
            >
              Sign In
            </button>
          </div>
          <p className="text-sm text-white ">
            Already have an account?{" "}
            <Link
              className="font-bold text-white hover:text-green-400"
              to="/register"
            >
              Sign Up{" "}
            </Link>
          </p>
        </form>
      </section>
    </Fragment>
  );
};
login.PropTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToPorps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToPorps, { login })(Login);
