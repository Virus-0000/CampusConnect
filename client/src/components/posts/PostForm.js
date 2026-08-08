import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addPost({ text });
        setText("");
      }}
      className="space-y-4"
    >
      <textarea
        name="text"
        placeholder="Create a post..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        rows="4"
        className="w-full rounded-2xl bg-slate-700 border border-slate-600 p-4 sm:p-5 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 resize-none text-sm sm:text-base leading-6"
      />

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-500 py-3.5 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg transition"
      >
        🚀 Submit Post
      </button>
    </form>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);