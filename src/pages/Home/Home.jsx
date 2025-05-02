/*import React, { useState } from "react";
import './Home.css';
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/Feed/Feed";

const Home = ({ sidebar }) => {

    const[category,setCategory]=useState(0);

    return (
        <>
        
            <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
            <div className={`container ${sidebar ? "" : 'large-container'}`}>
                <Feed category={category}/>
            </div>
        </>
    );
};

export default Home;*/
// import React, { useState, useEffect } from "react";
// import "./Home.css";
// import Sidebar from "../../components/sidebar/sidebar";
// import Feed from "../../components/Feed/Feed";
// import { API_KEY } from "../../data";

// const Home = ({ sidebar, searchQuery }) => {
//   const [category, setCategory] = useState(0);
//   const [videos, setVideos] = useState([]);

//   // Fetch videos from YouTube Data API based on searchQuery
//   useEffect(() => {
//     const fetchVideos = async () => {
//       if (!searchQuery) return;

//       try {
//         const API_KEY = {API_KEY}; // Replace with your YouTube Data API Key
//         const response = await fetch(
//           `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${API_KEY}`
//         );
//         const data = await response.json();
//         setVideos(data.items || []);
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//         setVideos([]);
//       }
//     };

//     fetchVideos();
//   }, [searchQuery]);

//   return (
//     <div className={`home ${sidebar ? "with-sidebar" : "large-container"}`}>
//       {/* Sidebar */}
//       <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />

//       {/* Main Content */}
//       <div className={`container ${sidebar ? "" : "large-container"}`}>
//         {/* Feed for selected category */}
//         <Feed category={category} />

//         {/* Search Results */}
//         <div className="video-list">
//           {videos.length > 0 ? (
//             <ul>
//               {videos.map((video) => (
//                 <li key={video.id.videoId || video.etag}>
//                   <img
//                     src={video.snippet.thumbnails.default.url}
//                     alt={video.snippet.title}
//                   />
//                   <p>{video.snippet.title}</p>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             searchQuery && <p>No videos found for "{searchQuery}"</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import "./Home.css";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/Feed/Feed";
import { API_KEY } from "../../data"; 

const Home = ({ sidebar, searchQuery }) => {
  const [category, setCategory] = useState(0);
  const [videos, setVideos] = useState([]);

  // Fetch videos from YouTube Data API based on searchQuery
  useEffect(() => {
    const fetchVideos = async () => {
      if (!searchQuery) return; // Don't fetch if there's no search query
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${API_KEY}`
        );
        const data = await response.json();
        setVideos(data.items || []);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setVideos([]);
      }
    };
    fetchVideos();
  }, [searchQuery]); // Run effect when searchQuery changes

  return (
    <div className={`home ${sidebar ? "with-sidebar" : "large-container"}`}>
      {/* Sidebar */}
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />

      {/* Main Content */}
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        {/* Feed for selected category */}
        <Feed category={category} />

        {/* Search Results */}
        <div className="video-list">
          {videos.length > 0 ? (
            <ul>
              {videos.map((video) => (
                <li key={video.id.videoId || video.etag}>
                  <a href={`/video/${video.id.videoId}`}>
                    <img
                      src={video.snippet.thumbnails.default.url}
                      alt={video.snippet.title}
                    />
                    <p>{video.snippet.title}</p>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            searchQuery && <p>No videos found for "{searchQuery}"</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;