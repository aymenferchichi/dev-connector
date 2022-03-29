import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlert("passwords not match", "danger");
    } else {
      register({ name, email, password });
    }
  };
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Fragment>
      <section className="landing flex justify-center items-center  h-screen w-full">
        <form
          className="max-w-md w-full bg-gray-800 rounded p-6 space-y-4 bg-opacity-70"
          onSubmit={(e) => onSubmit(e)}
        >
          <div class="mb-4">
            <p class="text-white ">Sign up</p>
            <h2 class="text-xl font-bold text-white">Join our community</h2>
          </div>
          <div className="mb-4">
            <label class="block text-white  font-bold mb-2" for="username">
              name
            </label>
            <input
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              //required
            />
          </div>
          <div className="mb-4">
            <label class="block text-white  font-bold mb-2" for="username">
              name
            </label>
            <input
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              //required
            />
            <small className="text-white">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div className="mb-4">
            <label class="block text-white  font-bold mb-2" for="username">
              name
            </label>
            <input
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              //minLength="6"
            />
          </div>
          <div className="mb-4">
            <label class="block text-white  font-bold mb-2" for="username">
              name
            </label>
            <input
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => onChange(e)}
              //minLength="6"
            />
          </div>
          <button
            type="submit"
            class="w-full py-4 bg-blue-400 hover:bg-blue-600 rounded text-sm font-bold text-gray-50 transition duration-200"
          >
            Sign In
          </button>
          <p className="text-sm text-white ">
            Already have an account?{" "}
            <Link
              className="font-bold text-white hover:text-green-400"
              to="/login"
            >
              Sign In
            </Link>
          </p>
        </form>
      </section>
    </Fragment>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToPorps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToPorps, { setAlert, register })(Register);
