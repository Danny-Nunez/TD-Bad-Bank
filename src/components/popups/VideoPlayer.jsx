import React from 'react';

function VideoPlayer(props) {
  return (
    <div>
      <video controls>
        <source src={props.videoUrl} type="video/mp4" />
        {/* Optional fallback for browsers that don't support HTML5 video */}
        <p>Your browser does not support HTML5 video.</p>
      </video>
    </div>
  );
}

export default VideoPlayer;
