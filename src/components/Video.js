import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({ video }) => {
    console.log(video)
  return (
    <div className="video">
      <ReactPlayer
        url={video.submission.mediaUrl}
        width="100%"
        // height="auto"
        controls
      />
<div className='video-title'>
<h2>{video.submission.title}</h2>
      <p>{video.submission.description}</p>
</div>
    </div>
  );
};

export default Video;
