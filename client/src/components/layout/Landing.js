import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Briefcase,
} from "lucide-react";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="min-h-screen bg-slate-900 text-white flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            {/* Badge */}
            <span className="inline-block bg-indigo-600 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">
              🚀 Modern Developer Network
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-6">
              Build your{" "}
              <span className="text-indigo-400">Developer</span> Career.
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl mt-5 sm:mt-6 leading-7 sm:leading-9 max-w-2xl">
              Connect with developers, share projects, discover jobs,
              showcase your portfolio and grow together.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10">
              <Link
                to="/register"
                className="bg-indigo-600 px-6 sm:px-7 py-3 sm:py-4 rounded-xl hover:bg-indigo-500 transition flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/login"
                className="border border-gray-500 px-6 sm:px-7 py-3 sm:py-4 rounded-xl hover:bg-gray-800 transition flex items-center justify-center w-full sm:w-auto"
              >
                Login
              </Link>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="grid gap-5 sm:gap-6 w-full"
          >
            {/* Community Posts Card */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl">
              <MessageCircle
                size={40}
                className="text-pink-400 mb-4"
              />

              <h3 className="text-xl sm:text-2xl font-semibold">
                Community Posts
              </h3>

              <p className="text-gray-400 mt-2 text-sm sm:text-base leading-6">
                Share ideas and discuss with other developers.
              </p>
            </div>

            {/* Career Growth Card */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl">
              <Briefcase
                size={40}
                className="text-green-400 mb-4"
              />

              <h3 className="text-xl sm:text-2xl font-semibold">
                Career Growth
              </h3>

              <p className="text-gray-400 mt-2 text-sm sm:text-base leading-6">
                Find opportunities and build your network.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);