import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getGithubRepos } from "../../actions/profile";

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
    // eslint-disable-next-line
  }, [username]);

  return (
    <div className="bg-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl">
      <h2 className="text-xl sm:text-2xl font-bold text-indigo-400 mb-5 sm:mb-6">
        🐙 Github Repositories
      </h2>

      {repos === null ? (
        <Spinner />
      ) : repos.length === 0 ? (
        <p className="text-slate-400 text-sm sm:text-base">
          No repositories found.
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-slate-700 rounded-2xl p-5 sm:p-6 border border-slate-600 hover:border-indigo-400 hover:-translate-y-1 transition min-w-0"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 break-words">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition"
                >
                  {repo.name}
                </a>
              </h3>

              <p className="text-slate-300 min-h-0 sm:min-h-[80px] text-sm sm:text-base leading-6 break-words">
                {repo.description || "No description available"}
              </p>

              {repo.language && (
                <span className="inline-block bg-purple-600/30 text-purple-300 border border-purple-500/40 px-3 py-1 rounded-full text-xs sm:text-sm mt-4">
                  {repo.language}
                </span>
              )}

              <div className="flex gap-2 sm:gap-3 flex-wrap mt-5">
                <span className="bg-indigo-600 px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                  ⭐ Stars: {repo.stargazers_count}
                </span>

                <span className="bg-slate-600 px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                  👀 Watchers: {repo.watchers_count}
                </span>

                <span className="bg-green-600 px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                  🍴 Forks: {repo.forks_count}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);