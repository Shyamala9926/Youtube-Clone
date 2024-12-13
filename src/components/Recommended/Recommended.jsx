// import React, { useEffect, useState } from "react";
// import './Recommended.css';

// // import thumbnail1 from '../../assets/thumbnail1.png'
// // import thumbnail2 from '../../assets/thumbnail2.png'

// import { data } from "react-router-dom";
// import value_converter from "../../data";
// import { API_KEY } from "../../data";
// import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom';



// const Recommended =({categoryId})=>{

//     const [apiData,setApiData]=useState([]);
//     const fetchData =async ()=>{
//         const relatedVideo_url = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}';
//         await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items));

//     }
//         useEffect(()=>{
//             fetchData();
//         },[])




//     return(
//         <div className="recommended">
//             {apiData.map((item,index)=>{
//                 return(
//                     <Link to={'/video/${item.snippet.categoryId}/${item.id}'} key={index} className="side-video-list">
//                     <img src={item.snippet.thumbnail1s.medium.url} alt="" />
//                     <div className="vid-info">
//                         <h4> {item.snippet.title}</h4>
//                         <p>{item.snippet.channelTitle}</p>
//                         <p>{value_converter(item.statistics.viewCount)} views</p>
//                     </div>
//                 </Link>
//                 )
//             })}
//              {/* <div className="side-video-list">
//                 <img src={thumbnail1} alt="" />
//                 <div className="vid-info">
//                     <h4> Best channel that you to be a web developer</h4>
//                     <p>CoolSpirit</p>
//                     <p>199k Views</p>
//                 </div>
//             </div>


//             <div className="side-video-list">
//                 <img src={thumbnail2} alt="" />
//                 <div className="vid-info">
//                     <h4> Best channel that you to be a web developer</h4>
//                     <p>CoolSpirit</p>
//                     <p>199k Views</p>
//                 </div>
//             </div>*/ }
            
//         </div>
//     )
// }

// export default Recommended;


import React, { useEffect, useState } from "react";
import './Recommended.css';
import value_converter from "../../data";
import { API_KEY } from "../../data";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const Recommended = ({ categoryId }) => {
    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        try {
            const relatedVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=15&regionCode=US&videoCategoryId=${categoryId || "0"}&key=${API_KEY}`;
            const response = await fetch(relatedVideoUrl);
            const data = await response.json();

            if (response.ok && data.items) {
                setApiData(data.items);
            } else {
                console.error("Unexpected response:", data);
                setApiData([]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [categoryId]);

    return (
        <div className="recommended">
            {apiData.map((item) => (
                <Link
                    to={`/video/${item.snippet.categoryId}/${item.id}`}
                    key={item.id}
                    className="side-video-list"
                >
                    <img
                        src={item.snippet.thumbnails?.medium?.url}
                        alt={item.snippet.title}
                    />
                    <div className="vid-info">
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p>{value_converter(item.statistics.viewCount)} views</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Recommended;
