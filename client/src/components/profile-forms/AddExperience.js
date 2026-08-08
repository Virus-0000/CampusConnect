import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    company,
    title,
    location,
    from,
    to,
    current,
    description,
  } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  return (
    <div className="min-h-screen bg-slate-900 text-white px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
      <div className="max-w-3xl mx-auto w-full">
        <div className="bg-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl border border-slate-700">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">
            💼 Add Experience
          </h1>

          <p className="text-slate-400 mb-6 sm:mb-8 text-sm sm:text-base">
            Add your professional experience and achievements.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              addExperience(formData, history);
            }}
            className="space-y-5"
          >
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={company}
              onChange={onChange}
              required
              className="w-full rounded-xl bg-slate-700 border border-slate-600 p-3.5 sm:p-4 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm sm:text-base"
            />

            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={title}
              onChange={onChange}
              required
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  From
                </label>

                <input
                  type="date"
                  name="from"
                  value={from}
                  onChange={onChange}
                  required
                  className="w-full rounded-xl bg-slate-700 border border-slate-600 p-3.5 sm:p-4 text-white focus:outline-none focus:border-indigo-500 text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  To
                </label>

                <input
                  type="date"
                  name="to"
                  value={to}
                  onChange={onChange}
                  disabled={toDateDisabled}
                  className="w-full rounded-xl bg-slate-700 border border-slate-600 p-3.5 sm:p-4 text-white focus:outline-none focus:border-indigo-500 disabled:opacity-50 text-sm sm:text-base"
                />
              </div>
            </div>

            <label className="flex items-center gap-3 text-slate-300 cursor-pointer select-none">
              <input
                type="checkbox"
                name="current"
                checked={current}
                onChange={() => {
                  toggleDisabled(!toDateDisabled);

                  setFormData({
                    ...formData,
                    current: !current,
                    to: "",
                  });
                }}
                className="w-5 h-5 accent-indigo-600 flex-shrink-0"
              />

              <span className="text-sm sm:text-base">
                Currently Working
              </span>
            </label>

            <textarea
              name="description"
              placeholder="Describe your role, responsibilities and achievements..."
              value={description}
              onChange={onChange}
              rows={5}
              className="w-full rounded-xl bg-slate-700 border border-slate-600 p-3.5 sm:p-4 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 resize-none text-sm sm:text-base leading-6"
            />

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <button
                type="submit"
                className="flex-1 bg-indigo-600 hover:bg-indigo-500 transition py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base"
              >
                Save Experience
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

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(withRouter(AddExperience));