import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, select }) => {
  // {videos}==props.videos
  const renderdlist = videos.map((video) => {
    return <VideoItem key={video.id.videoId} select={select} video={video} />;
  });
  return <div className="ui relaxed divided list">{renderdlist}</div>;
};
export default VideoList;
