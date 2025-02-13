
import React from 'react';

const YouTubeEmbed =() => {
  return (
    <div className="video-responsive">
     <iframe 
        width="560"
        height="315" 
        src="https://www.youtube.com/embed/ymhg96JqSLQ?si=2l3KzfBIwKrquU80"
        title="YouTube video player"
        frameborder="0"
        allow="fullscreen;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
      </iframe>
    </div>
  );
};

export default YouTubeEmbed;
