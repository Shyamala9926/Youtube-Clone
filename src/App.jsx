/*import React, { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
//import Video from "./pages/video/video"
import Sidebar from "./components/sidebar/sidebar"
import Video from "./pages/video/video"

//import Sidebar from "./components/sidebar/sidebar"

const App = ()=>{

  const [sidebar,setSidebar]=useState(true);

return(
  <div>
    <Navbar  setSidebar={setSidebar}/>
    {/* <Sidebar />  */
  // }
   /*<Routes>
   <Route path ='/'element={<Home sidebar={sidebar}/>}/>
   <Route path='/video/:CategoryId/:videoId' element={<video/>}/>

   </Routes>
    
  </div>
)
}

export default App*/


// import React, { useState, Suspense, lazy } from "react";
// import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Sidebar from "./components/sidebar/sidebar";

// const Home = lazy(() => import("./pages/Home/Home"));
// const Video = lazy(() => import("./pages/video/video"));

// const App = () => {
//     const [sidebar, setSidebar] = useState(true);

//     return (
//         <div>
//             <Navbar setSidebar={setSidebar} />
//             <div className={`app-container ${sidebar ? 'sidebar-visible' : ''}`}>
//                 {sidebar && <Sidebar sidebar={sidebar} />}
//                 <Suspense fallback={<div>Loading...</div>}>
//                     <Routes>
//                         <Route path="/" element={<Home sidebar={sidebar} />} />
//                         <Route path="/video/:CategoryId/:videoId" element={<Video />} />
//                         <Route path="*" element={<div>Page Not Found</div>} />
//                     </Routes>
//                 </Suspense>
//             </div>
//         </div>
//     );
// };

// export default App;




import React, { useState, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/sidebar/sidebar";

const Home = lazy(() => import("./pages/Home/Home"));
const Video = lazy(() => import("./pages/video/video"));
const SearchResults = lazy(() => import("./components/SearchResults/SearchResults"));

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <div className={`app-container ${sidebar ? "sidebar-visible" : ""}`}>
        {sidebar && <Sidebar sidebar={sidebar} />}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home sidebar={sidebar} />} />
            <Route path="/video/:CategoryId/:videoId" element={<Video />} />
            <Route path="/search/:query" element={<SearchResults />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;