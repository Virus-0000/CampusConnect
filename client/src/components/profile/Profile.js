import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";
import ProfileGithub from "./ProfileGithub";
import { getProfileById } from "../../actions/profile";

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
            <Link
              to="/profiles"
              className="px-5 sm:px-6 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 transition text-center"
            >
              ← Back To Profiles
            </Link>

            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user &&
              auth.user._id === profile.user._id && (
                <Link
                  to="/edit-profile"
                  className="px-5 sm:px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition text-center"
                >
                  Edit Profile
                </Link>
              )}
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Profile Top */}
            <ProfileTop profile={profile} />

            {/* About */}
            <ProfileAbout profile={profile} />

            {/* Experience */}
            {profile.experience && profile.experience.length > 0 ? (
              <ProfileExperience
                experience={profile.experience}
              />
            ) : null}

            {/* Education */}
            {profile.education && profile.education.length > 0 ? (
              <ProfileEducation
                education={profile.education}
              />
            ) : null}

            {/* Github */}
            {profile.githubusername && (
              <ProfileGithub
                username={profile.githubusername}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);