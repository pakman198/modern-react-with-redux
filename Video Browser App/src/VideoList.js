import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const list = videos.map( video => {
    const { videoId } = video.id;
    console.log({ videoId })

    return <VideoItem key={videoId} video={video} onVideoSelect={onVideoSelect} />
  });

  return (
    <div className="video-list ui relaxed divided list">
      { list }
    </div>
  );
}

export default VideoList;