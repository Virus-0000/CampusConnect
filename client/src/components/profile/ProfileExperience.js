import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileExperience = ({
  experience: {
    company,
    title,
    location,
    to,
    from,
    description,
  },
}) => {
  return (
    <div className="bg-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-xl sm:text-2xl font-semibold text-indigo-400">
            💼 Experience
          </h3>

          <h4 className="text-lg sm:text-xl font-semibold text-white mt-4 break-words">
            {title}
          </h4>

          {company && (
            <p className="text-slate-300 mt-1 break-words">
              {company}
            </p>
          )}

          {location && (
            <p className="text-slate-400 mt-2 text-sm sm:text-base break-words">
              📍 {location}
            </p>
          )}
        </div>

        <div className="flex-shrink-0 text-sm sm:text-base text-slate-400 bg-slate-700/50 rounded-lg px-3 py-2">
          📅{" "}
          <Moment format="MMM YYYY">
            {from}
          </Moment>{" "}
          -{" "}
          {to ? (
            <Moment format="MMM YYYY">
              {to}
            </Moment>
          ) : (
            "Present"
          )}
        </div>
      </div>

      {description && (
        <p className="text-slate-300 mt-5 leading-7 text-sm sm:text-base break-words">
          {description}
        </p>
      )}
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;