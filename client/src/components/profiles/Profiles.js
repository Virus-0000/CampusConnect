import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profile";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return loading ? (
    <Spinner />
  ) : (
    <div className="min-h-screen bg-slate-900 text-white pt-8 sm:pt-16 lg:pt-28 pb-12 sm:pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
          👨‍💻 Connect with Developers
        </h1>

        <p className="text-slate-400 text-sm sm:text-lg mb-6 sm:mb-8 leading-6 sm:leading-7">
          Discover developers, their skills, experience and projects.
        </p>

        {profiles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {profiles.map((profile) => (
              <ProfileItem
                key={profile._id}
                profile={profile}
              />
            ))}
          </div>
        ) : (
          <div className="bg-slate-800 rounded-2xl p-6 sm:p-8 text-center">
            <h4 className="text-lg sm:text-xl text-slate-400">
              No profiles found...
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);