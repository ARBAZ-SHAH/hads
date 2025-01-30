import React, { useState } from "react";

const AddVideoForm = ({ onAddVideo }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Extract the video ID from the YouTube URL using a more robust method
    const videoIdMatch = videoUrl.match(/(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-]{11})/);
    const videoId = videoIdMatch ? videoIdMatch[1] : null;

    if (!videoId) {
      alert("Please enter a valid YouTube URL");
      return;
    }

    // Create new video object
    const newVideo = {
      id: Date.now(),
      title,
      videoId,
      tag: [tag],
    };

    // Add new video using the provided callback function
    onAddVideo(newVideo);

    // Clear form fields
    setVideoUrl("");
    setTitle("");
    setTag("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="YouTube URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        className="w-full p-2 mb-2 text-black"
        required
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-2 text-black"
        required
      />
      <input
        type="text"
        placeholder="Tag"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        className="w-full p-2 mb-2 text-black"
        required
      />
      <button type="submit" className="p-2 text-white bg-blue-500">
        Add Video
      </button>
    </form>
  );
};

export default AddVideoForm;
