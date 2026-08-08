import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteComment } from "../../actions/post";

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => (
  <div className="bg-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 my-3 sm:my-4 border border-slate-700 shadow-xl min-w-0">
    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
      <Link to={`/profile/${user}`} className="flex-shrink-0">
        <img
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 sm:border-4 border-indigo-500 object-cover"
          src={
            avatar ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}`
          }
          alt={name}
        />
      </Link>

      <h4 className="text-lg sm:text-xl font-bold text-white break-words min-w-0">
        {name}
      </h4>
    </div>

    <div className="mt-4 sm:mt-5">
      <p className="text-base sm:text-lg text-slate-200 leading-7 sm:leading-8 break-words whitespace-pre-line">
        {text}
      </p>

      <p className="text-xs sm:text-sm text-slate-400 mt-3 sm:mt-4">
        Posted on{" "}
        <Moment format="DD MMM YYYY">{date}</Moment>
      </p>

      {!auth.loading &&
        auth.user &&
        user === auth.user._id && (
          <button
            onClick={() => deleteComment(postId, _id)}
            className="mt-4 sm:mt-6 w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 rounded-xl border border-red-500 text-red-400 bg-slate-800 hover:bg-red-600 hover:text-white transition font-semibold text-sm sm:text-base"
          >
            🗑 Remove Comment
          </button>
        )}
    </div>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);