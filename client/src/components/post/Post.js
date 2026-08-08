import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import PostItem from "../posts/PostItem";
import CommentItem from "../post/CommentItem";
import { getPost } from "../../actions/post";
import CommentForm from "./CommentForm";

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
    // eslint-disable-next-line
  }, [getPost]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <div className="min-h-screen bg-slate-900 text-white px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto w-full">
        {/* Back Button */}
        <Link
          to="/posts"
          className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 mb-5 sm:mb-6 rounded-xl border border-indigo-500 text-indigo-400 bg-slate-800 hover:bg-indigo-600 hover:text-white transition font-semibold text-sm sm:text-base"
        >
          ← Back To Posts
        </Link>

        {/* Post */}
        <div className="bg-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-700 shadow-lg overflow-hidden">
          <PostItem post={post} />
        </div>

        {/* Comment Form */}
        <div className="bg-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-700 shadow-lg mt-5 sm:mt-6">
          <CommentForm postId={post._id} />
        </div>

        {/* Comments */}
        <div className="mt-5 sm:mt-6 space-y-4">
          {post.comments && post.comments.length > 0 ? (
            post.comments.map((comment) => (
              <div
                key={comment._id}
                className="bg-slate-800 rounded-2xl p-4 sm:p-5 border border-slate-700 overflow-hidden"
              >
                <CommentItem
                  comment={comment}
                  postId={post._id}
                />
              </div>
            ))
          ) : (
            <div className="bg-slate-800 rounded-2xl p-6 text-center text-slate-400 text-sm sm:text-base">
              No comments yet. Be the first to comment!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);