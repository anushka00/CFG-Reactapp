import "./App.css";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import {Logpara} from "./components/Logpara";
import Signpara from "./components/Signpara";
import Signsprov from "./components/Signsprov";
import LoginPage from './components/LoginPage';
import Checkstatus_P from "./components/Checkstatus_P";
import Logser from './components/Logser';
import { Footer } from "./components/Footer";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signpara" element={<Signpara />} />
          <Route exact path="/loginpara" element={<Logpara />}/>
          <Route exact path="/signsprov" element={<Signsprov />} />
          <Route exact path="/checkStatus" element={<Checkstatus_P />} />
          <Route exact path="/logser" element={<Logser />} />
          <Route exact path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
  );
};
export default App;
