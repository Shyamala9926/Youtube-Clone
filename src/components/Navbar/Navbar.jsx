 

// import React from "react";
// import './Navbar.css';
// import menu_icon from '../../assets/menu.png';
// import logo from '../../assets/logo.png';
// import search_icon from '../../assets/search.png';
// import upload_icon from '../../assets/upload.png';
// import more_icon from '../../assets/more.png';
// import notification_icon from '../../assets/notification.png';
// import profile_icon from '../../assets/jack.png';
// import Im from '../../assets/Im.png';
// import { Link } from "react-router-dom";

// const Navbar = ({ setSidebar }) => {
//     return (
//         <nav className="navbar">
//             <div className="nav-left">
//                 {/* Menu icon toggles the sidebar */}
//                 <img
//                     className="menu-icon"
//                     onClick={() => setSidebar(prev => !prev)} // Toggle sidebar state
//                     src={menu_icon}
//                     alt="Menu Icon"
//                 />
//                 <Link to="/">
//                     <img className="logo" src={logo} alt="Logo" />
//                 </Link>
//             </div>

//             <div className="nav-middle">
//                 <div className="search-box">
//                     <input type="text" placeholder="Search" />
//                     <img src={search_icon} alt="Search Icon" />
//                 </div>
//             </div>

//             <div className="nav-right">
//                 <img src={upload_icon} alt="Upload Icon" />
//                 <img src={more_icon} alt="More Icon" />
//                 <img src={notification_icon} alt="Notification Icon" />
//                 <img src={Im} className="user-icon" alt="Profile Icon" />
//             </div>
//         </nav>
//     );
// };

// export default Navbar;





import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import Im from "../../assets/Im.png";

const Navbar = ({ setSidebar }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => !prev)}
          src={menu_icon}
          alt="Menu Icon"
        />
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="nav-middle">
        <div className="search-box">
          <form onSubmit={onSearch}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
            />
            <button id="searchIcon" type="submit">
              <img src={search_icon} alt="Search Icon" />
            </button>
          </form>
        </div>
      </div>
      <div className="nav-right">
        <img src={upload_icon} alt="Upload Icon" />
        <img src={more_icon} alt="More Icon" />
        <img src={notification_icon} alt="Notification Icon" />
        <img src={Im} className="user-icon" alt="Profile Icon" />
      </div>
    </nav>
  );
};

export default Navbar;