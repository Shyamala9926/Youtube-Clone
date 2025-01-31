import React, { useEffect, useState } from "react";
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from "../../assets/jack.png";
import user_profile from '../../assets/user_profile.jpg';
import { API_KEY } from "../../data";
import value_converter from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";
import { data } from "react-router-dom";

const PlayVideo = () => {

    const {videoId}=useParams();

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    // Fetch video details
    const fetchVideoData = async () => {
        const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        try {
            const response = await fetch(videoDetailsUrl);
            const data = await response.json();
            setApiData(data.items[0]);
        } catch (error) {
            console.error("Error fetching video data:", error);
        }
    };

    // Fetch channel and comment data
    const fetchOtherData = async () => {
        if (!apiData?.snippet?.channelId) return;

        try {
            // Fetch channel data
            const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
            const channelResponse = await fetch(channelDataUrl);
            const channelResult = await channelResponse.json();
            setChannelData(channelResult.items[0]);

            // Fetch comments data
            const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
            const commentResponse = await fetch(commentUrl);
            const commentResult = await commentResponse.json();
            setCommentData(commentResult.items || []);
        } catch (error) {
            console.error("Error fetching other data:", error);
        }
    };

    useEffect(() => {
        fetchVideoData();
    }, [videoId]);

    useEffect(() => {
        fetchOtherData();
    }, [apiData]);

    return (
        <div className="play-video">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>

            <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>

            <div className="play-video-info">
                <p>
                    {apiData ? value_converter(apiData.statistics.viewCount) : "16K"} Views &bull;{" "}
                    {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
                </p>
                <div>
                    <span>
                        <img src={like} alt="like" />{" "}
                        {apiData ? value_converter(apiData.statistics.likeCount) : "155"}
                    </span>
                    <span>
                        <img src={dislike} alt="dislike" />
                    </span>
                    <span>
                        <img src={share} alt="share" /> Share
                    </span>
                    <span>
                        <img src={save} alt="save" /> Save
                    </span>
                </div>
            </div>

            <hr />

            <div className="publisher">
                <img
                    src={channelData ? channelData.snippet.thumbnails.default.url : ""}
                    alt="Channel Thumbnail"
                />
                <div>
                    <p>{channelData ? channelData.snippet.title : "Coolspirit"}</p>
                    <span>
                        {channelData
                            ? value_converter(channelData.statistics.subscriberCount)
                            : "1M"}{" "}
                        Subscribers
                    </span>
                </div>
                <button>Subscribe</button>
            </div>

            <div className="vid-description">
                <p>
                    {apiData
                        ? apiData.snippet.description.slice(0, 250)
                        : "Description Here"}
                </p>
                <hr />
                <h4>
                    {apiData ? value_converter(apiData.statistics.commentCount) : 123} Comments
                </h4>
                {commentData.map((item, index) => (
                    <div key={index} className="comment">
                        <img
                            src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                            alt="Commenter"
                        />
                        <div>
                            <h3>
                                {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                                <span>1 day ago</span>
                            </h3>
                            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                            <div className="comments-action">
                                <img src={like} alt="like" />
                                <span>
                                    {value_converter(
                                        item.snippet.topLevelComment.snippet.likeCount
                                    )}
                                </span>
                                <img src={dislike} alt="dislike" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayVideo;




/*import React, { useEffect, useState } from "react";
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
     

        const videoDetails_url='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}';
        await fetch(videoDetails_url).then(res=>res.json().then(data=>setApiData(data.items[0])));
    }

    const fetchOtherData=async ()=>{
        //fetching channel data
        const channelData_url='https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}';
        await fetch(channelData_url).then(res=>res.json().then(data=>setchanelData(data.items[0])))

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
                {/* <video src={video1} controls autoPlay muted></video>  */
                /* <iframe  src={'https://www.youtube.com/embed/${videId}?autoplay=1' } frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */
               /* <iframe
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

export default PlayVideo;*/