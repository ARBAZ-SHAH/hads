import React from "react";
import YouTube from "react-youtube";

const VideoCard = ({ videoId, title }) => {
  const opts = {
    height: '100%',  // Set height to 100%
    width: '100%',   // Set width to 100%
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
  };

  return (
    <div className="flex flex-col h-full bg-[#181818] rounded-lg overflow-hidden shadow-lg">
      <div className="relative pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
        <YouTube
          videoId={videoId}
          className="absolute top-0 left-0 w-full h-full"
          opts={opts}
        />
      </div>
      <div className="p-4 text-white bg-[#181818]">
        <h5 className="text-xl font-semibold">{title}</h5>
      </div>
    </div>
  );
};

export default VideoCard;
