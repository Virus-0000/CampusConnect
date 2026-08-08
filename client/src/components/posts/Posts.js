import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import PostItem from "../posts/PostItem";
import { getPosts } from "../../actions/post";
import PostForm from "./PostForm";

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <div className="min-h-screen bg-slate-900 text-white pt-8 sm:pt-16 lg:pt-28 pb-12 sm:pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto w-full">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            👥 Welcome to the{" "}
            <span className="text-indigo-400">Community</span>
          </h1>

          <p className="text-slate-400 mt-3 text-sm sm:text-lg leading-6 sm:leading-7 max-w-2xl mx-auto">
            Share your thoughts, ask questions and connect with developers.
          </p>
        </div>

        {/* Create Post */}
        <div className="bg-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-slate-700 mb-6 sm:mb-8">
          <PostForm />
        </div>

        {/* Posts */}
        <div className="space-y-4 sm:space-y-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post._id}
                className="bg-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 border border-slate-700 shadow-lg min-w-0 overflow-hidden"
              >
                <PostItem post={post} />
              </div>
            ))
          ) : (
            <div className="bg-slate-800 rounded-2xl p-6 sm:p-8 text-center text-slate-400 text-sm sm:text-base">
              No posts yet. Be the first one!
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);