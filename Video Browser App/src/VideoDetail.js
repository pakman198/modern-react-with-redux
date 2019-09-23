import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }
  
  const { snippet: { title, description }, id: { videoId }} = video;
  const videoSrc = `https://youtube.com/embed/${videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} frameborder="0" title="video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">
          { title }
        </h4>
        <p>{ description }</p>
      </div>
      
    </div>
  );
}

export default VideoDetail;