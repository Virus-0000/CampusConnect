import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="w-full max-w-lg bg-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl sm:text-4xl">🚀</span>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Create Account
        </h1>
      </div>

      <p className="text-slate-400 mt-2 mb-6 sm:mb-8 text-sm sm:text-base">
        Join CampusConnect today.
      </p>

      <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={name}
          onChange={onChange}
          required
          className="w-full p-3.5 sm:p-4 rounded-xl bg-slate-700 border border-slate-600 text-white outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 transition-all duration-300"
        />

        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={onChange}
          required
          className="w-full p-3.5 sm:p-4 rounded-xl bg-slate-700 border border-slate-600 text-white outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 transition-all duration-300"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
          minLength="6"
          required
          className="w-full p-3.5 sm:p-4 rounded-xl bg-slate-700 border border-slate-600 text-white outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 transition-all duration-300"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          value={password2}
          onChange={onChange}
          minLength="6"
          required
          className="w-full p-3.5 sm:p-4 rounded-xl bg-slate-700 border border-slate-600 text-white outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 transition-all duration-300"
        />

        <button
          type="submit"
          className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/30 transition duration-300 font-semibold text-base sm:text-lg"
        >
          Create Account
        </button>
      </form>

      <p className="text-center text-slate-400 mt-6 sm:mt-8 text-sm sm:text-base">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-indigo-400 hover:text-indigo-300"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);