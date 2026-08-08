import React from "react";
import { Link } from "react-router-dom";
import { User, GraduationCap, Briefcase } from "lucide-react";

const DashboardActions = () => {
  const actions = [
    {
      title: "Edit Profile",
      desc: "Update your personal information and skills.",
      icon: <User size={28} />,
      link: "/edit-profile",
      color: "text-indigo-400",
      hover:
        "hover:ring-2 hover:ring-indigo-400 hover:bg-indigo-900/20",
    },
    {
      title: "Add Education",
      desc: "Add your academic background.",
      icon: <GraduationCap size={28} />,
      link: "/add-education",
      color: "text-green-400",
      hover:
        "hover:ring-2 hover:ring-green-400 hover:bg-green-900/20",
    },
    {
      title: "Add Experience",
      desc: "Showcase your professional journey.",
      icon: <Briefcase size={28} />,
      link: "/add-experience",
      color: "text-pink-400",
      hover:
        "hover:ring-2 hover:ring-pink-400 hover:bg-pink-900/20",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
      {actions.map((action, index) => (
        <Link
          key={index}
          to={action.link}
          className={`no-underline bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-5 sm:p-6 border border-slate-700 shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 ${action.hover} transition duration-300 min-w-0`}
        >
          <div
            className={`${action.color} mb-4 sm:mb-6 bg-slate-900 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center`}
          >
            {action.icon}
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white">
            {action.title}
          </h3>

          <p className="text-slate-400 mt-2 text-sm sm:text-base leading-6">
            {action.desc}
          </p>

          <div className={`mt-4 sm:mt-5 ${action.color} font-semibold text-sm sm:text-base`}>
            Open →
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DashboardActions;