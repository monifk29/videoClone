import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import '../App.css';

const Video = ({ video }) => {
    const [likes, setlikes] = useState(video.reaction.count);
    const [liked, setLiked] = useState(video.reaction.voted);
    const [comments, setComments] = useState(video.comment.count)
    

    console.log(likes, comments)


    const handleLike = () => {
        if(!liked){
            setlikes(likes + 1)
        }
        else{
            setlikes(likes - 1)
        }
        setLiked(!liked)
    }

    const handleComment = () => {
        setComments(comments + 1)
    }
  return (
    <div className="video">
    <ReactPlayer className = "react-player"
        url={video.submission.mediaUrl}
        width="100%"
        // height="auto"
        controls
        light = {video.submission.thumbnail}
      />
     <div className='Likes-comm'>
        <button onClick={handleLike}>{likes} Likes</button>
        <button onClick={handleComment}>{comments} Comments</button>
     </div>
<div className='video-title'>
<h2>{video.submission.title}</h2>
      <p>{video.submission.description}</p>
</div>
    </div>
  );
};

export default Video;
