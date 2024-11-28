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

import React from "react";
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png'; // Added the missing 'save' import
import jack from "../../assets/jack.png";
import user_profile from '../../assets/user_profile.jpg';

const PlayVideo = () => {
    return (
            <div className="play-video">
                <video src={video1} controls autoPlay muted></video> {/* Changed autoplay to autoPlay */}
                <h3>Best Channel</h3>
                <div className="play-video-info">
                    <p>1525 Views &bull; 2 days ago</p>
                <div>
                <span><img src={like} alt="like" /> 546</span>
                <span><img src={dislike} alt="dislike" /> 14</span>
                <span><img src={share} alt="share" /> share</span>
                <span><img src={save} alt="save" /> save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
        <div>
        <p>Coolspirit</p>
        <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p> It's a best Gaming Channel</p>
            <p> Subscribe Coolspirit to Watch More Gaming Video's</p>
            <hr />
            <h4> 139 Comments</h4>
            <div className="comment">
            <img src={user_profile} alt="" />
            <div>
            <h3> Jack Nicholson <span>1 day ago</span></h3>
            <p>"Your gameplay skills are amazing, and the commentary is super engaging. I’m hooked on your channel—keep up the great work!"</p>
            <div className="comments-action">
                <img src={like} alt="" />
                <span>293</span>
                <img src={dislike} alt=""/>
            </div>
            </div>
            </div>

            <div className="comment">
            <img src={user_profile} alt="" />
            <div>
            <h3> Jack Nicholson <span>1 day ago</span></h3>
            <p>"Your gameplay skills are amazing, and the commentary is super engaging. I’m hooked on your channel—keep up the great work!"</p>
            <div className="comments-action">
                <img src={like} alt="" />
                <span>293</span>
                <img src={dislike} alt=""/>
            </div>
            </div>
            </div>
            <div className="comment">
            <img src={user_profile} alt="" />
            <div>
            <h3> Jack Nicholson <span>1 day ago</span></h3>
            <p>"Your gameplay skills are amazing, and the commentary is super engaging. I’m hooked on your channel—keep up the great work!"</p>
            <div className="comments-action">
                <img src={like} alt="" />
                <span>293</span>
                <img src={dislike} alt=""/>
            </div>
            </div>
            </div>

            <div className="comment">
            <img src={user_profile} alt="" />
            <div>
            <h3> Jack Nicholson <span>1 day ago</span></h3>
            <p>"Your gameplay skills are amazing, and the commentary is super engaging. I’m hooked on your channel—keep up the great work!"</p>
            <div className="comments-action">
                <img src={like} alt="" />
                <span>293</span>
                <img src={dislike} alt=""/>
            </div>
            </div>
            </div>
            <div className="comment">
            <img src={user_profile} alt="" />
            <div>
            <h3> Jack Nicholson <span>1 day ago</span></h3>
            <p>"Your gameplay skills are amazing, and the commentary is super engaging. I’m hooked on your channel—keep up the great work!"</p>
            <div className="comments-action">
                <img src={like} alt="" />
                <span>293</span>
                <img src={dislike} alt=""/>
            </div>
            </div>
            </div>
            <div className="comment">
            <img src={user_profile} alt="" />
            <div>
            <h3> Jack Nicholson <span>1 day ago</span></h3>
            <p>"Your gameplay skills are amazing, and the commentary is super engaging. I’m hooked on your channel—keep up the great work!"</p>
            <div className="comments-action">
                <img src={like} alt="" />
                <span>293</span>
                <img src={dislike} alt=""/>
            </div>
            </div>
            </div>

            <div className="comment">
            <img src={user_profile} alt="" />
            <div>
            <h3> Jack Nicholson <span>1 day ago</span></h3>
            <p>"Your gameplay skills are amazing, and the commentary is super engaging. I’m hooked on your channel—keep up the great work!"</p>
            <div className="comments-action">
                <img src={like} alt="" />
                <span>293</span>
                <img src={dislike} alt=""/>
            </div>
            </div>
            </div>
            <div className="comment">
            <img src={user_profile} alt="" />
            <div>
            <h3> Jack Nicholson <span>1 day ago</span></h3>
            <p>"Your gameplay skills are amazing, and the commentary is super engaging. I’m hooked on your channel—keep up the great work!"</p>
            <div className="comments-action">
                <img src={like} alt="" />
                <span>293</span>
                <img src={dislike} alt=""/>
            </div>
            </div>
            </div>
            <div className="comment">
            <img src={user_profile} alt="" />
            <div>
            <h3> Jack Nicholson <span>1 day ago</span></h3>
            <p>"Your gameplay skills are amazing, and the commentary is super engaging. I’m hooked on your channel—keep up the great work!"</p>
            <div className="comments-action">
                <img src={like} alt="" />
                <span>293</span>
                <img src={dislike} alt=""/>
            </div>
            </div>
            </div>
            <div className="comment">
            <img src={user_profile} alt="" />
            <div>
            <h3> Jack Nicholson <span>1 day ago</span></h3>
            <p>"Your gameplay skills are amazing, and the commentary is super engaging. I’m hooked on your channel—keep up the great work!"</p>
            <div className="comments-action">
                <img src={like} alt="" />
                <span>293</span>
                <img src={dislike} alt=""/>
            </div>
            </div>
            </div>
            <div className="comment">
            <img src={user_profile} alt="" />
            <div>
            <h3> Jack Nicholson <span>1 day ago</span></h3>
            <p>"Your gameplay skills are amazing, and the commentary is super engaging. I’m hooked on your channel—keep up the great work!"</p>
            <div className="comments-action">
                <img src={like} alt="" />
                <span>293</span>
                <img src={dislike} alt=""/>
            </div>
            </div>
            </div>
            <div className="comment">
            <img src={user_profile} alt="" />
            <div>
            <h3> Jack Nicholson <span>1 day ago</span></h3>
            <p>"Your gameplay skills are amazing, and the commentary is super engaging. I’m hooked on your channel—keep up the great work!"</p>
            <div className="comments-action">
                <img src={like} alt="" />
                <span>293</span>
                <img src={dislike} alt=""/>
            </div>
            </div>
            </div>
        </div>
        
        
        
        
        
        
        </div>
    );
};

export default PlayVideo;
