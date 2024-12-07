import React, { useEffect, useState } from "react";
import './Feed.css'
// import thumbnail1 from '../../assets/thumbnail1.png'
// import thumbnail2 from '../../assets/thumbnail2.png'

// import thumbnail3 from '../../assets/thumbnail3.png'

// import thumbnail4 from '../../assets/thumbnail4.png'

// import thumbnail5 from '../../assets/thumbnail5.png'
// import thumbnail6 from '../../assets/thumbnail6.png'
// import thumbnail7 from '../../assets/thumbnail7.png'
// import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom';
import {API_KEY} from'../../data';
import value_converter from'../../data';
import moment from "moment";


const Feed = ({ category }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
        try {
            const response = await fetch(videoListUrl);
            const result = await response.json();
            setData(result.items || []); // Ensure data is valid
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [category]);

    return (
        <div className="feed">
            {data.length > 0 ? (
                data.map((item, index) => (
                    <Link 
                        to={`/video/${item.snippet.categoryId}/${item.id}`} 
                        className="Card" 
                        key={index}
                    >
                        <img 
                            src={item.snippet.thumbnails?.medium?.url || thumbnail1} 
                            alt={item.snippet.title || "Video thumbnail"} 
                        />
                        <h2>{item.snippet.title || "Default Title"}</h2>
                        <h3>{item.snippet.channelTitle || "Unknown Channel"}</h3>
                        <p>{value_converter(item.statistics.viewCount)} View &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                    </Link>
                ))
            ) : (
                <p>Loading videos...</p>
            )}
        </div>
    );
};

/*const Feed = ({category})=>{

    const [data,setData]=useState([]);

const fetchData = async () =>{
    const videoList_url='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}'
    await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
}

useEffect(()=>{
    fetchData();
},[category])

    return(
        <div className="feed">
            {data.map((item,index)=>{
                return(
            <Link to={'video/${item.snippet.categoryId}/${item.id}'} className="Card">
            <img src={item.snippet.thumbnail1s.medium.url} alt="" />
            <h2>Best channel to learn codeing that help you to be a web developer</h2>
            <h3>Coolspirit</h3>
            <p> 20k views &bull; 2 days ago</p>
            </Link>
                )
            })}*/

            /* <Link to={'/video/20/4521'} className="Card">
            <img src={thumbnail1} alt="" />
            <h2>Best channel to learn codeing that help you to be a web developer</h2>
            <h3>Coolspirit</h3>
            <p> 20k views &bull; 2 days ago</p>
            </Link> */

            /* <div className="Card">
            <img src={thumbnail2} alt="" />
            <h2>Best channel to learn codeing that help you to be a web developer</h2>
            <h3>Coolspirit</h3>
            <p> 20k views &bull; 2 days ago</p>
            </div>

            <div className="Card">
            <img src={thumbnail3} alt="" />
            <h2>Best channel to learn codeing that help you to be a web developer</h2>
            <h3>Coolspirit</h3>
            <p> 20k views &bull; 2 days ago</p>
            </div>

            <div className="Card">
            <img src={thumbnail4} alt="" />
            <h2>Best channel to learn codeing that help you to be a web developer</h2>
            <h3>Coolspirit</h3>
            <p> 20k views &bull; 2 days ago</p>
            </div>

            <div className="Card">
            <img src={thumbnail5} alt="" />
            <h2>Best channel to learn codeing that help you to be a web developer</h2>
            <h3>Coolspirit</h3>
            <p> 20k views &bull; 2 days ago</p>
            </div>

            <div className="Card">
            <img src={thumbnail6} alt="" />
            <h2>Best channel to learn codeing that help you to be a web developer</h2>
            <h3>Coolspirit</h3>
            <p> 20k views &bull; 2 days ago</p>
            </div>

            

            <div className="Card">
            <img src={thumbnail3} alt="" />
            <h2>Best channel to learn codeing that help you to be a web developer</h2>
            <h3>Coolspirit</h3>
            <p> 20k views &bull; 2 days ago</p>
            </div>


            <div className="Card">
            <img src={thumbnail8} alt="" />
            <h2>Best channel to learn codeing that help you to be a web developer</h2>
            <h3>Coolspirit</h3>
            <p> 20k views &bull; 2 days ago</p>
            </div> */
        // </div>
    // )
// }

export default Feed;