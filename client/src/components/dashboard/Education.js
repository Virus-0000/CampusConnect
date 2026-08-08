import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteEducation } from "../../actions/profile";

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <div
      key={edu._id}
      className="bg-slate-800 rounded-2xl p-4 sm:p-6 border border-slate-700 shadow-lg min-w-0"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-lg sm:text-xl font-bold text-white break-words">
            {edu.school}
          </h3>

          <p className="text-indigo-400 mt-1 text-sm sm:text-base break-words">
            {edu.degree}
          </p>
        </div>

        <span className="self-start bg-green-500/20 text-green-300 px-3 py-1.5 rounded-full text-xs sm:text-sm whitespace-nowrap">
          🎓 Education
        </span>
      </div>

      <div className="text-slate-400 text-sm sm:text-base mt-4">
        📅{" "}
        <Moment format="DD MMM YYYY">{edu.from}</Moment>
        {" - "}
        {edu.to === null ? (
          "Present"
        ) : (
          <Moment format="DD MMM YYYY">{edu.to}</Moment>
        )}
      </div>

      {edu.fieldofstudy && (
        <p className="text-slate-300 mt-3 text-sm sm:text-base break-words">
          📚 Field of Study: {edu.fieldofstudy}
        </p>
      )}

      {edu.description && (
        <p className="text-slate-300 mt-3 leading-6 sm:leading-7 text-sm sm:text-base break-words whitespace-pre-line">
          {edu.description}
        </p>
      )}

      <button
        onClick={() => {
          if (window.confirm("Delete this education record?")) {
            deleteEducation(edu._id);
          }
        }}
        className="mt-4 sm:mt-5 w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-red-500 text-red-400 bg-slate-800 hover:bg-red-600 hover:text-white transition font-semibold text-sm"
      >
        🗑 Delete Education
      </button>
    </div>
  ));

  return (
    <div className="space-y-4">
      {educations.length > 0 ? (
        educations
      ) : (
        <p className="text-slate-400 text-sm sm:text-base">
          No education added yet.
        </p>
      )}
    </div>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);