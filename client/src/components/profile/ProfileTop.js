import React from "react";
import PropTypes from "prop-types";
import { Globe, MapPin, Building } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ProfileTop = ({ profile }) => {
  const {
    status,
    company,
    location,
    website,
    social,
    user,
  } = profile;

  return (
    <div className="bg-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 text-center shadow-xl">
      {/* Avatar */}
      {user?.avatar ? (
        <img
          src={user.avatar}
          alt={user.name}
          className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover mx-auto border-4 border-indigo-500"
        />
      ) : (
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-slate-700 flex items-center justify-center mx-auto border-4 border-indigo-500 text-4xl sm:text-5xl">
          👤
        </div>
      )}

      {/* Name */}
      <h1 className="text-3xl sm:text-4xl font-bold text-white mt-5 break-words">
        {user?.name}
      </h1>

      {/* Status */}
      {status && (
        <p className="text-indigo-400 text-lg sm:text-xl mt-2 break-words">
          {status}
        </p>
      )}

      {/* Company */}
      {company && (
        <p className="text-slate-300 mt-4 flex justify-center items-center gap-2 text-sm sm:text-base break-words">
          <Building size={18} className="flex-shrink-0" />
          <span>{company}</span>
        </p>
      )}

      {/* Location */}
      {location && (
        <p className="text-slate-400 mt-2 flex justify-center items-center gap-2 text-sm sm:text-base break-words">
          <MapPin size={18} className="flex-shrink-0" />
          <span>{location}</span>
        </p>
      )}

      {/* Social Links */}
      <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className="bg-slate-700 p-3 sm:p-4 rounded-xl hover:bg-indigo-600 transition"
          >
            <Globe size={20} className="sm:w-6 sm:h-6" />
          </a>
        )}

        {profile.githubusername && (
          <a
            href={`https://github.com/${profile.githubusername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-700 p-3 sm:p-4 rounded-xl hover:bg-indigo-600 transition"
          >
            <FaGithub size={20} className="sm:w-6 sm:h-6" />
          </a>
        )}

        {social?.linkedin && (
          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="bg-slate-600 p-3 sm:p-4 rounded-xl hover:bg-indigo-600 transition"
          >
            <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
          </a>
        )}

        {social?.twitter && (
          <a
            href={social.twitter}
            target="_blank"
            rel="noreferrer"
            className="bg-slate-600 p-3 sm:p-4 rounded-xl hover:bg-indigo-600 transition"
          >
            <FaTwitter size={20} className="sm:w-6 sm:h-6" />
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;