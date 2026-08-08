import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const authLinks = (
    <>
      <Link
        to="/developers"
        onClick={closeMenu}
        className="text-slate-300 hover:text-indigo-400 transition font-medium"
      >
        Developers
      </Link>

      <Link
        to="/posts"
        onClick={closeMenu}
        className="text-slate-300 hover:text-indigo-400 transition font-medium"
      >
        Posts
      </Link>

      <Link
        to="/dashboard"
        onClick={closeMenu}
        className="text-slate-300 hover:text-indigo-400 transition font-medium"
      >
        Dashboard
      </Link>

      <button
        onClick={() => {
          logout();
          closeMenu();
        }}
        className="text-slate-300 hover:text-indigo-400 transition font-medium"
      >
        Logout
      </button>
    </>
  );

  const guestLinks = (
    <>
      <Link
        to="/developers"
        onClick={closeMenu}
        className="text-slate-300 hover:text-indigo-400 transition font-medium"
      >
        Developers
      </Link>

      <Link
        to="/register"
        onClick={closeMenu}
        className="text-slate-300 hover:text-indigo-400 transition font-medium"
      >
        Register
      </Link>

      <Link
        to="/login"
        onClick={closeMenu}
        className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition text-center"
      >
        Login
      </Link>
    </>
  );

  return (
    <nav className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-2xl sm:text-3xl font-bold text-indigo-400 hover:text-indigo-300 transition whitespace-nowrap"
          >
            🚀 CampusConnect
          </Link>

          {/* Desktop Navigation */}
          {!loading && (
            <div className="hidden md:flex items-center gap-8 text-lg">
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          )}

          {/* Mobile Menu Button */}
          {!loading && (
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        {!loading && isMenuOpen && (
          <div className="md:hidden border-t border-slate-800 py-4">
            <div className="flex flex-col gap-4 text-lg">
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);