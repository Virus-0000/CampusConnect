import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <div className="min-h-screen bg-slate-900 text-white px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto w-full">

        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            👋 Welcome, {user && user.name}
          </h1>

          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Manage your developer profile and showcase your experience.
          </p>
        </div>

        {profile !== null ? (
          <>
            {/* Dashboard Actions */}
            <DashboardActions />

            {/* Profile Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">

              <div className="bg-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-700 shadow-xl">
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-400">
                  🎓 Education
                </h3>

                <p className="text-3xl sm:text-4xl font-bold mt-3">
                  {profile.education.length}
                </p>

                <p className="text-slate-400 mt-1 text-sm sm:text-base">
                  Education records
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-700 shadow-xl">
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-400">
                  💼 Experience
                </h3>

                <p className="text-3xl sm:text-4xl font-bold mt-3">
                  {profile.experience.length}
                </p>

                <p className="text-slate-400 mt-1 text-sm sm:text-base">
                  Experience records
                </p>
              </div>

            </div>

            {/* Education */}
            {profile.education.length > 0 && (
              <div className="mt-8 sm:mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-5">
                  🎓 Education
                </h2>

                <div className="space-y-4">
                  {profile.education.map((education) => (
                    <Education
                      key={education._id}
                      education={education}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Experience */}
            {profile.experience.length > 0 && (
              <div className="mt-8 sm:mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-5">
                  💼 Experience
                </h2>

                <div className="space-y-4">
                  {profile.experience.map((experience) => (
                    <Experience
                      key={experience._id}
                      experience={experience}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Delete Account */}
            <div className="mt-8 sm:mt-10">
              <button
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to delete your account? This action cannot be undone."
                    )
                  ) {
                    deleteAccount();
                  }
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-red-600/10 border border-red-500 text-red-400 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-red-600 hover:text-white transition text-sm sm:text-base"
              >
                🗑️ Delete My Account
              </button>
            </div>
          </>
        ) : (
          /* No Profile */
          <div className="bg-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-700 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

              <div className="max-w-xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  🚀 Build Your Developer Profile
                </h2>

                <p className="text-slate-400 mt-4 text-sm sm:text-base leading-7">
                  Complete your profile to showcase your skills, education,
                  experience and projects. This helps other developers discover
                  you.
                </p>

                <div className="mt-6 sm:mt-8 space-y-3 text-sm sm:text-base">
                  <div className="flex items-center gap-3">
                    ✅ Add Education
                  </div>

                  <div className="flex items-center gap-3">
                    ✅ Add Experience
                  </div>

                  <div className="flex items-center gap-3">
                    ✅ Add Skills
                  </div>

                  <div className="flex items-center gap-3">
                    ✅ Connect with Developers
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto">
                <Link
                  to="/create-profile"
                  className="block w-full lg:w-auto text-center bg-indigo-600 hover:bg-indigo-500 px-6 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-xl font-semibold transition"
                >
                  Create Profile →
                </Link>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteAccount,
})(Dashboard);