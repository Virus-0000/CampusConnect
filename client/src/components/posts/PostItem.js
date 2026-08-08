import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import {
  addLike,
  removeLike,
  addDislike,
  removeDislike,
  deletePosts,
} from "../../actions/post";

const PostItem = ({
  addLike,
  removeLike,
  addDislike,
  removeDislike,
  deletePosts,
  showActions = true,
  auth,
  post: {
    _id,
    text,
    name,
    avatar,
    user,
    likes,
    dislikes,
    comments,
    date,
  },
}) => {
  const userId = auth.user && auth.user._id;

  const isLiked = likes.some(
    (like) => like.user.toString() === userId
  );

  const isDisliked = dislikes.some(
    (dislike) => dislike.user.toString() === userId
  );

  return (
    <div className="min-w-0">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-5">
        <img
          src={avatar}
          alt={name}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
        />

        <div className="min-w-0">
          <Link
            to={`/profile/${user}`}
            className="text-white font-semibold hover:text-indigo-400 transition break-words"
          >
            {name}
          </Link>

          <p className="text-slate-500 text-xs sm:text-sm">
            <Moment fromNow>{date}</Moment>
          </p>
        </div>
      </div>

      {/* Post Text */}
      <p className="text-slate-200 text-sm sm:text-base leading-7 whitespace-pre-wrap break-words mb-6">
        {text}
      </p>

      {/* Actions */}
      {showActions && (
        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <button
            onClick={() => {
              if (isLiked) {
                removeLike(_id);
              } else {
                addLike(_id);
              }
            }}
            className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 w-full sm:w-auto sm:min-w-[140px] justify-center rounded-xl border border-green-500 ${
              isLiked
                ? "bg-green-600 text-white"
                : "text-green-400 bg-slate-800"
            } hover:bg-green-600 hover:text-white transition font-semibold text-sm sm:text-base`}
          >
            👍 Like {likes.length > 0 && `(${likes.length})`}
          </button>

          <button
            onClick={() => {
              if (isDisliked) {
                removeDislike(_id);
              } else {
                addDislike(_id);
              }
            }}
            className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 w-full sm:w-auto sm:min-w-[140px] justify-center rounded-xl border border-yellow-500 ${
              isDisliked
                ? "bg-yellow-600 text-white"
                : "text-yellow-400 bg-slate-800"
            } hover:bg-yellow-600 hover:text-white transition font-semibold text-sm sm:text-base`}
          >
            👎 Dislike{" "}
            {dislikes && dislikes.length > 0 && `(${dislikes.length})`}
          </button>

          <Link
            to={`/posts/${_id}`}
            className="flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 w-full sm:w-auto sm:min-w-[140px] justify-center rounded-xl border border-indigo-500 text-indigo-400 bg-slate-800 hover:bg-indigo-600 hover:text-white transition font-semibold text-sm sm:text-base"
          >
            💬 Comment{" "}
            {comments.length > 0 && `(${comments.length})`}
          </Link>

          {showActions &&
            !auth.loading &&
            auth.user &&
            user === auth.user._id && (
              <button
                onClick={() => deletePosts(_id)}
                className="flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 w-full sm:w-auto sm:min-w-[160px] justify-center rounded-xl border border-red-500 text-red-400 bg-slate-800 hover:bg-red-600 hover:text-white transition font-semibold text-sm sm:text-base"
              >
                🗑 Delete Post
              </button>
            )}
        </div>
      )}
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  showActions: PropTypes.bool,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  addDislike: PropTypes.func.isRequired,
  removeDislike: PropTypes.func.isRequired,
  deletePosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  addLike,
  removeLike,
  addDislike,
  removeDislike,
  deletePosts,
})(PostItem);