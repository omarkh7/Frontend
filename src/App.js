import './App.css';
import { BrowserRouter, Route, Routes, } from "react-router-dom";

// import Biography from './Components/Biography/Biography.jsx';

// import Blogs from './Components/Blogs/Blogs.jsx';
// import './Components/Certification/Certification'

// import Modals from './Components/BioHomepage/BioHomepage';


// import Home from './Components/home';
import AllCertifications from './Components/Certification/Certification';
import AllHighlights from './Components/Highlights/Highlights';
import HomePage from './Components/Home/Home';
import AllWriteups from './Components/Writeups/Writeups';


function App() {
  return (
    <div >
      {/* <Biography/> */}
      {/* <Blogs/>  */}
      
{/* <Modals />  */}

{/* <PostBlog/> */}

{/* <Achievements/>
<Acknowledgments/> */}
{/* <Certification/> */}
{/* <Highlights/>
<Writeups/> */}

<BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/Certification" element={<AllCertifications/>}></Route>
      <Route path="/Highlights" element={<AllHighlights/>}></Route>
      <Route path="/Writeups" element={<AllWriteups/>}></Route>
    </Routes>
  </BrowserRouter>

  {/* <HomePage/> */}
      </div>
  );
}

export default App;
