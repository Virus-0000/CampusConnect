import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import api from "../../utils/api";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import {
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

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
    youtube: "",
    instagram: "",
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  useEffect(() => {
    getCurrentProfile();

    if (profile && !loading) {
      setFormData({
        company: profile.company || "",
        website: profile.website || "",
        location: profile.location || "",
        status: profile.status || "",
        skills: profile.skills ? profile.skills.join(",") : "",
        githubusername: profile.githubusername || "",
        bio: profile.bio || "",
        twitter: profile.social?.twitter || "",
        facebook: profile.social?.facebook || "",
        linkedin: profile.social?.linkedin || "",
        youtube: profile.social?.youtube || "",
        instagram: profile.social?.instagram || "",
      });
    }
  }, [loading, profile, getCurrentProfile]);

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

  const onAvatarChange = (e) => {
    const file = e.target.files[0];

    setAvatar(file);

    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const uploadAvatar = async () => {
    if (!avatar) return;

    const formData = new FormData();
    formData.append("avatar", avatar);

    try {
      await api.post("/api/profile/avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Avatar uploaded successfully");
    } catch (err) {
      console.error(err);
      alert("Avatar upload failed");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await uploadAvatar();

    createProfile(formData, history, true);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto w-full">
        <div className="bg-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl border border-slate-700">
          {/* Header */}
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">
            ✏️ Edit Developer Profile
          </h1>

          <p className="text-slate-400 text-sm sm:text-base mb-6">
            Update your developer profile and social links.
          </p>

          <form onSubmit={onSubmit} className="space-y-5">
            {/* Profile Fields */}
            <input
              type="text"
              name="status"
              placeholder="Professional Status"
              value={status}
              onChange={onChange}
              className="w-full rounded-xl bg-slate-700 border border-slate-600 p-3.5 sm:p-4 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm sm:text-base"
            />

            <input
              type="text"
              name="company"
              placeholder="Company"
              value={company}
              onChange={onChange}
              className="w-full rounded-xl bg-slate-700 border border-slate-600 p-3.5 sm:p-4 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm sm:text-base"
            />

            <input
              type="text"
              name="website"
              placeholder="Website"
              value={website}
              onChange={onChange}
              className="w-full rounded-xl bg-slate-700 border border-slate-600 p-3.5 sm:p-4 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm sm:text-base"
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={location}
              onChange={onChange}
              className="w-full rounded-xl bg-slate-700 border border-slate-600 p-3.5 sm:p-4 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm sm:text-base"
            />

            <input
              type="text"
              name="skills"
              placeholder="Skills (comma separated)"
              value={skills}
              onChange={onChange}
              className="w-full rounded-xl bg-slate-700 border border-slate-600 p-3.5 sm:p-4 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm sm:text-base"
            />

            <input
              type="text"
              name="githubusername"
              placeholder="GitHub Username"
              value={githubusername}
              onChange={onChange}
              className="w-full rounded-xl bg-slate-700 border border-slate-600 p-3.5 sm:p-4 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm sm:text-base"
            />

            <textarea
              name="bio"
              placeholder="Tell us about yourself..."
              value={bio}
              onChange={onChange}
              rows="5"
              className="w-full rounded-xl bg-slate-700 border border-slate-600 p-3.5 sm:p-4 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 resize-none text-sm sm:text-base leading-6"
            />

            {/* Avatar */}
            <div className="bg-slate-700/50 rounded-xl p-4 sm:p-5 border border-slate-600">
              <label className="block text-sm sm:text-base font-medium text-slate-300 mb-3">
                Profile Avatar
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={onAvatarChange}
                className="w-full text-sm text-slate-300 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:text-white file:font-medium hover:file:bg-indigo-500"
              />

              {avatarPreview && (
                <img
                  src={avatarPreview}
                  alt="Avatar Preview"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-indigo-500 mt-4"
                />
              )}
            </div>

            {/* Social Links Toggle */}
            <div className="my-2">
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

            {/* Social Inputs */}
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
                    className="w-full rounded-xl bg-slate-700 border border-slate-600 p-3.5 sm:p-4 pl-11 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm sm:text-base"
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
                    className="w-full rounded-xl bg-slate-700 border border-slate-600 p-3.5 sm:p-4 pl-11 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm sm:text-base"
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
                    className="w-full rounded-xl bg-slate-700 border border-slate-600 p-3.5 sm:p-4 pl-11 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm sm:text-base"
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
                    className="w-full rounded-xl bg-slate-700 border border-slate-600 p-3.5 sm:p-4 pl-11 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm sm:text-base"
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
                    className="w-full rounded-xl bg-slate-700 border border-slate-600 p-3.5 sm:p-4 pl-11 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm sm:text-base"
                  />
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-indigo-600 hover:bg-indigo-500 transition py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base"
              >
                Save Changes
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

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, {
  createProfile,
  getCurrentProfile,
})(withRouter(EditProfile));