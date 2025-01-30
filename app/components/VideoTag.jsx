import React from "react";

const VideoTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white"
    : "text-[#ADB7BE] border-slate-600 hover:bg-slate-500 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default VideoTag;
