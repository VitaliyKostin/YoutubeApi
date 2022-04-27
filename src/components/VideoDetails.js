import React from 'react';

const VideoDetails = ({ video }) => {
   if (!video) return <div>Loading...</div>;
   const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
   return (
      <div>
         <div className="ui embed">
            <iframe src={videoUrl} />
         </div>
         <div className="ui segment">
            <div className="ui header">{video.snippet.title}</div>
            <p>{video.snippet.description}</p>
         </div>
      </div>
   );
};

export default VideoDetails;
