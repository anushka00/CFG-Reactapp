import "./App.css";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import {Logpara} from "./components/Logpara";
import Signpara from "./components/Signpara";
import Signsprov from "./components/Signsprov";
import Logser from "./components/Logser";
// import Checkstatus_P from "./components/Checkstatus_P";

const App = () => {
  return (
    // <Checkstatus_P />
    <Logser />
      // <BrowserRouter>
      //   <Routes>
      //     <Route exact path="/" element={<Home />} />
      //     <Route exact path="/about" element={<About />} />

      //     <Route exact path="/signpara" element={<Signpara />} />
      //     <Route exact path="/loginpara" element={<Logpara />}/>
      //     <Route exact path="/signsprov" element={<Signsprov />} />
      //   </Routes>
      // </BrowserRouter>
  );
};
export default App;


