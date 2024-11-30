/*import React from "react";
//import './PlayVideo.css';
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
// import jack from '../../assets/jack.png';
import jack from "../../assets/jack.png";
import user_profile from '../../assets/user_profile.jpg';

const PlayVideo=()=>{
    return(
        <div>
            <div className="play-video">
                <video src={video1} controls autoplay muted></video>
                <h3>Best Channel</h3>
                <div className="play-video-info">
                    <p> 1525 Views &bull; 2 days ago</p>
                </div>
                <span><img src={like} alt="" />546</span>
                <span><img src={dislike} alt="" />14</span>
                <span><img src={share} alt="" />346</span>
                <span><img src={save} alt="" />46</span>
            </div>

        </div>
    )
}


export default PlayVideo;*/

import React, { useEffect, useState } from "react";
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png'; // Added the missing 'save' import
import jack from "../../assets/jack.png";
import user_profile from '../../assets/user_profile.jpg';
import { API_KEY } from "../../data";
import value_converter from "../../data";
import { data } from "react-router-dom";
import moment from "moment";

const PlayVideo = ({videoId}) => {

    const [apiData,setApiData]=useState(null);
    const [channelData,setchanelData]=useState(null);
    const [commentData,setcommentData]=useState([]);



    const fetchVideoData =async() =>{
        //fetching videos data

        const videoDetails_url='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}';
        await fetch(videoDetails_url).then(res=>res.json().then(data=>setApiData(data.items[0])));
    }

    const fetchOtherData=async ()=>{
        //fetching channel data
        const channelData_url='https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}';
        await fetch(channelData_url).then(res=>res.json().then(data=>setchanelData(data.items[0])))

    //fetching comment data
    const comment_url='https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}';
    await fetch(comment_url).then(res=>res.json().then(data=>setchanelData(data.items)))
}

    useEffect(()=>{
        fetchVideoData();
    },[])


    useEffect(()=>{
        fetchOtherData();
    },[apiData])
    return (
            <div className="play-video">
                {/* <video src={video1} controls autoPlay muted></video>  */}
                {/* <iframe  src={'https://www.youtube.com/embed/${videId}?autoplay=1' } frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>

                <h3>{apiData?apiData.snippet.title:"Title Here"}</h3> 
                

                <div className="play-video-info">
                    <p>{apiData?value_converter(apiData.statistics.viewCount):"16K"} View &bull; { apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
                <div>
                <span><img src={like} alt="like" /> {apiData?value_converter(apiData.statistics.likeCount):"155"}</span>
                <span><img src={dislike} alt="dislike" /> </span>
                <span><img src={share} alt="share" /> share</span>
                <span><img src={save} alt="save" /> save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
        <div>
        <p>Coolspirit</p>
        <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
        </div>
        <button>Subscribe</button>
        </div>
        <div className="vid-description">
            
            <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
            <hr />
            <h4> {apiData?value_converter(apiData.statistics.commentCount):123}Comments</h4>
            
            {commentData.map((item,index)=>{

                return(
                    <div key={index} className="comment">
            <img src={item.snippet.topLevelComment.snippet.autherprofileImage} alt="" />
            <div>
            <h3> {item.snippet.topLevelComment.snippet.autherDisplayName} <span>1 day ago</span></h3>
            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
            <div className="comments-action">
                <img src={like} alt="" />
                <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                <img src={dislike} alt=""/>
            </div>
        </div>
    </div>
                )

            })}

        </div>
        
        
        
        
        
    
        </div>
    );
};

export default PlayVideo;
