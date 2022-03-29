import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    instagram: "",
    youtube: "",
  });
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? "" : profile.company,
      website: loading || !profile.website ? "" : profile.website,
      location: loading || !profile.location ? "" : profile.location,
      status: loading || !profile.status ? "" : profile.status,
      skills: loading || !profile.skills ? "" : profile.skills.join(","),
      githubusername:
        loading || !profile.githubusername ? "" : profile.githubusername,
      bio: loading || !profile.bio ? "" : profile.bio,
      twitter: loading || !profile.social ? "" : profile.social.twitter,
      facebook: loading || !profile.social ? "" : profile.social.facebook,
      linkedin: loading || !profile.social ? "" : profile.social.linkedin,
      instagram: loading || !profile.social ? "" : profile.social.instagram,
      youtube: loading || !profile.social ? "" : profile.social.youtube,
    });
  }, [loading]);
  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    instagram,
    youtube,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };
  return (
    <Fragment>
      <div className="w-full bg-gray-800 ">
        <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
          <div className="bg-gray-900 w-full shadow rounded-3xl p-8 sm:p-12 -mt-72">
            <p className="text-3xl font-bold leading-7 text-center text-white">
              Create your profile
            </p>
            <form className="form" onSubmit={(e) => onSubmit(e)}>
              <div className="items-center mt-12">
                <div>
                  <select
                    name="status"
                    value={status}
                    onChange={(e) => onChange(e)}
                  >
                    <option value="0">* Select Professional Status</option>
                    <option value="Developer">Developer</option>
                    <option value="Junior Developer">Junior Developer</option>
                    <option value="Senior Developer">Senior Developer</option>
                    <option value="Manager">Manager</option>
                    <option value="Student or Learning">
                      Student or Learning
                    </option>
                    <option value="Instructor">Instructor or Teacher</option>
                    <option value="Intern">Intern</option>
                    <option value="Other">Other</option>
                  </select>
                  <small className="form-text">
                    Give us an idea of where you are at in your career
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Company"
                    name="company"
                    value={company}
                    onChange={(e) => onChange(e)}
                  />
                  <small className="form-text">
                    Could be your own company or one you work for
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Website"
                    name="website"
                    value={website}
                    onChange={(e) => onChange(e)}
                  />
                  <small className="form-text">
                    Could be your own or a company website
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Location"
                    name="location"
                    value={location}
                    onChange={(e) => onChange(e)}
                  />
                  <small className="form-text">
                    City & state suggested (eg. Boston, MA)
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="* Skills"
                    name="skills"
                    value={skills}
                    onChange={(e) => onChange(e)}
                  />
                  <small className="form-text">
                    Please use comma separated values (eg.
                    HTML,CSS,JavaScript,PHP)
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Github Username"
                    name="githubusername"
                    value={githubusername}
                    onChange={(e) => onChange(e)}
                  />
                  <small className="form-text">
                    If you want your latest repos and a Github link, include
                    your username
                  </small>
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="A short bio of yourself"
                    name="bio"
                    value={bio}
                    onChange={(e) => onChange(e)}
                  ></textarea>
                  <small className="form-text">
                    Tell us a little about yourself
                  </small>
                </div>

                <div className="my-2">
                  <button
                    onClick={() => toggleSocialInputs(!displaySocialInputs)}
                    type="button"
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                  <span className="mx-2 text-white">Optional</span>
                </div>

                {displaySocialInputs && (
                  <Fragment>
                    <div className="form-group social-input">
                      <i className="fab fa-twitter fa-2x"></i>
                      <input
                        type="text"
                        placeholder="Twitter URL"
                        name="twitter"
                        value={twitter}
                        onChange={(e) => onChange(e)}
                      />
                    </div>

                    <div className="form-group social-input">
                      <i className="fab fa-facebook fa-2x"></i>
                      <input
                        type="text"
                        placeholder="Facebook URL"
                        name="facebook"
                        value={facebook}
                        onChange={(e) => onChange(e)}
                      />
                    </div>

                    <div className="form-group social-input">
                      <i className="fab fa-youtube fa-2x"></i>
                      <input
                        type="text"
                        placeholder="YouTube URL"
                        name="youtube"
                        value={youtube}
                        onChange={(e) => onChange(e)}
                      />
                    </div>

                    <div className="form-group social-input">
                      <i className="fab fa-linkedin fa-2x"></i>
                      <input
                        type="text"
                        placeholder="Linkedin URL"
                        name="linkedin"
                        value={linkedin}
                        onChange={(e) => onChange(e)}
                      />
                    </div>

                    <div className="form-group social-input">
                      <i className="fab fa-instagram fa-2x"></i>
                      <input
                        type="text"
                        placeholder="Instagram URL"
                        name="instagram"
                        value={instagram}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </Fragment>
                )}

                <input
                  type="submit"
                  className="mx-3 btn rounded bg-blue-400 text-white hover:bg-blue-600"
                />
                <Link
                  className=" mx-3 btn bg-blue-400 text-white hover:bg-blue-600 rounded"
                  to={"/dashboard"}
                >
                  Go Back
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
