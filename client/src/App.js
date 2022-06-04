import "./App.css";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import {Logpara} from "./components/Logpara";
import Signpara from "./components/Signpara";
<<<<<<< HEAD
=======
import Signsprov from "./components/Signsprov";





>>>>>>> 27f8af342c5c6c41b4d648c1033765849f5820ee
const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />

          <Route exact path="/signpara" element={<Signpara />} />
<<<<<<< HEAD
          <Route exact path="/loginpara" element={<Logpara />}/>
=======
          <Route exact path="/signsprov" element={<Signsprov />} />

          <Route exact path="/Signpara" element={<Signpara />} />

          
>>>>>>> 27f8af342c5c6c41b4d648c1033765849f5820ee
        </Routes>
      </BrowserRouter>
  );
};
export default App;
