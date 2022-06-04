import "./App.css";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import {Logpara} from "./components/Logpara";
import Signpara from "./components/Signpara";
const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/signpara" element={<Signpara />} />
          <Route exact path="/loginpara" element={<Logpara />}/>
        </Routes>
      </BrowserRouter>
  );
};
export default App;
