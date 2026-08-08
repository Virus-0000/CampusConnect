import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteExperience } from "../../actions/profile";

const Experience = ({ experience, deleteExperience }) => {
  return (
    <div className="space-y-4">
      {experience.map((exp) => (
        <div
          key={exp._id}
          className="bg-slate-800 rounded-2xl p-4 sm:p-6 border border-slate-700 shadow-lg min-w-0"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-white break-words">
                {exp.title}
              </h3>

              <p className="text-indigo-400 mt-1 text-sm sm:text-base break-words">
                {exp.company}
              </p>
            </div>

            <span className="self-start bg-pink-500/20 text-pink-300 px-3 py-1.5 rounded-full text-xs sm:text-sm whitespace-nowrap">
              💼 Work
            </span>
          </div>

          <div className="text-slate-400 text-sm sm:text-base mt-4">
            📅{" "}
            <Moment format="DD MMM YYYY">{exp.from}</Moment>
            {" - "}
            {exp.current || exp.to === null ? (
              "Present"
            ) : (
              <Moment format="DD MMM YYYY">{exp.to}</Moment>
            )}
          </div>

          {exp.location && (
            <p className="text-slate-400 mt-2 text-sm sm:text-base break-words">
              📍 {exp.location}
            </p>
          )}

          {exp.description && (
            <p className="text-slate-300 mt-4 leading-6 sm:leading-7 text-sm sm:text-base break-words whitespace-pre-line">
              {exp.description}
            </p>
          )}

          <button
            onClick={() => deleteExperience(exp._id)}
            className="mt-4 sm:mt-5 w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-red-500 text-red-400 bg-slate-800 hover:bg-red-600 hover:text-white transition font-semibold text-sm"
          >
            🗑 Delete Experience
          </button>
        </div>
      ))}
    </div>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);