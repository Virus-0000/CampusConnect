import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills = [],
  },
}) => {
  return (
    <div className="bg-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-700 shadow-lg hover:border-indigo-500 transition min-w-0">
      {/* User Info */}
      <div className="flex items-center gap-4 min-w-0">
        <img
          src={
            avatar ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}`
          }
          alt={name}
          className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full border-2 border-indigo-500 object-cover"
        />

        <div className="min-w-0">
          <h2 className="text-xl sm:text-2xl font-bold text-white break-words">
            {name}
          </h2>

          <p className="text-indigo-400 mt-1 text-sm sm:text-base break-words">
            {status}
            {company && ` at ${company}`}
          </p>

          {location && (
            <p className="text-slate-400 mt-1 text-sm break-words">
              📍 {location}
            </p>
          )}
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-5 sm:mt-6">
        {skills.slice(0, 4).map((skill, index) => (
          <span
            key={index}
            className="bg-indigo-600/20 text-indigo-300 px-3 py-1 rounded-full text-xs border border-indigo-500/40 break-words"
          >
            ✓ {skill}
          </span>
        ))}
      </div>

      {/* View Profile */}
      <Link
        to={`/profile/${_id}`}
        className="block text-center mt-5 sm:mt-6 bg-indigo-600 hover:bg-indigo-500 py-3 rounded-xl font-semibold transition text-sm sm:text-base"
      >
        View Profile
      </Link>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;