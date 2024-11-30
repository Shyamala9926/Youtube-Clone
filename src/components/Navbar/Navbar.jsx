import React from "react";
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from "react-router-dom";

const Navbar =({setSidebar})=>{
    return(
        <nav className="flex-dev">
            {/* <div className="nav-lef flex-div">
                <img className="menu-icon" onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon}alt=""/>
                <img className="logo" src={logo}alt=""/>
            </div> */}

<div className="nav-left flex-div">
                {/* Menu icon toggles the sidebar */}
                <img
                    className="menu-icon"
                    onClick={() => setSidebar(prev => !prev)} // Toggle sidebar state
                    src={menu_icon}
                    alt="Menu Icon"
                />
               <Link to='/'> <img className="logo" src={logo} alt="Logo" /></Link>
            </div>
            
            <div className="nav-middle flex-div">
            <div className="search-box flex-div">
            <input type="text" placeholder="search"/>
            <img src ={search_icon} alt="" />
            </div>
                </div>

                <div className="nav-right flex-dev">
                    <img src={upload_icon}alt="" />
                    <img src={more_icon} alt="" />
                    <img src={notification_icon}alt="" />
                    <img src={profile_icon} className="user-icon" alt="" />
                </div>
        </nav>
    )
}


export default Navbar;
