import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  return (
    <div className="bg-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 my-4 sm:my-6 border border-slate-700 shadow-xl">
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, { text });
          setText("");
        }}
      >
        <textarea
          name="text"
          rows="4"
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="w-full p-3.5 sm:p-4 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 resize-none text-sm sm:text-base leading-6"
        />

        <button
          type="submit"
          className="w-full px-5 sm:px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition text-sm sm:text-base"
        >
          🚀 Submit Comment
        </button>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);