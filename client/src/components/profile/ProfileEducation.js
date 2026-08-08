import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileEducation = ({
  education: {
    school,
    degree,
    fieldofstudy,
    to,
    from,
    description,
  },
}) => {
  return (
    <div className="bg-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl">
      <h3 className="text-xl sm:text-2xl font-semibold text-indigo-400">
        🎓 Education
      </h3>

      <h4 className="text-lg sm:text-xl font-semibold text-white mt-4 break-words">
        {school}
      </h4>

      {degree && (
        <p className="text-slate-300 mt-2 text-sm sm:text-base break-words">
          {degree}
        </p>
      )}

      <p className="text-slate-400 mt-3 text-sm sm:text-base">
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
      </p>

      {fieldofstudy && (
        <p className="text-slate-300 mt-3 text-sm sm:text-base break-words">
          <span className="text-slate-400">Field of Study:</span>{" "}
          {fieldofstudy}
        </p>
      )}

      {description && (
        <p className="text-slate-300 mt-4 leading-7 text-sm sm:text-base break-words">
          {description}
        </p>
      )}
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;