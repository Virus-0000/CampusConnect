import React from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({ profile }) => {
  const { bio, skills = [] } = profile;

  return (
    <div className="bg-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl">
      {/* About */}
      {bio && (
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
            About Me
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-7 break-words">
            {bio}
          </p>
        </div>
      )}

      {/* Skills */}
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-indigo-400">
            Skills
          </h3>

          <span className="text-sm text-slate-400">
            {skills.length} {skills.length === 1 ? "skill" : "skills"}
          </span>
        </div>

        {skills.length > 0 ? (
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 hover:bg-indigo-600/40 transition text-sm sm:text-base break-words"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-slate-500 text-sm">
            No skills added yet.
          </p>
        )}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;