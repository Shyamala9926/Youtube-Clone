// import React, { useState } from "react";

// import './video.css';
// import PlayVideo from "../../components/PlayVideo/PlayVideo";
// import Recommended from "../../components/Recommended/Recommended";
// import { useParams } from "react-router-dom";

// const Video =()=>
// {

//     const {videoId,categoryId}=useParams();

//     return(
//         <div className="play-container">
//             <PlayVideo videoId={videoId}/>
//             <Recommended categoryId={categoryId}/>

//         </div>
//     )
// }


// export default Video;



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlayVideo from "../../components/PlayVideo/PlayVideo";
import Recommended from "../../components/Recommended/Recommended";
import { API_KEY } from "../../data"; 
import './video.css';

const Video = () => {
  const { videoId, categoryId } = useParams();
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setVideoData(data.items[0]);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };
    fetchVideoData();
  }, [videoId]);

  return (
    <div className="play-container">
      {videoData ? (
        <>
          <PlayVideo videoId={videoId} />
          <Recommended categoryId={categoryId} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Video;

