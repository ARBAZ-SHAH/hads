import React, { useRef } from "react";
import YouTube from "react-youtube";

const VideoCard = ({ videoId, title }) => {
  const playerRef = useRef(null); // Store YouTube Player instance

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
  };

  // Store player instance on ready
  const onReady = (event) => {
    playerRef.current = event.target;
  };

  // Function to play video safely
  const playVideo = () => {
    if (playerRef.current) {
      playerRef.current.playVideo(); // Play only if player is ready
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#181818] rounded-3xl overflow-hidden shadow-lg">
      <div className="relative pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
        <YouTube
          videoId={videoId}
          className="absolute top-0 left-0 w-full h-full"
          opts={opts}
          onReady={onReady} // Attach event handler
        />
      </div>
      <div className="p-4 text-white bg-[#181818]">
        <h5 className="text-xl font-semibold">{title}</h5>
        <button 
          onClick={playVideo} 
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-700"
        >➤</button>
      </div>
    </div>
  );
};

export default VideoCard;
