import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";
import {
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const CreateProfile = ({ createProfile, history }) => {
  const inputClass =
    "w-full rounded-xl bg-slate-700 border border-slate-600 p-3.5 sm:p-4 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition text-sm sm:text-base";

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
    youtube: "",
    instagram: "",
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

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
    youtube,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto w-full">
        <div className="bg-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl border border-slate-700">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">
            🚀 Create Developer Profile
          </h1>

          <p className="text-slate-400 mb-6 sm:mb-8 text-sm sm:text-base">
            Tell the community about yourself, your skills and your experience.
          </p>

          <form onSubmit={onSubmit} className="space-y-5">
            <input
              type="text"
              name="status"
              placeholder="Professional Status"
              value={status}
              onChange={onChange}
              required
              className={inputClass}
            />

            <input
              type="text"
              name="company"
              placeholder="Company"
              value={company}
              onChange={onChange}
              className={inputClass}
            />

            <input
              type="text"
              name="website"
              placeholder="Website"
              value={website}
              onChange={onChange}
              className={inputClass}
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={location}
              onChange={onChange}
              className={inputClass}
            />

            <input
              type="text"
              name="skills"
              placeholder="Skills (e.g. React, Node.js, MongoDB)"
              value={skills}
              onChange={onChange}
              required
              className={inputClass}
            />

            <input
              type="text"
              name="githubusername"
              placeholder="GitHub Username"
              value={githubusername}
              onChange={onChange}
              className={inputClass}
            />

            <textarea
              name="bio"
              placeholder="Tell us about yourself..."
              value={bio}
              onChange={onChange}
              rows={5}
              className={`${inputClass} resize-none leading-6`}
            />

            <div className="mb-6">
              <button
                type="button"
                onClick={() =>
                  toggleSocialInputs(!displaySocialInputs)
                }
                className="w-full rounded-xl border border-slate-600 bg-slate-700 hover:bg-slate-600 py-3.5 sm:py-4 px-4 font-medium transition duration-200 text-sm sm:text-base"
              >
                {displaySocialInputs
                  ? "Hide Social Links"
                  : "Add Social Network Links"}
              </button>
            </div>

            {displaySocialInputs && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <FaTwitter className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-400" />
                  <input
                    type="text"
                    name="twitter"
                    placeholder="Twitter URL"
                    value={twitter}
                    onChange={onChange}
                    className={`${inputClass} pl-11`}
                  />
                </div>

                <div className="relative">
                  <FaFacebook className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" />
                  <input
                    type="text"
                    name="facebook"
                    placeholder="Facebook URL"
                    value={facebook}
                    onChange={onChange}
                    className={`${inputClass} pl-11`}
                  />
                </div>

                <div className="relative">
                  <FaLinkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" />
                  <input
                    type="text"
                    name="linkedin"
                    placeholder="LinkedIn URL"
                    value={linkedin}
                    onChange={onChange}
                    className={`${inputClass} pl-11`}
                  />
                </div>

                <div className="relative">
                  <FaYoutube className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500" />
                  <input
                    type="text"
                    name="youtube"
                    placeholder="YouTube URL"
                    value={youtube}
                    onChange={onChange}
                    className={`${inputClass} pl-11`}
                  />
                </div>

                <div className="relative sm:col-span-2">
                  <FaInstagram className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400" />
                  <input
                    type="text"
                    name="instagram"
                    placeholder="Instagram URL"
                    value={instagram}
                    onChange={onChange}
                    className={`${inputClass} pl-11`}
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-indigo-600 hover:bg-indigo-500 transition py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base"
              >
                Save Profile
              </button>

              <Link
                to="/dashboard"
                className="flex-1 text-center bg-slate-700 hover:bg-slate-600 transition py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(
  withRouter(CreateProfile)
);