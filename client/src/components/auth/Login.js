import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
  <div className="min-h-screen bg-slate-900 flex justify-center pt-14 px-4">
    <div className="w-full max-w-md bg-slate-800 rounded-3xl p-6 sm:p-8 h-fit">
      
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
        Welcome Back 👋
      </h1>

      <p className="text-slate-400 mb-6 sm:mb-8 text-sm sm:text-base">
        Login to continue to CampusConnect
      </p>

      <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={onChange}
          required
          className="w-full bg-slate-700 text-white rounded-xl px-4 py-3.5 sm:py-4 outline-none border border-slate-600 focus:border-indigo-500"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
          minLength="6"
          className="w-full bg-slate-700 text-white rounded-xl px-4 py-3.5 sm:py-4 outline-none border border-slate-600 focus:border-indigo-500"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-500 transition rounded-xl py-3.5 sm:py-4 font-semibold text-white"
        >
          Login
        </button>
      </form>

      <p className="text-slate-400 mt-6 sm:mt-8 text-center text-sm sm:text-base">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-indigo-400 hover:text-indigo-300"
        >
          Register
        </Link>
      </p>

    </div>
  </div>
);
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);