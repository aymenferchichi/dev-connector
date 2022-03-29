import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { DashboardActions } from "./dashboardactions";
import { getCurrentProfile } from "../../actions/profile";
import { Link } from "react-router-dom";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className="h-screen bg-gray-800 w-full bg-cover ">
        <h1 className="large text-primary">Dashboard</h1>
        <p className="mx-3 font-semibold text-lg cursor-pointer text-white ">
          <i className="fas fa-user my-4"></i> Welcome {user && user.name}
        </p>
        {profile !== null ? (
          <Fragment>
            <DashboardActions />
          </Fragment>
        ) : (
          <Fragment>
            <p>no profile yet, you must create one first</p>
            <Link to="/create-profile" className="btn btn-primary my-1">
              Create Profile
            </Link>
          </Fragment>
        )}
      </section>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
